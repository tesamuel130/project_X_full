import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";

// Import image
import confirmed from "../assets/images/confirm.svg";

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`/verifyEmail/${token}`);
        setMessage(response.data.message);
        toast.success(response.data.message);
      } catch (error) {
        setMessage("Error verifying email.");
        toast.error("Error verifying email.");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div>
      <div class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 upload-page">
              <div class="u-area">
                <img src={confirmed} width={200} />

                <h1 class="">{message && <p>{message}</p>} !!! </h1>

                <Link to={"/login"}>
                  <button class="btn btn-primary u-btn">Go To Login</button>
                </Link>
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
};

export default VerifyEmail;
