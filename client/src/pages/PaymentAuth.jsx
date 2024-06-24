import React from "react";
import { Link } from "react-router-dom";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6 pay-form-cont">
            <form action="post" className="pay-form">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="please enter your account name..."
              />
              <label htmlFor="name">Account</label>
              <input type="text" placeholder="pleace enter your account No." />
              <div className="amount-input">
                <select name="paymentOption" id="">
                  <option value="selectPaymentCurrency">
                    select Payment Currency
                  </option>
                  <option value="ETB">ETB</option>
                  <option value="USD">USD</option>
                  <option value="CAD">CAD</option>
                  <option value="BTC">BTC</option>
                </select>
                <label htmlFor="chatMin">Input Chat/Min</label>
                <input type="text" placeholder="min $5/M" />
                <label htmlFor="name">Total Amount</label>
                <input type="text" placeholder="999" />
              </div>

              <div className="payment-method">
                <select name="payment" id="">
                  <option value="">Select Payment Method</option>
                  <option value="CBE">CBE</option>
                  <option value="BOA">BOA</option>
                  <option value="COOP">COOP</option>
                  <option value="telebirr">TeleBirr</option>
                  <option value="AWASH">AWASH</option>
                  <option value="BINANCE">BINANCE</option>
                  <option value="paypal">PAYPAL</option>
                </select>
                <div className="account-numb">
                  <input type="text" placeholder="1000*****12" />
                  <FontAwesomeIcon className="copy-account" icon={faCopy} />
                </div>
              </div>
              <label htmlFor="img">Input Recite</label>
              <input type="file" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
