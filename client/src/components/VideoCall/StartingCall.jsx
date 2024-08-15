import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:6060"); // Point to the shared socket server

function Caller() {
  const { userId, sellerId } = useParams();
  const [isCalling, setIsCalling] = useState(false);
  //   const userId = "user1"; // Replace with actual userId
  //   const sellerId = "seller1"; // Replace with the sellerId you're calling

  useEffect(() => {
    // Register the user (caller)
    socket.emit("registerUser", { userId });

    socket.on("callStarted", () => {
      setIsCalling(true);
    });

    socket.on("callRejected", () => {
      setIsCalling(false);
      alert("Call rejected");
    });
  }, [userId]);

  const startCall = () => {
    socket.emit("startCall", { from: userId, to: sellerId });
  };

  const handleHangup = () => {
    setIsCalling(false);
  };

  return (
    <div>
      {!isCalling && <button onClick={startCall}>Call Seller</button>}
      {isCalling && <button onClick={handleHangup}>Hangup</button>}
    </div>
  );
}

export default Caller;
