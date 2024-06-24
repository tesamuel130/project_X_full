import React from "react";
import { Link } from "react-router-dom";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faDollarSign,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

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
              <label htmlFor="name">Amount</label>
              <input type="text" placeholder="999" />
              <div className="payment-method">
                <select name="payment" id="">
                  <option value="">Select Payment Method</option>
                  <option value="CBE">CBE</option>
                  <option value="BOA">BOA</option>
                  <option value="COOP">COOP</option>
                  <option value="telebirr">TeleBirr</option>
                  <option value="AWASH">AWASH</option>
                </select>
                <div className="account-numb">
                  <input type="text" placeholder="1000*****12" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
