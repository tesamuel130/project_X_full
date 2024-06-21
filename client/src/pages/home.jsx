import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import NavBarTwo from "../components/NavBarTwo";

//importing image file
const images = "../assets/images";

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
                        <img src={`../assets/images/ava2.png`} alt="" />
                        <div className="note">1</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava3.png" alt="" />
                        <div className="note">03</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava4.png" alt="" />
                        <div className="note">10</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava5.png" alt="" />
                        <div className="note">56</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava6.png" alt="" />
                        <div className="note">6</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava7.png" alt="" />
                        <div className="note">25</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava8.png" alt="" />
                        <div className="note">23</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava9.png" alt="" />
                        <div className="note">16</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava10.png" alt="" />
                        <div className="note">3</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava11.png" alt="" />
                        <div className="note">6</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava12.png" alt="" />
                        <div className="note">98</div>
                      </a>
                    </div>
                    <div className="col-lg-1 col-sm-2 col-xs-3">
                      <a href="#">
                        <img src="images/ava1.png" alt="" />
                        <div className="note">125</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Updates from Subscriptions --> */}

              {/* <!-- Featured Videos --> */}
              <div className="content-block head-div">
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="visible-xs">Featured</span>
                            <span className="hidden-xs">Featured Videos</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">New Videos</a>
                        </li>
                        <li className="hidden-xs">
                          <a href="#">Recommended For You</a>
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
                <div className="cb-content videolist">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-1.png" alt="" />
                          </a>
                          <div className="time">3:50</div>
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
                            <img src="images/video1-2.png" alt="" />
                          </a>
                          <div className="time">15:19</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            GTA 5: Michael, Franklin, and Trevor in the Flesh
                          </a>
                        </div>
                        <div className="v-views">
                          8,241,542 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 93%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-3.png" alt="" />
                          </a>
                          <div className="time">4:23</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Battlefield 3: Official Fault Line Gameplay Trailer
                          </a>
                        </div>
                        <div className="v-views">
                          2,729,347 views .{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 95%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-4.png" alt="" />
                          </a>
                          <div className="time">7:18</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Batman Arkham City: Hugo Strange Trailer
                          </a>
                        </div>
                        <div className="v-views">
                          7,239,852 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 84%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-5.png" alt="" />
                          </a>
                          <div className="time">23:57</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            BATTALION 1944: TAKING ON BATTLEFIELD 5
                          </a>
                        </div>
                        <div className="v-views">
                          19,130 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-6.png" alt="" />
                            <div className="watched-mask"></div>
                            <div className="watched">WATCHED</div>
                            <div className="time">7:27</div>
                          </a>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Amazon Blocking VIDEO GAMES for Non-Prime...
                          </a>
                        </div>
                        <div className="v-views">
                          185,525 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 93%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-7.png" alt="" />
                          </a>
                          <div className="time">12:58</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Amazing Facts About Nebulas Inside Deep Universe
                          </a>
                        </div>
                        <div className="v-views">
                          203,741 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 95%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video1-8.png" alt="" />
                          </a>
                          <div className="time">9:47</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Cornfield Chase - Outlast II Official Gameplay
                          </a>
                        </div>
                        <div className="v-views">
                          202,513 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 84%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Featured Videos --> */}

              {/* <!-- New Videos in India --> */}
              <div className="content-block head-div head-arrow">
                <div className="head-arrow-icon">
                  <i className="cv cvicon-cv-next"></i>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            <span className="hidden-xs">
                              New Videos in India
                            </span>
                            <span className="visible-xs">New in India</span>
                          </a>
                        </li>
                        <li className="hidden-xs">
                          <a href="#">Most Viewed</a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="hidden-xs">
                              Featured This Week
                            </span>
                            <span className="visible-xs">Featured Videos</span>
                          </a>
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
                <div className="cb-content videolist">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-1.png" alt="" />
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
                            <img src="images/video2-2.png" alt="" />
                          </a>
                          <div className="time">47:12</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
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

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-3.png" alt="" />
                          </a>
                          <div className="watched-mask"></div>
                          <div className="watched">WATCHED</div>
                          <div className="time">19:23</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Bullet Trains and Octopus Balls in South Korea
                          </a>
                        </div>
                        <div className="v-views">
                          729,347 views .{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 95%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-4.png" alt="" />
                          </a>
                          <div className="time">21:18</div>
                        </div>
                        <div className="v-desc">
                          <a href="#">
                            Top 10 NEW 3DS Games Of 2016 that blew our mind
                          </a>
                        </div>
                        <div className="v-views">
                          79,239,852 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 84%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-5.png" alt="" />
                          </a>
                          <div className="time">1:23:57</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Mirror's Edge Catalyst Beta: PS4 vs Xbox One
                            Frame-Rate...{" "}
                          </a>
                        </div>
                        <div className="v-views">
                          519,130 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 78%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-6.png" alt="" />
                          </a>
                          <div className="time">8:27</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            THE MAGNIFICENT SEVEN - Teaser Trailer (HD)
                          </a>
                        </div>
                        <div className="v-views">
                          15,525 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 93%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-7.png" alt="" />
                          </a>
                          <div className="time">6:58</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            Game of Thrones Season 6: Event Promo (HBO)
                          </a>
                        </div>
                        <div className="v-views">
                          43,741 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 95%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 videoitem">
                      <div className="b-video last-row">
                        <div className="v-img">
                          <a href="single-video-tabs.html">
                            <img src="images/video2-8.png" alt="" />
                          </a>
                          <div className="time">5:47</div>
                        </div>
                        <div className="v-desc">
                          <a href="single-video-tabs.html">
                            CHAPPIE Movie – Die Antwoord Featurette...
                          </a>
                        </div>
                        <div className="v-views">
                          3,202,513 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 84%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /New Videos in India --> */}

              {/* <!-- Popular Playlists --> */}
              <div className="content-block head-div head-arrow">
                <div className="head-arrow-icon">
                  <i className="cv cvicon-cv-next"></i>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            Popular Playlists
                          </a>
                        </li>
                        <li>
                          <a href="#">Recently Featured</a>
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
                <div className="cb-content">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="b-playlist">
                        <div className="v-img">
                          <img
                            src="images/video1-1.png"
                            alt=""
                            className="l-1"
                          />
                          <img
                            src="images/video1-2.png"
                            alt=""
                            className="l-2"
                          />
                          <a href="single-video-tabs.html">
                            <img
                              src="images/playlist-1.png"
                              alt=""
                              className="l-3"
                            />
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
                          <img
                            src="images/video2-1.png"
                            alt=""
                            className="l-1"
                          />
                          <img
                            src="images/video2-2.png"
                            alt=""
                            className="l-2"
                          />
                          <a href="single-video-tabs.html">
                            <img
                              src="images/playlist-2.png"
                              alt=""
                              className="l-3"
                            />
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

                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="b-playlist">
                        <div className="v-img">
                          <img
                            src="images/video2-6.png"
                            alt=""
                            className="l-1"
                          />
                          <img
                            src="images/video2-4.png"
                            alt=""
                            className="l-2"
                          />
                          <a href="single-video-tabs.html">
                            <img
                              src="images/playlist-3.png"
                              alt=""
                              className="l-3"
                            />
                          </a>
                          <div className="items">7</div>
                        </div>
                        <div className="v-desc">
                          <a href="#">
                            Bullet Trains and Octopus Balls in South Korea
                          </a>
                        </div>
                        <div className="v-views">
                          729,347 views .{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 95%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-xs-12">
                      <div className="b-playlist">
                        <div className="v-img">
                          <img
                            src="images/video1-6.png"
                            alt=""
                            className="l-1"
                          />
                          <img
                            src="images/video1-4.png"
                            alt=""
                            className="l-2"
                          />
                          <a href="single-video-tabs.html">
                            <img
                              src="images/playlist-4.png"
                              alt=""
                              className="l-3"
                            />
                          </a>
                          <div className="items">27</div>
                        </div>
                        <div className="v-desc">
                          <a href="#">
                            Top 10 NEW 3DS Games Of 2016 that blew our mind
                          </a>
                        </div>
                        <div className="v-views">
                          79,239,852 views.{" "}
                          <span className="v-percent">
                            <span className="v-circle"></span> 84%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Popular Playlists --> */}

              {/* <!-- Popular Channels --> */}
              <div className="content-block head-div head-arrow">
                <div className="head-arrow-icon">
                  <i className="cv cvicon-cv-next"></i>
                </div>
                <div className="cb-header">
                  <div className="row">
                    <div className="col-lg-10 col-sm-10 col-xs-8">
                      <ul className="list-inline">
                        <li>
                          <a href="#" className="color-active">
                            Popular Channels
                          </a>
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
                          More <span className="caret"></span>
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
                <div className="cb-content chanels-row">
                  <div className="row">
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-1.png" alt="" />
                          <div className="hover">
                            <span>Ray Simpson</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 5K
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-2.png" alt="" />
                          <div className="hover">
                            <span>Ray</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 215K
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-3.png" alt="" />
                          <div className="hover">
                            <span>Simpson</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 21
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-4.png" alt="" />
                          <div className="hover">
                            <span>Ray Simpson</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 134
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-5.png" alt="" />
                          <div className="hover">
                            <span>Simpson</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 1.6M
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-xs-4">
                      <div className="b-chanel">
                        <a href="#">
                          <img src="images/chanel-6.png" alt="" />
                          <div className="hover">
                            <span>Ray</span>
                            <span>
                              <i className="cv cvicon-cv-liked"></i> 265K
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Popular Channels --> */}

              {/* <!-- pagination --> */}
              <div className="v-pagination">
                <ul className="list-inline">
                  <li className="v-pagination-prev">
                    <a href="#">
                      <i className="cv cvicon-cv-previous"></i>
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
                      <i className="cv cvicon-cv-next"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- /pagination --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
