import React from "react";
import { useNavigate } from "react-router-dom";

// Import includes componens
// import Navbar from "../includes/Navbar";

// Import img file
import notfound from "../assets/images/404.svg";

export default function NotFound404() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 upload-page">
              <div class="u-area">
                <img src={notfound} width={400} />

                <h1 class="">OOps 404 Page Not Found </h1>

                <button onClick={handleGoBack} class="btn btn-primary u-btn">
                  Go Back
                </button>
              </div>

              <div class="u-terms">
                <p>
                  By submitting your videos to circle, you acknowledge that you
                  agree to circle's <a href="#">Terms of Service</a> and{" "}
                  <a href="#">Community Guidelines</a>.
                </p>
                <p class="hidden-xs">
                  Please be sure not to violate others' copyright or privacy
                  rights. Learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
