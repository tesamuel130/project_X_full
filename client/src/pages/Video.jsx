import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import a navbar
import NavBarTwo from "../components/NavBarTwo";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg1 from "../assets/images/video2-1.png";

export default function Videos() {
  const [publicChatPerson, setPublicChatPerson] = useState([]);
  const [someVideoList, setSomeVideoList] = useState([]);
  const [contactInPerson, setContactInPerson] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          publicChatPersonResponse,
          someVideoListResponse,
          contactInPersonResponse,
        ] = await Promise.all([
          axios.get("/home/public%chat%list"),
          axios.get("/home/all%video%list"),
          axios.get("/home/contact%in%person"),
        ]);
        setPublicChatPerson(publicChatPersonResponse.data);
        setSomeVideoList(someVideoListResponse.data);
        setContactInPerson(contactInPersonResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
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

              {/* <!-- videos component --> */}

              <div className="content-block head-div">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-9 col-sm-8 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="visible-xs">Most-Viewd</span>
                            <span className="hidden-xs">Most-Viewed</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">New-Video</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-5">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Country <span className="caret"></span>
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
                    <div className="col-lg-1 col-sm-2 col-xs-5">
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
                    <div className="col-lg-1 col-sm-2 col-xs-5">
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
                    {/* video list */}
                    <ul>
                      {someVideoList.map((video) => {
                        <li key={video._id}>
                          <div className="col-lg-3 col-sm-6 videoitem">
                            <div className="b-video">
                              <div className="v-img">
                                <a href="single-video-tabs.html">
                                  <img src={video.thumbnail} alt="" />
                                </a>
                                <div className="time">{video.videoMin}</div>
                              </div>
                              <div className="v-desc">
                                <a href="single-video-tabs.html">
                                  {video.name}
                                </a>
                              </div>
                              <div className="v-views">
                                {video.views} views.{" "}
                                <span className="v-percent">
                                  <span className="v-circle"></span> 78%
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>;
                      })}
                    </ul>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src={vidImg1} alt="" />
                          </a>
                          <div className="time">54:23</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            There Can Only Be One! Introducing Tanc & Hercules
                          </a>
                        </div>
                        <div className="v-views">
                          127,548 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src={vidImg1} alt="" />
                          </a>
                          <div className="time">54:23</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            There Can Only Be One! Introducing Tanc & Hercules
                          </a>
                        </div>
                        <div className="v-views">
                          127,548 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src={vidImg1} alt="" />
                          </a>
                          <div className="time">54:23</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            There Can Only Be One! Introducing Tanc & Hercules
                          </a>
                        </div>
                        <div className="v-views">
                          127,548 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / videos component --> */}
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
