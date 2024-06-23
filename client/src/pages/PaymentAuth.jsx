import React from "react";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

export default function () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={vidImg0} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={vidImg0} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={vidImg0} class="d-block w-100" alt="..." />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="container mt-4 d-flex justify-content-center main">
              <div className="card">
                <div className="d-flex justify-content-between px-3 pt-4">
                  <span className="pay">Pay Amount</span>
                  <div className="amount">
                    <div className="inner">
                      <span className="dollar">$</span>
                      <span className="total">999</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
