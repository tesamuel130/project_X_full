import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

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
            headers: { Authorization: `Bearer ${token}` },
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
            <div className="pay-form-cont">
              <form action="post" className="pay-form">
                <div className="form-out-input">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="please enter your account name..."
                  />
                </div>
                <div className="form-out-input">
                  <label htmlFor="name">Account</label>
                  <input
                    type="text"
                    placeholder="pleace enter your account No."
                  />
                </div>

                <div className="amount-input">
                  <select name="paymentOption" id="">
                    <option value="selectPaymentCurrency">Currency</option>
                    <option value="ETB">ETB</option>
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="BTC">BTC</option>
                  </select>
                  <div className="input-min">
                    <label htmlFor="chatMin">Input Chat/Min</label>
                    <input type="text" placeholder="Minimum 5M" />
                  </div>
                  <div className="total-amount">
                    <label htmlFor="name">Total Amount</label>
                    <input type="text" placeholder="999" />
                  </div>
                </div>

                <div className="payment-method">
                  <select name="payment" id="">
                    <option value="">Payment Method</option>
                    <option value="CBE">CBE</option>
                    <option value="BOA">BOA</option>
                    <option value="COOP">COOP</option>
                    <option value="telebirr">TeleBirr</option>
                    <option value="AWASH">AWASH</option>
                    <option value="BINANCE">BINANCE</option>
                    <option value="paypal">PAYPAL</option>
                  </select>
                  <div className="account-numb">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="1000*****12" />
                    <FontAwesomeIcon className="copy-account" icon={faCopy} />
                  </div>
                </div>
                <div className="form-out-input">
                  <label htmlFor="img">Recite</label>
                  <input type="file" className="imgInp" />
                </div>

                <button className="btn btn-primary pay-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
