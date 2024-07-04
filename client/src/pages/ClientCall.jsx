import React, { useEffect, useRef, useState } from "react";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import { TextField } from "@material-ui/core";
// import AssignmentIcon from "@material-ui/icons/Assignment";
// import PhoneIcon from "@material-ui/icons/Phone";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import peer from "simple-peer";
// import io from "socket.io-client";
// import "../assets/style/clientCall.css";

// const socket = io.connect("http://localhost:8081");

export default function ClientCall() {
  const myVideo = useRef();
  const userVideo = useRef();
  const peerInstance = useRef();
  const callerVideo = useRef();
  const localVideo = useRef();

  return (
    <>
      <div className="mainContainer">
        <div className="videoContainer">
          <div className="callerStream">
            <video
              autoPlay
              playsInline
              muted
              ref={callerVideo}
              className="callerVideo"
            />
            <div className="localStream">
              <video
                autoPlay
                playsInline
                muted
                ref={localVideo}
                className="localVideo"
              />
            </div>
          </div>
        </div>
        <div className="buttonContainer"></div>
      </div>
    </>
  );
}
