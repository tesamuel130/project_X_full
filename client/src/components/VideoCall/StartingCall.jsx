import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";

function StartingCallUser() {
  const socket = io("http://localhost:6060");
  let peerConnection;

  const { userId, sellerId } = useParams();
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const startWebRTC = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        const configuration = {
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        };

        peerConnection = new RTCPeerConnection(configuration);

        stream
          .getTracks()
          .forEach((track) => peerConnection.addTrack(track, stream));

        peerConnection.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit("iceCandidate", {
              from: userId,
              to: sellerId,
              candidate: event.candidate,
            });
          }
        };

        peerConnection.ontrack = (event) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        socket.emit("offer", { from: userId, to: sellerId, offer });
      } catch (error) {
        console.error("Error starting WebRTC:", error);
      }
    };

    socket.on("answer", async (data) => {
      try {
        await peerConnection.setRemoteDescription(
          new RTCSessionDescription(data.answer)
        );
      } catch (error) {
        console.error("Error setting remote description:", error);
      }
    });

    socket.on("iceCandidate", (data) => {
      if (peerConnection) {
        peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
      }
    });

    socket.on("hangup", () => {
      endCall();
    });

    startWebRTC();

    return () => {
      if (peerConnection) {
        peerConnection.close();
      }
    };
  }, [userId, sellerId]);

  const endCall = () => {
    setIsCallEnded(true);
    socket.emit("hangup", { from: userId, to: sellerId });
    navigate("/"); // Navigate back to the main page or another route
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
      {!isCallEnded && <button onClick={endCall}>Hang Up</button>}
    </div>
  );
}

export default StartingCallUser;
