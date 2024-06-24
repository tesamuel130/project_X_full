import React from "react";
import { Link } from "react-router-dom";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="person-detail-container pay-form-cont">
              <div className="pay-form">
                <div className="person-pic-slide">
                  <img src={vidImg0} alt="" />
                </div>
                <div className="person-detail">
                  <div className="person-name">
                    <h3>
                      <span>Nick Name:</span> SMAN
                    </h3>
                  </div>
                  <div className="person-discription">
                    <h3 className="person-discription-header">Discription</h3>
                    <div className="person-discription-detail">
                      <p>faceCollor: dark</p>
                      <p>bodyType: </p>
                      <p>some detail: ******88</p>
                    </div>
                  </div>
                  <div className="person-reating-history">
                    <p className="call-history">
                      <FontAwesomeIcon icon={faPhone} />
                      <span> calls:</span> 120
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
