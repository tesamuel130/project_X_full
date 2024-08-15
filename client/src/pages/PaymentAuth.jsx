import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

//import payment comopnent
import PaymentSubmition from "../components/payment/paymentSubmition";
import publicSellerDetail from "../components/payment/PublicSellerDetail";

// config the socket port
import io from "socket.io-client";
const socket = io("http://localhost:5000"); // Socket server URL

export default function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
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
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get(
          `/chat/public/chatseller/paymentauth/${id}`
        );
        setSeller(response.data);

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
        }));
      } catch (error) {
        console.error("Error fetching uploaded files", error);
        setError(error);
        toast("Error fetching uploaded files", error);
      }
    };

    fetchUploads();
  }, [id]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  const goToVideo = (id) => {
    navigate(`/videoCall/to/seller/${id}`);
  };

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
      <div className="container">
        <div className="row">
          <div>
            <publicSellerDetail />
          </div>
          <div className="col-md-6 pay-form-cont">
            <PaymentSubmition />
          </div>
          {/* asdfkl; */}
        </div>
      </div>
    </>
  );
}
