import React from "react";
import { Link } from "react-router-dom";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

import NavBarTwo from "../components/NavBarTwo";

//import image
import hadeHomeImg0 from "../assets/images/ava1.png";
import hadeHomeImg1 from "../assets/images/ava3.png";
import hadeHomeImg2 from "../assets/images/ava2.png";
import hadeHomeImg3 from "../assets/images/ava4.png";
import hadeHomeImg4 from "../assets/images/ava5.png";
import hadeHomeImg5 from "../assets/images/ava6.png";
import hadeHomeImg6 from "../assets/images/ava7.png";
import hadeHomeImg7 from "../assets/images/ava8.png";
import hadeHomeImg8 from "../assets/images/ava9.png";
import hadeHomeImg9 from "../assets/images/ava10.png";
import hadeHomeImg10 from "../assets/images/ava11.png";
import hadeHomeImg11 from "../assets/images/ava12.png";

//import video img
import vidImg0 from "../assets/images/chanel-2.png";
import vidImg1 from "../assets/images/video2-1.png";

export default function Home() {
  return (
    <>
      <NavBarTwo />

      <div className="content-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Updates from Subscriptions --> */}
              <div className="content-block">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-10">
                      <ul className="list-inline">
                        <li>
                          <a href="#">Updates from Subscriptions</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-2 col-sm-2 col-xs-2">
                      <div className="btn-group pull-right bg-clean">
                        <button
                          type="button"
                          className="btn btn-default dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-relevant"></i> Relevant
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Recent
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Viewed
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> Top Rated
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-watch-later"></i>{" "}
                              Longest
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="cb-content avatars">
                  <div className="row">
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg0} alt="" />
                        <div className="note">1</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg1} alt="" />
                        <div className="note">03</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg2} alt="" />
                        <div className="note">10</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg3} alt="" />
                        <div className="note">56</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg4} alt="" />
                        <div className="note">6</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg5} alt="" />
                        <div className="note">25</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg6} alt="" />
                        <div className="note">23</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg7} alt="" />
                        <div className="note">16</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg8} alt="" />
                        <div className="note">3</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg9} alt="" />
                        <div className="note">6</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg10} alt="" />
                        <div className="note">98</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src={hadeHomeImg11} alt="" />
                        <div className="note">125</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Updates from Subscriptions --> */}

              {/* <!-- chater component --> */}

              <div className="content-block head-div">
                {/* chaters list header component */}
                <div>
                  <h1 className="home-components-header">Chat</h1>
                </div>
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
                  {/* see more butons for home suplay service component */}
                  <div className="home-seeMore-button-container">
                    <Link to="/chat">
                      <button>See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- / chater component --> */}

              {/* <!-- videos component --> */}

              <div className="content-block head-div">
                {/* videos list header component */}
                <div>
                  <h1 className="home-components-header">Videos</h1>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
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
                    {/* video list */}
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
                  {/* see more butons for home suplay service component */}
                  <div className="home-seeMore-button-container">
                    <Link to="/chat">
                      <button>See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- / videos component --> */}

              {/* <!-- live striming component --> */}

              <div className="content-block head-div">
                {/* live list header component */}
                <div>
                  <h1 className="home-components-header">Live stream</h1>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
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
                    {/* video list */}
                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src={vidImg1} alt="" />
                          </a>
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
                  {/* see more butons for home suplay service component */}
                  <div className="home-seeMore-button-container">
                    <Link to="/chat">
                      <button>See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- / live striming component --> */}

              {/* <!--  Person contact --> */}

              <div className="content-block head-div">
                {/* videos list header component */}
                <div>
                  <h1 className="home-components-header">Videos</h1>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
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
                              <i className="cv cvicon-cv-relevant"></i> All
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-calender"></i> Older
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-view-stats"></i> Youth
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="cv cvicon-cv-star"></i> new
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
                    {/* person list */}
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="b-playlist">
                        <div className="v-img">
                          <img src={vidImg0} alt="" className="l-1" />
                          <img src={vidImg0} alt="" className="l-2" />
                          <a href="single-video-tabs.html">
                            <img src={vidImg0} alt="" className="l-3" />
                          </a>
                          <div className="items">20</div>
                        </div>
                        <div className="v-desc">
                          <a href="#">
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

                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="b-playlist">
                        <div className="v-img">
                          <img src={vidImg0} alt="" className="l-1" />
                          <img src={vidImg0} alt="" className="l-2" />
                          <a href="single-video-tabs.html">
                            <img src={vidImg0} alt="" className="l-3" />
                          </a>
                          <div className="items">15</div>
                        </div>
                        <div className="v-desc">
                          <a href="#">
                            Pokémon 3: The Movie - Spell Of The Unown: Entei
                            HD...
                          </a>
                        </div>
                        <div className="v-views">
                          18,241,542 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 93%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* see more butons for home suplay service component */}
                  <div className="home-seeMore-button-container">
                    <Link to="/chat">
                      <button>See More</button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- / Person contact --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
