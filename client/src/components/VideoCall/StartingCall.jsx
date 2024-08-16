import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:6060"); // Point to the shared socket server
let peerConnection;

function startingCallUser() {
  const { userId, sellerId } = useParams();
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [isCallEnded, setIsCallEnded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //   start the webrtc
    const startWebRTC = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = stream;

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
    };

    socket.on("answer", async (data) => {
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(data.answer)
      );
    });

    socket.on("iceCandidate", (data) => {
      peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
    });

    socket.on("hangup", () => {
      endCall();
    });

    startWebRTC();

    return () => peerConnection.close();
  }, [userId, sellerId]);

  const endCall = () => {
    setIsCallEnded(true);
    navigate("/"); // Navigate back to the main page or another route
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
      {!isCallEnded && <button onClick={handleHangup}>Hang Up</button>}
    </div>
  );
}

export default startingCallUser;
