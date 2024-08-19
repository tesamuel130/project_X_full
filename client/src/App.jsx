import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import NavBar from "../src/components/NavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Navbartr from "./components/Navbartr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import GoToEmailVerification from "./pages/GoToEmailVerification";
import VerifyEmail from "./pages/verifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import RecetPassword from "./pages/RecetPassword";
import Videos from "./pages/Video";
import PlayVideo from "./pages/PlayVideo";
import Chat from "./pages/Chat";
import PersonContact from "./pages/PersonContact";
import PaymentAuth from "./pages/PaymentAuthChat";
import PaymentAuthPerson from "./pages/PaymentAuthPerson";
import NotFound404 from "./pages/NotFound404";

// staring video call path
import StartingCallUser from "./components/VideoCall/StartingCall";

//trying search
import Payment from "./components/payment";

const images = [
  "https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+1",
  "https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+2",
  "https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+3",
  "./assets/images/ava10.png",
];

axios.defaults.baseURL = "http://localhost:6020";
axios.defaults.withCredentials = true;

function App() {
  // set email that used to mailto func
  const [email, setEmail] = useState("");

  return (
    <>
      <Navbartr />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp setEmail={setEmail} />} />
        <Route
          path="/emailNotification"
          element={<GoToEmailVerification email={email} />}
        />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<RecetPassword />} />

        <Route path="/" element={<Home />} />
        {/* <Route path="/dashbord" element={<Dashbord />} /> */}
        <Route path="/video" element={<Videos />} />
        <Route path="/video/play/:id" element={<PlayVideo />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/paymentauth/:id" element={<PaymentAuth />} />
        <Route path="/personContact" element={<PersonContact />} />
        <Route
          path="/personContact/paymentauth/:id"
          element={<PaymentAuthPerson />}
        />

        {/* starting the video call */}
        <Route
          path="/chat/videocall/:userId/:sellerId"
          element={<StartingCallUser />}
        />

        {/* try to see the paymentauth style */}
        <Route path="/chat/paymentauth" element={<Payment />} />

        {/* page not found 404 notify */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
