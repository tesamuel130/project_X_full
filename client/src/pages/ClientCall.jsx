// src/ClientCall.jsx
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Peer from "peerjs";
import "../assets/style/clientCall.css";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneLinesSlash,
  faPhoneSlash,
  faCameraRotate,
} from "@fortawesome/free-solid-svg-icons";

const socket = io("http://localhost:1081");

const ClientCall = () => {
  const [me, setMe] = useState("");
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState("");
  const [name, setName] = useState("");

  //referece on the call page
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
      setMe(id);
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
        audio: false,
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
    <>
      <div className="mainContainer">
        <div className="callDetailContainer">
          <div className="videoContainer">
            <div className="callerStream">
              <video className="callerStream" ref={userVideo} />
            </div>
            <div className="localStream">
              <video
                className="localStream"
                ref={myVideo}
                autoPlay
                playsInline
              ></video>
            </div>
          </div>
          <div className="callButtonsContainer">
            <div className="buttonsDepOnCall">
              <button className="muteBtn">
                <FontAwesomeIcon icon={faMicrophoneLinesSlash} />
              </button>
              <button className="callEndBtn">
                <FontAwesomeIcon
                  className="callEndBtnIcon"
                  icon={faPhoneSlash}
                />
              </button>
              <button className="muteBtn">
                <FontAwesomeIcon icon={faCameraRotate} />
              </button>
            </div>
            <div className="reportCont">
              <select name="report" id="reportList">
                <option value="none">Report</option>
                <option value="providerScam">Provider Scam</option>
                <option value="providerNotWorking">
                  Provider is not Working
                </option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCall;
