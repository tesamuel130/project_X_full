import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

// import callto btn handler
import CallToSeller from "./VideoCallToSeller";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

export default function PersonSellerDetail() {
  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const checkToken = async () => {
      const token = Cookies.get("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("/verifyToken", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.data.valid) {
          throw new Error("Invalid token");
        }
      } catch (error) {
        console.error("Token validation failed", error);
        Cookies.remove("token");
        navigate("/login");
      }
    };

    checkToken();
  }, [navigate]);

  const { id } = useParams();
  const [formSellerData, setFormSellerData] = useState({
    nickName: "",
    gender: "",
    age: "",
    country: "",
    bodyType: "",
    bodyColor: "",
    price: "",
    sImgfilename: "",
    sImgPath: "",
    sImgmimetype: "",
    serviceType: "",
    _id: "",
    callId: "",
  });
  const [formUserData, setFormUserData] = useState({
    callId: "",
  });
  const [error, setError] = useState(null);

  //   featch seller data
  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(
          `/chat/public/chatseller/paymentauth/${id}`
        );
        setFormSellerData((prev) => ({
          ...prev,
          nickName: response.data.nickName || "",
          phoneNumber: response.data.phoneNumber || "",
          country: response.data.country || "",
          age: response.data.age || "",
          gender: response.data.gender || "",
          bodyType: response.data.bodyType || "",
          bodyColor: response.data.bodyColor || "",
          price: response.data.price || "",
          sImgfilename: response.data.sImgfilename || "",
          sImgPath: response.data.sImgPath || "",
          sImgmimetype: response.data.sImgmimetype || "",
          serviceType: response.data.serviceType || "",
          _id: response.data._id || "",
          callId: response.data.callId || "",
        }));
      } catch (error) {
        console.error("Error fetching user id", error);
        setError(error);
        toast("Error fetching uploaded files", error);
      }
    };

    fetchUploads();
  }, [id]);

  // Fetch client data
  useEffect(() => {
    const fetchUserUploads = async () => {
      const token = Cookies.get("token");
      try {
        const response = await axios.get("/get/userid/for/videocall", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setFormUserData((prev) => ({
          ...prev,
          callId: response.data.callId || "",
        }));
      } catch (error) {
        setError(error);
        toast.error("Error fetching user ID");
      }
    };

    fetchUserUploads();
  }, []);

  //   assign the seller and client callid from the db
  const userId = formUserData.callId;
  const sellerId = formSellerData.callId;

  if (error) {
    return (
      <div>
        <h1>404 - Seller Not Found</h1>
        <p>We couldn't find the seller you're looking for.</p>
      </div>
    );
  }

  return (
    <>
      <div className="col-md-6">
        <div className="person-detail-container pay-form-cont">
          <div className="pay-form">
            <div className="person-pic-slide">
              <img
                src={`http://localhost:6010/${formSellerData.sImgPath}`}
                alt=""
              />
            </div>
            <div className="person-detail">
              <div className="person-name">
                <h3>
                  <span>Nick Name:</span> {formSellerData.nickName}
                </h3>
              </div>
              <div className="person-discription">
                <h3 className="person-discription-header">Discription</h3>
                <div className="person-discription-detail">
                  <p>faceCollor: {formSellerData.bodyColor}</p>
                  <p>bodyType: {formSellerData.bodyType}</p>
                  <p>some detail: ******88</p>
                </div>
              </div>
              <div className="person-reating-history">
                <p className="call-history">
                  <FontAwesomeIcon icon={faPhone} />
                  <span> calls:</span> {formSellerData.age}
                </p>
                <div className="call-reating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            {/* in heare their is call btn before */}
            <CallToSeller userId={userId} sellerId={sellerId} />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
