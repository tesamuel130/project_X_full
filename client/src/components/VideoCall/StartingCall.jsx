import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:6060"); // Point to the shared socket server
let peerConnection;

function Caller() {
  const { userId, sellerId } = useParams();
  const [isCalling, setIsCalling] = useState(false);
  const [isInCall, setIsInCall] = useState(false);
  //   const userId = "user1"; // Replace with actual userId
  //   const sellerId = "seller1"; // Replace with the sellerId you're calling
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    // Register the user (caller)
    socket.emit("registerUser", { userId });

    socket.on("callStarted", () => {
      setIsCalling(true);
    });

    socket.on("callAccepted", () => {
      setIsCalling(false);
      setIsInCall(true);
      startWebRTC();
    });

    socket.on("callRejected", () => {
      setIsCalling(false);
      alert("Call rejected");
    });

    socket.on("remoteStream", (stream) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream;
      }
    });
  }, [userId]);

  const startCall = () => {
    socket.emit("startCall", { from: userId, to: sellerId });
  };

  const handleHangup = () => {
    socket.emit("hangup", { from: userId, to: sellerId });
    setIsCalling(false);
    endCall();
  };

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
          candidate: event.candidate,
          to: sellerId,
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
    socket.emit("offer", { offer, to: sellerId });
  };

  const endCall = () => {
    peerConnection.close();
    peerConnection = null;
    setIsInCall(false);
  };

  return (
    <div>
      {!isCalling && <button onClick={startCall}>Call Seller</button>}
      {isCalling && <button onClick={handleHangup}>Hangup</button>}
    </div>
  );
}

export default Caller;
