import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import Dashbord from "./pages/Dashbord";
import Navbartr from "./components/Navbartr";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashbord" element={<Dashbord />} />
        //cheack the navbar
        <Route path="/navbar" element={<Navbartr />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
