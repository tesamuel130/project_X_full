import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//import the css asset
import "../assets/style/style.css";
import "../assets/style/form-awesome.css";
import "../assets/style/font-circle-video.css";
import "../assets/bootstrap/css/bootstrap.min.css";

//import js file
// import "../assets/js/custom.js";
import "../assets/js/jquery.min.js";
import "../assets/bootstrap/js/bootstrap.min.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid bg-image">
      <div className="row">
        <div className="login-wraper">
          <div className="hidden-xs">
            <img src="images/login.jpg" alt="" />
          </div>
          <div className="banner-text hidden-xs">
            <div className="line"></div>
            <div className="b-text">
              Watch{" "}
              <span className="color-active">
                millions
                <br /> of
              </span>{" "}
              <span className="color-b1">v</span>
              <span className="color-b2">i</span>
              <span className="color-b3">de</span>
              <span className="color-active">os</span> for free.
            </div>
            <div className="overtext">Over 6000 videos uploaded Daily.</div>
          </div>
          <div className="login-window">
            <div className="l-head">Sign Up for Free</div>
            <div className="l-form">
              <form onSubmit={registerUser}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">FullName</label>
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter ur name..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail2">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="form-control"
                    id="exampleInputEmail2"
                    placeholder="sample@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="**********"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="**********"
                  />
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <button type="submit" className="btn btn-cv1">
                      Sign Up
                    </button>
                  </div>
                  <div className="hidden-xs">
                    <div className="col-lg-1 ortext">or</div>
                    <div className="col-lg-4 signuptext">
                      <Link to="/login">Log In</Link>
                    </div>
                  </div>
                </div>
                <div className="row hidden-xs">
                  <div className="col-lg-12 forgottext">
                    <Link to="/#">
                      By clicking "Sign Up" I agree to circle's Terms of
                      Service.
                    </Link>
                  </div>
                </div>
                <div className="visible-xs text-center mt-30">
                  <span className="forgottext">
                    <Link to="/login">Already have an account?</Link>
                  </span>
                  <span className="signuptext">
                    <Link to="/login">Login here</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
