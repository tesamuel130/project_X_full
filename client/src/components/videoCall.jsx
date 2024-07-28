import React, { useRef, useEffect } from "react";
import io from "socket.io-client";

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:5000");
    peerConnection.current = new RTCPeerConnection();

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        stream
          .getTracks()
          .forEach((track) => peerConnection.current.addTrack(track, stream));
      });

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.current.emit("ice-candidate", {
          to: "customer-socket-id",
          candidate: event.candidate,
        });
      }
    };

    peerConnection.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    socket.current.on("offer", async (data) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(data.offer)
      );
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.current.emit("answer", { to: data.from, answer });
    });

    socket.current.on("answer", async (data) => {
      await peerConnection.current.setRemoteDescription(
        new RTCSessionDescription(data.answer)
      );
    });

    socket.current.on("ice-candidate", async (data) => {
      try {
        await peerConnection.current.addIceCandidate(data.candidate);
      } catch (e) {
        console.error("Error adding received ice candidate", e);
      }
    });

    async function callCustomer() {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.current.emit("offer", { to: "customer-socket-id", offer });
    }

    callCustomer();
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline muted></video>
      <video ref={remoteVideoRef} autoPlay playsInline></video>
    </div>
  );
};

export default VideoCall;
