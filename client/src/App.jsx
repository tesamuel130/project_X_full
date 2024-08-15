import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import NavBar from "../src/components/NavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Navbartr from "./components/Navbartr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import RecetPassword from "./pages/RecetPassword";
import Videos from "./pages/Video";
import PlayVideo from "./pages/PlayVideo";
import Chat from "./pages/Chat";
import PaymentAuth from "./pages/PaymentAuth";

//trying search
import Payment from "./components/payment";
import ClientCall from "./pages/ClientCall";
import VideoCall from "./components/videoCall";
import VideoCalls from "./components/tryyCall";

const images = [
  "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3",
  "./assets/images/ava10.png",
];

axios.defaults.baseURL = "http://localhost:6020";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbartr />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<RecetPassword />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/dashbord" element={<Dashbord />} /> */}
        <Route path="/video" element={<Videos />} />
        <Route path="/video/play/:id" element={<PlayVideo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/paymentauth/:id" element={<PaymentAuth />} />

        {/* try to see the paymentauth style */}
        <Route path="/chat/paymentauth" element={<Payment />} />

        <Route path="/vide" element={<ClientCall />} />
        <Route path="/videoCallto" element={<VideoCall />} />

        {/* asdfasdf */}
        <Route path="/videoCall/to/seller/:id" element={<VideoCalls />} />
      </Routes>
    </>
  );
}

export default App;
