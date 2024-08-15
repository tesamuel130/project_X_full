import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";

const VideoCalls = () => {
  const { id } = useParams();
  const { sellerId, callTo } = useParams();
  const [callId, setCallId] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerConnection = useRef();
  const socket = useRef();

  // Fetch the call ID
  useEffect(() => {
    const fetchCallId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6060/get/seller/callId/${id}`
        );
        setCallId(response.data.callId);
      } catch (error) {
        console.error("Error fetching call ID:", error.message);
      }
    };

    fetchCallId();
  }, [id]);

  useEffect(() => {
    // if (!callId || !callTo) return; // Ensure both callId and callTo are available

    // Set up Socket.IO connection
    socket.current = io("http://localhost:6060");

    socket.current.on("connection", () => {
      console.log("Connected to Socket.IO server");
    });

    const startCall = async () => {
      try {
        socket.current.emit("join-call", { callID: callId, callTo });

        socket.current.on("incoming-call", async ({ from }) => {
          console.log("Incoming call from:", from);
          await initiateCall(from);
        });

        socket.current.on("call-answer", async ({ answer }) => {
          console.log("Call answered:", answer);
          await createAnswer(answer);
        });

        // Clean up
        return () => {
          socket.current.disconnect();
          if (peerConnection.current) peerConnection.current.close();
        };
      } catch (error) {
        console.error("Error during call setup:", error);
      }
    };

    startCall();
    startLocalStream();
  }, [callId, callTo]);

  const startLocalStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      localVideoRef.current.srcObject = stream;
      setLocalStream(stream);
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const initiateCall = async (callTo) => {
    peerConnection.current = new RTCPeerConnection();

    localStream.getTracks().forEach((track) => {
      peerConnection.current.addTrack(track, localStream);
    });

    peerConnection.current.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    socket.current.emit("call-offer", { offer, to: callTo });

    socket.current.on("call-answer", async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    peerConnection.current.onicecandidate = ({ candidate }) => {
      if (candidate) {
        socket.current.emit("ice-candidate", { candidate, to: callTo });
      }
    };

    socket.current.on("ice-candidate", async ({ candidate }) => {
      try {
        await peerConnection.current.addIceCandidate(
          new RTCIceCandidate(candidate)
        );
      } catch (error) {
        console.error("Error adding ICE candidate:", error);
      }
    });
  };

  const createAnswer = async (answer) => {
    await peerConnection.current.setLocalDescription(answer);
    socket.current.emit("call-answer", { answer });
  };

  return (
    <div>
      <h2>Video Call</h2>
      <div>
        <video
          ref={localVideoRef}
          autoPlay
          muted
          playsInline
          style={{ width: "45%" }}
        />
        <video
          ref={remoteVideoRef}
          autoPlay
          playsInline
          style={{ width: "45%" }}
        />
      </div>
    </div>
  );
};

export default VideoCalls;
