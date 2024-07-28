import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import NavBar from "../src/components/NavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashbord from "./pages/Dashbord";
import Navbartr from "./components/Navbartr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import RecetPassword from "./pages/RecetPassword";
import Videos from "./pages/Video";
import Chat from "./pages/Chat";
import PaymentAuth from "./pages/PaymentAuth";

//trying search
import TrySearch from "./components/TrySearch";
import TableSearch from "./components/TableSearch";
import Payment from "./components/payment";
import ClientCall from "./pages/ClientCall";
import VideoCall from "./components/videoCall";

axios.defaults.baseURL = "http://localhost:6020";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbartr />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<RecetPassword />} />

        <Route path="/" element={<Home />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/video" element={<Videos />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/paymentauth/:id" element={<PaymentAuth />} />

        {/* try to see the paymentauth style */}
        <Route path="/chat/paymentauth" element={<Payment />} />

        {/* try searching page */}
        <Route path="/trysearch" element={<TrySearch />} />
        <Route path="/table" element={<TableSearch />} />

        <Route path="/vide" element={<ClientCall />} />
        <Route path="/videoCallto" element={<VideoCall />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
