import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

//import payment comopnent
import PaymentSubmition from "../components/payment/paymentSubmition";
import publicSellerDetail from "../components/payment/PublicSellerDetail";

export default function () {
  const { id } = useParams();
  const [error, setError] = useState(null);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

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
            <PaymentSubmition id={id} />
          </div>
          {/* asdfkl; */}
        </div>
      </div>
    </>
  );
}
