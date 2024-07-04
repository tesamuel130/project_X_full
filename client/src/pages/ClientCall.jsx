// src/ClientCall.jsx
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";

const socket = io("http://localhost:5000");

const ClientCall = () => {
  const [myId, setMyId] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();

  useEffect(() => {
    const peer = new Peer(undefined, {
      host: "/",
      port: "3001",
    });
    peerInstance.current = peer;

    peer.on("open", (id) => {
      setMyId(id);
      socket.emit("join-room", "room-id", id);
    });

    peer.on("call", (call) => {
      call.answer(myVideo.current.srcObject);
      call.on("stream", (userVideoStream) => {
        userVideo.current.srcObject = userVideoStream;
      });
    });

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId);
    });

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myVideo.current.srcObject = stream;
        myVideo.current.play();
      });

    return () => {
      socket.disconnect();
      peer.disconnect();
    };
  }, []);

  const connectToNewUser = (userId) => {
    const call = peerInstance.current.call(userId, myVideo.current.srcObject);
    call.on("stream", (userVideoStream) => {
      userVideo.current.srcObject = userVideoStream;
    });
  };

  return (
    <div className="App">
      <video ref={myVideo} muted />
      <video ref={userVideo} />
    </div>
  );
};

export default ClientCall;
