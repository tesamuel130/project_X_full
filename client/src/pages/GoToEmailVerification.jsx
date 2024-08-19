import React from "react";

// Import includes componens
import Footer from "../components/footer";
// import Navbar from "../includes/Navbar";

export default function GoToEmailVerification({ email }) {
  const mailtoLink = `mailto:${email}`;

  return (
    <div>
      <div class="container-fluid bg-image">
        <div class="row">
          <div class="login-wraper">
            <div class="hidden-xs">
              <img src="./../src/assets/images/login.jpg" alt="" />
            </div>
            <div class="banner-text hidden-xs">
              <div class="line"></div>
              <div class="b-text">
                Contact{" "}
                <span class="color-active">
                  millions
                  <br /> of
                </span>{" "}
                <span class="color-b1">C</span>
                <span class="color-b2">a</span>
                <span class="color-b3">ll</span>
                <span class="color-active">es</span> for real.
              </div>
              <div class="overtext">Over 100 calls uploaded Daily.</div>
            </div>
            <div class="login-window">
              <div class="l-head">Confirm Your Email Address</div>
              <div class="l-form">
                Tap the button below to confirm your email address. Tap the
                button below to confirm your email address.
                <br></br>
                <br></br>
                <br></br>
                <a href={mailtoLink}>
                  <button type="button" class="btn btn-cv1">
                    <i className="fa fa-envelope"></i> Confirm Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
