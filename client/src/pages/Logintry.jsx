import React from "react";

//import the css asset
import "../assets/style/style.css";
import "../assets/style/form-awesome.css";
import "../assets/style/font-circle-video.css";
import "../assets/bootstrap/css/bootstrap.min.css";

//import js file
// import "../assets/js/custom.js";
import "../assets/js/jquery.min.js";
import "../assets/bootstrap/js/bootstrap.min.js";

export default function Logintry() {
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
              <form action="http://azyrusthemes.com/circlevideo/login.html">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="sample@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
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
                      <a href="signup.html">Sign Up</a>
                    </div>
                  </div>
                </div>
                <div className="row hidden-xs">
                  <div className="col-lg-12 forgottext">
                    <a href="#">Forgot Username or Password?</a>
                  </div>
                </div>
                <div className="row visible-xs">
                  <div className="col-xs-6">
                    <div className="forgottext">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="signuptext text-right">
                      <a href="signup.html">Sign Up</a>
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
