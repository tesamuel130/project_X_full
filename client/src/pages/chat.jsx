import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import a navbar
import NavBarTwo from "../components/NavBarTwo";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCircleDot,
  faDollarSign,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

export default function Chat() {
  const [publicChatPerson, setPublicChatPerson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/public/chat/list");
        if (response.status === 200) {
          setPublicChatPerson(response.data);
        } else {
          console.error("Unexpected response code:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBarTwo />

      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- /Updates from Subscriptions --> */}

              {/* <!-- chater component --> */}

              <div className="content-block head-div">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="visible-xs">Most-Chat</span>
                            <span className="hidden-xs">Most-Chat</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">New-Comer</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-xs-4">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Sort by <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-relevant"></i> Top
                              Rated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Most
                              Chated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Cheap
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> Expencive
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="cb-content videolist">
                  <div className="row">
                    {/* chater list */}
                    <div>
                      {publicChatPerson.length > 0 ? (
                        publicChatPerson.map((person, index) => (
                          <div
                            className="col-lg-3 col-sm-11 videoitem"
                            key={index}
                          >
                            <div className="b-video">
                              <div className="cb-content videolist">
                                <div className="row">
                                  <div class="col-lg-3 col-sm-6 videoitem">
                                    <div class="b-video last-row">
                                      <div className="v-img">
                                        <a href="single-video-tabs.html">
                                          <img
                                            src={vidImg0} // Replace with dynamic image
                                            alt={person.name}
                                          />
                                        </a>
                                        <div className="watched">Online</div>
                                      </div>
                                      <div className="v-desc">
                                        <center>
                                          <button className="btn btn-call">
                                            <FontAwesomeIcon icon={faPhone} />{" "}
                                            Call
                                          </button>
                                        </center>
                                        <br />
                                        <a href="single-video-tabs.html">
                                          {person.nickName}
                                        </a>
                                      </div>
                                      <div>
                                        Price: {person.price}/M
                                        <br />
                                        {person.calls}{" "}
                                        <i className="fa fa-phone"> </i> Calls |
                                        &nbsp;
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div>No chatters available</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / chater component --> */}
            </div>
          </div>

          {/* <!-- pagination --> */}
          <div className="v-pagination">
            <ul className="list-inline">
              <li className="v-pagination-prev">
                <a href="#">
                  <i>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="cv cvicon-cv-previous"
                    />
                  </i>
                </a>
              </li>
              <li className="v-pagination-first">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">...</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li className="v-pagination-skin visible-xs">
                <a href="#">Skip 5 Pages</a>
              </li>
              <li className="v-pagination-next">
                <a href="#">
                  <i>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="cv cvicon-cv-next"
                    />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /pagination --> */}
        </div>
      </div>
    </>
  );
}
