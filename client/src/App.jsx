import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashbord from "./pages/Dashbord";
import Navbartr from "./components/Navbartr";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <Navbartr />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Dashbord />} />
        //cheack the pages
        <Route path="/navbar" element={<Navbartr />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
