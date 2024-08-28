import Footer from "../includes/Footer";

const Package = () => {
  return (
    <div>
      <div class="content-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 channels">
              <div class="content-block">
                <div class="content-wrapper">
                  <h2 className="h1">Hourly Packages</h2>
                  <hr></hr>
                  <div class="container">
                    <div class="row">
                      <br></br>
                      <div className="package">
                        <div className="col-lg-4">
                          <div className="carder">
                            <div className="card-header">
                              <h2>
                                <center>Standard Package</center>
                              </h2>
                              <hr></hr>
                              <center>
                                <h1>
                                  35 <i className="fa fa-dollar pink"> </i>{" "}
                                </h1>
                              </center>
                            </div>

                            <div className="card-bod">
                              <ul>
                                <li>lorem epsum </li>
                                <li>sdfjhkhkh </li>
                                <li>lorem epsum</li>
                                <li>lorem epsum </li>
                                <li>sdfjhkhkh </li>
                                <li>lorem epsum</li>
                              </ul>
                              <hr></hr>
                              <center>
                                <button className="btn btn-prime order">
                                  {" "}
                                  <i className="fa fa-dollar"></i> Order{" "}
                                </button>
                              </center>
                              <br></br>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="carder">
                            <div className="card-header">
                              <h2>
                                <center>Pro Package</center>
                              </h2>
                              <hr></hr>
                              <center>
                                <h1>
                                  35 <i className="pink">ETB </i>{" "}
                                </h1>
                              </center>
                            </div>
                            <div className="card-bod">
                              <center>
                                {" "}
                                <ul class="no">
                                  <li>8 Videos </li>
                                  <li>Per Hour </li>
                                  <li>lorem epsum</li>
                                  <li>lorem epsum </li>
                                  <li>sdfjhkhkh </li>
                                  <li>lorem epsum</li>
                                </ul>
                              </center>

                              <hr></hr>
                              <center>
                                <button className="btn btn-prime order">
                                  {" "}
                                  <i className="fa fa-dollar"></i> Order{" "}
                                </button>
                              </center>
                              <br></br>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="carder">
                            <div className="card-header">
                              <h2>
                                <center>Pro Max Package</center>
                              </h2>
                              <hr></hr>
                              <center>
                                <h1>
                                  35 <i className="fa fa-dollar pink"> </i>{" "}
                                </h1>
                              </center>
                            </div>

                            <div className="card-bod">
                              <ul class="no">
                                <li>8 Vidoes</li>
                                <li>Per Hour </li>
                                <li>lorem epsum</li>
                                <li>lorem epsum </li>
                                <li>sdfjhkhkh </li>
                                <li>lorem epsum</li>
                              </ul>
                              <hr></hr>
                              <center>
                                <button className="btn btn-prime order">
                                  {" "}
                                  <i className="fa fa-dollar"></i> Order{" "}
                                </button>
                              </center>
                              <br></br>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Package;
