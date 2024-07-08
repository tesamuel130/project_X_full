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

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      //show the error on the ui
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/");
      }
    } catch (error) {}
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
            <div className="l-head">Log Into Your Circle Account</div>
            <div className="l-form">
              <form onSubmit={loginUser}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className="form-control"
                    id="exampleInputEmail1"
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
                <div className="checkbox">
                  <label>
                    <label className="checkbox">
                      <input type="checkbox" name="#" />
                      <span className="arrow"></span>
                    </label>{" "}
                    <span>Remember me on this computer</span>
                    <span className="text2">
                      (not recomended on public or shared computers)
                    </span>
                  </label>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <button type="submit" className="btn btn-cv1">
                      Login
                    </button>
                  </div>
                  <div className="hidden-xs">
                    <div className="col-lg-1 ortext">or</div>
                    <div className="col-lg-4 signuptext">
                      <Link to="/register">Sign Up</Link>
                    </div>
                  </div>
                </div>
                <div className="row hidden-xs">
                  <div className="col-lg-12 forgottext">
                    <Link href="#">Forgot Username or Password?</Link>
                  </div>
                </div>
                <div className="row visible-xs">
                  <div className="col-xs-6">
                    <div className="forgottext">
                      <Link href="#">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="signuptext text-right">
                      <Link to="/register">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
