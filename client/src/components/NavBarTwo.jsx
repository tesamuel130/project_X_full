import React from "react";
import { Link } from "react-router-dom";

//import the css asset
import "../assets/style/style.css";
import "../assets/style/form-awesome.css";
import "../assets/style/font-circle-video.css";
import "../assets/bootstrap/css/bootstrap.min.css";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
  faCirclePlay,
  faP,
  faHourglassStart,
  faPerson,
  faPersonDress,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBarTwo() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="navbar-container2">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-sm-2 hidden-xs">
                  <div className="goto">Go to:</div>
                </div>
                <div className="col-lg-3  col-sm-10 col-xs-12">
                  <div className="h-icons">
                    <Link to="/#">
                      <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Liked Videos"
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="cv cvicon-cv-liked"
                        />
                      </i>
                    </Link>
                    <Link to="/#">
                      <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Watch Later"
                      >
                        <FontAwesomeIcon
                          icon={faClock}
                          className="cv cvicon-cv-watch-later"
                        />
                      </i>
                    </Link>
                    <Link to="/#">
                      <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Saved Playlist"
                      >
                        <FontAwesomeIcon
                          icon={faCirclePlay}
                          className="cv cvicon-cv-play-circle"
                        />
                      </i>
                    </Link>
                    <Link to="/#">
                      <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Purchased Videos"
                      >
                        <FontAwesomeIcon
                          icon={faP}
                          className="cv cvicon-cv-purchased"
                        />
                      </i>
                    </Link>
                    <Link to="/#">
                      <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="History"
                      >
                        <FontAwesomeIcon
                          icon={faHourglassStart}
                          className="cv cvicon-cv-history"
                        />
                      </i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-7 col-sm-10 hidden-xs">
                  <div className="h-resume">
                    <div className="play-icon">
                      <Link to="/#">
                        {/* <i className="cv cvicon-cv-play"></i> */}
                      </Link>
                    </div>
                    {/* Resume:{" "}
                    <span className="color-default">
                      Daredevil Season 2 : Episode 6{" "}
                    </span> */}
                  </div>
                </div>
                <div className="col-lg-1 col-sm-2 hidden-xs">
                  <div className="h-grid">
                    <Link to="/#">
                      <i>
                        <FontAwesomeIcon
                          icon={faPerson}
                          className="cv cvicon-cv-grid-view"
                        />
                      </i>
                    </Link>
                    <Link to="/#">
                      <i>
                        <FontAwesomeIcon
                          icon={faPersonDress}
                          className="cv cvicon-cv-list-view"
                        />
                      </i>
                    </Link>
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
