import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

//import payment comopnent
import Payment from "../components/payment";

export default function () {
  const { id } = useParams();
  const navigate = useNavigate();
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          `/chat/public/chatseller/paymentauth/${id}`,
          {
            headers: { "access-token": localStorage.getItem("token") },
          }
        );
        setSeller(response.data);
      } catch (error) {
        console.error("Error fetching seller details:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          <div className="col-md-6">
            <div className="person-detail-container pay-form-cont">
              <div className="pay-form">
                <div className="person-pic-slide">
                  <img src={seller.image} alt="" />
                </div>
                <div className="person-detail">
                  <div className="person-name">
                    <h3>
                      <span>Nick Name:</span> {seller.name}
                    </h3>
                  </div>
                  <div className="person-discription">
                    <h3 className="person-discription-header">Discription</h3>
                    <div className="person-discription-detail">
                      <ul>
                        {seller.personDetail.map((details, index) => (
                          <li key={index}>
                            <p>faceCollor: {details.bodyColor}</p>
                            <p>bodyType: {details.bodyType}</p>
                            <p>some detail: ******88</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="person-reating-history">
                    <p className="call-history">
                      <FontAwesomeIcon icon={faPhone} />
                      <span> calls:</span> {seller.NoOfContact}
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
                <div className="call-btn">
                  <button
                    className="btn btn-primary payed-call-btn"
                    type="call"
                  >
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pay-form-cont">
            <Payment />
          </div>
        </div>
      </div>
    </>
  );
}
