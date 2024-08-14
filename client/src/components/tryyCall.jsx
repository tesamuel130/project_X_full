import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { fetchCallBySellerId } from "../api/api";

const VideoCall = () => {
  const { sellerId, callTo } = useParams();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  const peerConnection = useRef();
  const socket = useRef();

  useEffect(() => {
    // Set up Socket.IO connection
    socket.current = io("http://localhost:3001");

    const startCall = async () => {
      try {
        const { data } = await fetchCallBySellerId(sellerId);
        const callID = data.callID;

        socket.current.emit("join-call", { callID, callTo });

        socket.current.on("incoming-call", async ({ from }) => {
          console.log("Incoming call from:", from);
          await initiateCall(from);
        });

        socket.current.on("call-answered", async ({ answerer }) => {
          console.log("Call answered by:", answerer);
          await createAnswer();
        });

        // Clean up
        return () => {
          socket.current.disconnect();
          if (peerConnection.current) peerConnection.current.close();
        };
      } catch (error) {
        console.error("Error fetching call ID:", error);
      }
    };

    startCall();
    startLocalStream();
  }, [sellerId, callTo]);

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

    // Add local stream tracks to peer connection
    localStream.getTracks().forEach((track) => {
      peerConnection.current.addTrack(track, localStream);
    });

    // Handle remote stream
    peerConnection.current.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    // Create offer
    const offer = await peerConnection.current.createOffer();
    await peerConnection.current.setLocalDescription(offer);

    // Send offer to the peer
    socket.current.emit("call-offer", { offer, to: callTo });

    // Listen for answer
    socket.current.on("call-answer", async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(answer)
      );
    });

    // Handle ICE candidates
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
        console.error("Error adding received ICE candidate:", error);
      }
    });
  };

  const createAnswer = async () => {
    const answer = await peerConnection.current.createAnswer();
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

export default VideoCall;
