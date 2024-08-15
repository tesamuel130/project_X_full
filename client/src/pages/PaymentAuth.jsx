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
import Payment from "../components/payment";

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
                <div className="call-btn">
                  <button
                    className="btn btn-primary payed-call-btn"
                    type="call"
                    onClick={() => goToVideo(formSellerData._id)}
                  >
                    Call
                  </button>

                  {/* popup the call */}
                  <div class="col-md-10 col-sm-10 col-xs-8">
                    <div class="l-form">
                      <div class="card">
                        <div className="card-head">
                          {" "}
                          <h5 class="card-title">Calls </h5>
                          <div id="help" class="form-text">
                            <i className="fa fa-warning"></i> Your account is
                            not verified !!!
                          </div>
                        </div>
                        <div class="card-bod">
                          <a
                            href=""
                            type="button"
                            data-toggle="modal"
                            data-target="#staticBackdrop"
                            className="primer"
                          >
                            <i className="fa fa-trash"></i> Call Account
                          </a>

                          <div
                            class="modal fade modal-dialog-centered modal-dialog-scrollable"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                  >
                                    Incoming Call
                                  </h5>
                                </div>
                                <div class="d-flex justify-content-center modal-body">
                                  <div class="container-fluid">
                                    <div class="d-flex justify-content-center row">
                                      <div class="d-flex justify-content-center ">
                                        <center>
                                          <div className="avater">
                                            <img
                                              className="caller"
                                              src="./src/assets/images/ava3.png"
                                              alt=""
                                            />
                                          </div>
                                        </center>
                                        <br></br>

                                        <center>
                                          <h3>
                                            <center>Abebech Gobena</center>
                                          </h3>
                                          <p className="small">
                                            Lorem, ipsum dolor sit sr{" "}
                                          </p>
                                          <br></br>
                                          <div class="caller-btn">
                                            <button
                                              id="caller-btn"
                                              type="button"
                                              class="btn btn-danger "
                                              data-bs-dismiss="modal"
                                            >
                                              <i className="decline fa fa-close"></i>
                                            </button>
                                            <button
                                              id="caller-btn"
                                              type="button"
                                              class="btn btn-success "
                                            >
                                              <i className="answer fa fa-phone"></i>
                                            </button>
                                          </div>
                                        </center>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary">
                                    Understood
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* popup the call */}
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
