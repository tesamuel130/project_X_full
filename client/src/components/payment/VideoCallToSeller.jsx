// frontend/client/components/CallToSeller.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:6060"); // Socket server URL

function CallToSeller({ userId, sellerId }) {
  const [isCalling, setIsCalling] = useState(false);
  const navigate = useNavigate();
  //   const userId = "user1"; // Replace with actual userId
  //   const sellerId = "seller1"; // SellerId to call

  useEffect(() => {
    socket.emit("registerUser", { userId });

    socket.on("callAccepted", () => {
      setIsCalling(false);
      navigate(`/videocall/${userId}/${sellerId}`);
    });

    socket.on("callRejected", () => {
      setIsCalling(false);
      alert("Seller rejected the call");
    });
  }, []);

  const startCall = () => {
    setIsCalling(true);
    socket.emit("startCall", { from: userId, to: sellerId });
  };

  const handleHangup = () => {
    socket.emit("hangup", { from: userId, to: sellerId });
    setIsCalling(false);
  };

  return (
    <div>
      {!isCalling ? (
        <button onClick={startCall}>Call Seller</button>
      ) : (
        <button onClick={handleHangup}>Hangup</button>
      )}

      {/* kasjdfklasjdfklasdjf */}
      {/* assign the reall frontend */}
      {/* popup the call */}

      <div class="col-md-10 col-sm-10 col-xs-8">
        <div class="l-form">
          <div class="card">
            <div className="card-head">
              {" "}
              <h5 class="card-title">Calls </h5>
              <div id="help" class="form-text">
                <i className="fa fa-warning"></i> Your account is not verified
                !!!
              </div>
            </div>
            <div class="card-bod">
              {!isCalling ? (
                <a
                  href=""
                  type="button"
                  data-toggle="modal"
                  data-target="#staticBackdrop"
                  className="primer"
                >
                  <i className="fa fa-trash" onClick={startCall}></i> Call
                  Account
                </a>
              ) : (
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
                        <h5 class="modal-title" id="staticBackdropLabel">
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
                          onClick={handleHangup}
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
              )}
            </div>
          </div>
        </div>
      </div>

      {/* popup the call */}
    </div>
  );
}

export default CallToSeller;