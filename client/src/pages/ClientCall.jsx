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

const socket = io("http://localhost:1081", {
  autoConnect: false,
});

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
  const connectionRef = useRef();
  const peerInstance = useRef();

  //add a use effect fuction
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      })
      .catch((error) => {
        console.log("error accessing on the media device", error);
      });

    socket.on("me", (id) => {
      setMe(id);
    });

    socket.on("callUser", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaceCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  // useEffect(() => {
  //   const peer = new Peer(undefined, {
  //     host: "/",
  //     port: "3001",
  //   });
  //   peerInstance.current = peer;

  //   peer.on("open", (id) => {
  //     setMe(id);
  //     socket.emit("join-room", "room-id", id);
  //   });

  //   peer.on("call", (call) => {
  //     call.answer(myVideo.current.srcObject);
  //     call.on("stream", (userVideoStream) => {
  //       userVideo.current.srcObject = userVideoStream;
  //     });
  //   });

  //   socket.on("user-connected", (userId) => {
  //     connectToNewUser(userId);
  //   });

  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: true,
  //       audio: false,
  //     })
  //     .then((stream) => {
  //       myVideo.current.srcObject = stream;
  //       myVideo.current.play();
  //     });

  //   return () => {
  //     socket.disconnect();
  //     peer.disconnect();
  //   };
  // }, []);

  // const connectToNewUser = (userId) => {
  //   const call = peerInstance.current.call(userId, myVideo.current.srcObject);
  //   call.on("stream", (userVideoStream) => {
  //     userVideo.current.srcObject = userVideoStream;
  //   });
  // };

  return (
    <>
      <div className="mainContainer">
        <div className="callDetailContainer">
          <div className="videoContainer">
            <div className="callerStream">
              {/* <video className="callerStream" ref={userVideo} /> */}
              {callAccepted && !callEnded ? (
                <video
                  className="callerStream"
                  playsInline
                  ref={userVideo}
                  autoPlay
                />
              ) : null}
            </div>
            <div className="localStream">
              {/* <video
                className="localStream"
                ref={myVideo}
                autoPlay
                playsInline
              ></video> */}
              {stream && (
                <video
                  className="localStream"
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                />
              )}
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

      <div className="tryingSome">
        <input
          type="text"
          id="filled-basic"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginTop: "50px" }}
        />

        <input
          type="text"
          placeholder="call to"
          value={idToCall}
          onChange={(e) => setIdToCall(e.target.value)}
          style={{ marginTop: "50px" }}
        />

        <div className="tryCallBtn">
          {callAccepted && !callEnded ? (
            <button onClick={leaceCall} style={{ marginTop: "50px" }}>
              End call
            </button>
          ) : (
            <button
              onClick={() => callUser(idToCall)}
              style={{ marginTop: "50px" }}
            >
              dd
            </button>
          )}
          {idToCall}
        </div>
        <div className="try2b">
          {receivingCall && !callAccepted ? (
            <div className="ca">
              <h1 style={{ marginTop: "50px" }}>{name} is calling</h1>
              <button onClick={answerCall} style={{ marginTop: "50px" }}>
                answercall
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ClientCall;
