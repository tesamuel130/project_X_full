import { Link } from "react-router-dom";

//import the css asset
import "../assets/style/style.css";
import "../assets/style/form-awesome.css";
import "../assets/style/font-circle-video.css";
import "../assets/bootstrap/css/bootstrap.min.css";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faVideo,
  faSortAmountDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbartr() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="btn-color-toggle">
            <img src="images/icon_bulb_light.png" alt="" />
          </div>
          <div className="navbar-container single">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 visible-xs">
                  <Link className="btn-menu-toggle">
                    <i>
                      <FontAwesomeIcon
                        icon={faBars}
                        class="cv cvicon-cv-menu"
                      />
                    </i>
                  </Link>
                </div>
                <div className="col-lg-1 col-sm-2 col-xs-6">
                  <Link className="navbar-brand" to="/index-2.html">
                    <img
                      src="images/logo.svg"
                      alt="Project name"
                      className="logo"
                    />
                    <span>Circle</span>
                  </Link>
                </div>
                <div className="col-lg-3 col-sm-10 hidden-xs">
                  <ul className="list-inline menu">
                    <li className="color-active">
                      <Link to="/#">Pages</Link>
                      <ul>
                        <li>
                          <Link to="/index-2.html">Home Page</Link>
                        </li>
                        <li>
                          <Link to="/single-video.html">Single Video Page</Link>
                        </li>
                        <li>
                          <Link to="/single-video-youtube.html">
                            Single Video Youtube Embedded Page
                          </Link>
                        </li>
                        <li>
                          <Link to="/single-video-vimeo.html">
                            Single Video Vimeo Embedded Page
                          </Link>
                        </li>
                        <li>
                          <Link to="/upload.html">Upload Video Page</Link>
                        </li>
                        <li>
                          <Link to="/upload-edit.html">
                            Upload Video Edit Page
                          </Link>
                        </li>
                        <li>
                          <Link to="/search.html">Searched Videos Page</Link>
                        </li>
                        <li>
                          <Link to="/channel.html">Single Channel Page</Link>
                        </li>
                        <li>
                          <Link to="/channels.html">Channels Page</Link>
                        </li>
                        <li>
                          <Link to="/single-video-tabs.html">
                            Single Videos Page With Tabs
                          </Link>
                        </li>
                        <li>
                          <Link to="/single-video-playlist.html">
                            Single Videos Page With Playlist
                          </Link>
                        </li>
                        <li>
                          <Link to="/history.html">History Page</Link>
                        </li>
                        <li>
                          <Link to="/categories.html">
                            Browse Categories Page
                          </Link>
                        </li>
                        <li>
                          <Link to="/categories_side_menu.html">
                            Browse Categories Side Menu Page
                          </Link>
                        </li>
                        <li>
                          <Link to="/subscription.html">Subscription Page</Link>
                        </li>
                        <li>
                          <Link to="/login.html">Login Page</Link>
                        </li>
                        <li>
                          <Link to="/signup.html">Signup Page</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/categories.html">Categories</Link>
                    </li>
                    <li>
                      <Link to="/channel.html">Channels</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-8 col-xs-3">
                  <form
                    action="http://azyrusthemes.com/circlevideo/search.html"
                    method="post"
                  >
                    <div className="topsearch">
                      {/* <i className="cv cvicon-cv-cancel topsearch-close"></i> */}
                      <div className="input-group">
                        <span className="input-group-addon" id="sizing-addon2">
                          <i class="fa fa-search">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-describedby="sizing-addon2"
                        />
                        <div className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {/* <i class="cv cvicon-cv-video-file"></i> */}
                            <FontAwesomeIcon icon={faVideo} />
                            &nbsp;&nbsp;&nbsp;<span className="caret"></span>
                          </button>
                          /
                          <ul className="dropdown-menu">
                            <li>
                              <Link to="/#">
                                {/* <i class="cv cvicon-cv-relevant"></i>  */}
                                <FontAwesomeIcon icon={faSortAmountDown} />
                                Relevant
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="cv cvicon-cv-calender"></i> Recent
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="cv cvicon-cv-view-stats"></i>{" "}
                                Viewed
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="cv cvicon-cv-star"></i> Top Rated
                              </Link>
                            </li>
                            <li>
                              <Link to="/#">
                                <i className="cv cvicon-cv-watch-later"></i>{" "}
                                Longest
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-2 col-sm-12 hidden-xs">
                  <div className="loginsignup pull-right">
                    <Link href="login.html">Login</Link> .{" "}
                    <Link href="signup.html">Signup</Link>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu">
        <div className="mobile-menu-head">
          <Link to="/#" className="mobile-menu-close"></Link>
          <Link className="navbar-brand" to="/index-2.html">
            <img src="images/logo.svg" alt="Project name" className="logo" />
            <span>Circle</span>
          </Link>
          <div className="mobile-menu-btn-color">
            <img src="images/icon_bulb_light.png" alt="" />
          </div>
        </div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-user">
            <div className="mobile-menu-user-img">
              <img src="images/ava11.png" alt="" />
            </div>
            <p>Bailey Fry </p>
            <span className="caret"></span>
          </div>
          <Link to="/#" className="btn mobile-menu-upload">
            {/* <i className="cv cvicon-cv-upload-video"></i> */}
            <FontAwesomeIcon icon={faBars} />
            <span>Upload Video</span>
          </Link>
          <div className="mobile-menu-list">
            <ul>
              <li>
                <Link to="/#">
                  {/* <i className="cv cvicon-cv-play-circle"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                  <p>Popular Videos</p>
                </Link>
              </li>
              <li>
                <Link to="/#">
                  {/* <i className="cv cvicon-cv-playlist"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                  <p>Browse Categories</p>
                  <span className="caret"></span>
                </Link>
                <ul className="mobile-menu-categories">
                  <li className="color-active">
                    <Link to="/#">
                      Pages <span className="caret"></span>
                    </Link>
                    <ul>
                      <li>
                        <Link to="/index-2.html">Home Page</Link>
                      </li>
                      <li>
                        <Link to="/single-video.html">Single Video Page</Link>
                      </li>
                      <li>
                        <Link to="/single-video-youtube.html">
                          Single Video Youtube Embedded Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/single-video-vimeo.html">
                          Single Video Vimeo Embedded Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/upload.html">Upload Video Page</Link>
                      </li>
                      <li>
                        <Link to="/upload-edit.html">
                          Upload Video Edit Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/search.html">Searched Videos Page</Link>
                      </li>
                      <li>
                        <Link to="/channel.html">Single Channel Page</Link>
                      </li>
                      <li>
                        <Link to="/channels.html">Channels Page</Link>
                      </li>
                      <li>
                        <Link to="/single-video-tabs.html">
                          Single Videos Page With Tabs
                        </Link>
                      </li>
                      <li>
                        <Link to="/single-video-playlist.html">
                          Single Videos Page With Playlist
                        </Link>
                      </li>
                      <li>
                        <Link to="/history.html">History Page</Link>
                      </li>
                      <li>
                        <Link to="/categories.html">
                          Browse Categories Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/categories_side_menu.html">
                          Browse Categories Side Menu Page
                        </Link>
                      </li>
                      <li>
                        <Link to="/subscription.html">Subscription Page</Link>
                      </li>
                      <li>
                        <Link to="/login.html">Login Page</Link>
                      </li>
                      <li>
                        <Link to="/signup.html">Signup Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/categories.html">Categories</Link>
                  </li>
                  <li>
                    <Link to="/channel.html">Channels</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/#">
                  {/* <i className="cv cvicon-cv-liked"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                  <p>Liked Videos</p>
                </Link>
              </li>
              <li>
                <Link link="/#">
                  {/* <i className="cv cvicon-cv-history"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                  <p>History</p>
                </Link>
              </li>
              <li>
                <Link link="/#">
                  {/* <i className="cv cvicon-cv-purchased"></i> */}
                  <FontAwesomeIcon icon={faBars} />
                  <p>Purchased Videos</p>
                </Link>
              </li>
            </ul>
          </div>
          <Link link="/#" className="btn mobile-menu-logout">
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}
