// frontend/client/components/CallToSeller.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:6060"); // Socket server URL

function CallToSeller({ userId, sellerId }) {
  const [isCalling, setIsCalling] = useState(false);
  const navigate = useNavigate();
  //   const userId = "user1"; // Replace with actual userId
  //   const sellerId = "seller1"; // SellerId to call

  useEffect(() => {
    socket.emit("registerUser", { userId });

    socket.on("callAccepted", () => {
      setIsCalling(false);
      navigate("/videocall");
    });

    socket.on("callRejected", () => {
      setIsCalling(false);
      alert("Seller rejected the call");
    });
  }, []);

  const startCall = () => {
    setIsCalling(true);
    socket.emit("startCall", { from: userId, to: sellerId });
  };

  const handleHangup = () => {
    socket.emit("hangup", { from: userId, to: sellerId });
    setIsCalling(false);
  };

  return (
    <div>
      {!isCalling ? (
        <button onClick={startCall}>Call Seller</button>
      ) : (
        <button onClick={handleHangup}>Hangup</button>
      )}
    </div>
  );
}

export default CallToSeller;
