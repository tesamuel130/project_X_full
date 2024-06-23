import React from "react";
import { Link } from "react-router-dom";

//import a navbar
import NavBarTwo from "../components/NavBarTwo";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";

export default function Chat() {
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
                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img className="chaters-img" src={vidImg0} alt="" />
                            <i className="v-online">
                              <FontAwesomeIcon icon={faCircleDot} />
                              offline
                            </i>
                          </a>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Man's Sky: 21 Minutes of New Gameplay - IGN First
                          </a>
                        </div>
                        <div className="v-views">
                          27,548 views.{" "}
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
                            <img className="chaters-img" src={vidImg0} alt="" />
                            <i className="v-online">
                              <FontAwesomeIcon icon={faCircleDot} />
                              offline
                            </i>
                          </a>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Man's Sky: 21 Minutes of New Gameplay - IGN First
                          </a>
                        </div>
                        <div className="v-views">
                          27,548 views.{" "}
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
                            <img className="chaters-img" src={vidImg0} alt="" />
                            <i className="v-online">
                              <FontAwesomeIcon icon={faCircleDot} />
                              offline
                            </i>
                          </a>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Man's Sky: 21 Minutes of New Gameplay - IGN First
                          </a>
                        </div>
                        <div className="v-views">
                          27,548 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
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