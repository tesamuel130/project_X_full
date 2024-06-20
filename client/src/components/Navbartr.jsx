import { Link } from "react-router-dom";

export default function Navbartr() {
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="btn-color-toggle">
            {/* <img src="images/icon_bulb_light.png" alt=""> */}
          </div>
          <div class="navbar-container single">
            <div class="container">
              <div class="row">
                <div class="col-xs-3 visible-xs">
                  <Link class="btn-menu-toggle">
                    <i class="cv cvicon-cv-menu"></i>
                  </Link>
                </div>
                <div class="col-lg-1 col-sm-2 col-xs-6">
                  <Link class="navbar-brand" to="/index-2.html">
                    <img
                      src="images/logo.svg"
                      alt="Project name"
                      class="logo"
                    />
                    <span>Circle</span>
                  </Link>
                </div>
                <div class="col-lg-3 col-sm-10 hidden-xs">
                  <ul class="list-inline menu">
                    <li class="color-active">
                      <Link to="/#">Pages</Link>
                      <ul>
                        <li>
                          <Link to="/index-2.html">Home Page</Link>
                        </li>
                        <li>
                          <Link to="/single-video.html">Single Video Page</Link>
                        </li>
                        <li>
                          <a href="single-video-youtube.html">
                            Single Video Youtube Embedded Page
                          </a>
                        </li>
                        <li>
                          <a href="single-video-vimeo.html">
                            Single Video Vimeo Embedded Page
                          </a>
                        </li>
                        <li>
                          <a href="upload.html">Upload Video Page</a>
                        </li>
                        <li>
                          <a href="upload-edit.html">Upload Video Edit Page</a>
                        </li>
                        <li>
                          <a href="search.html">Searched Videos Page</a>
                        </li>
                        <li>
                          <a href="channel.html">Single Channel Page</a>
                        </li>
                        <li>
                          <a href="channels.html">Channels Page</a>
                        </li>
                        <li>
                          <a href="single-video-tabs.html">
                            Single Videos Page With Tabs
                          </a>
                        </li>
                        <li>
                          <a href="single-video-playlist.html">
                            Single Videos Page With Playlist
                          </a>
                        </li>
                        <li>
                          <a href="history.html">History Page</a>
                        </li>
                        <li>
                          <a href="categories.html">Browse Categories Page</a>
                        </li>
                        <li>
                          <a href="categories_side_menu.html">
                            Browse Categories Side Menu Page
                          </a>
                        </li>
                        <li>
                          <a href="subscription.html">Subscription Page</a>
                        </li>
                        <li>
                          <a href="login.html">Login Page</a>
                        </li>
                        <li>
                          <a href="signup.html">Signup Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="channel.html">Channels</a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 col-sm-8 col-xs-3">
                  <form
                    action="http://azyrusthemes.com/circlevideo/search.html"
                    method="post"
                  >
                    <div class="topsearch">
                      <i class="cv cvicon-cv-cancel topsearch-close"></i>
                      <div class="input-group">
                        <span class="input-group-addon" id="sizing-addon2">
                          <i class="fa fa-search"></i>
                        </span>
                        {/* <input type="text" class="form-control" placeholder="Search" aria-describedby="sizing-addon2"> */}
                        <div class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-default dropdown-toggle"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i class="cv cvicon-cv-video-file"></i>
                            &nbsp;&nbsp;&nbsp;<span class="caret"></span>
                          </button>
                          /
                          <ul class="dropdown-menu">
                            <li>
                              <a href="#">
                                <i class="cv cvicon-cv-relevant"></i> Relevant
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="cv cvicon-cv-calender"></i> Recent
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="cv cvicon-cv-view-stats"></i> Viewed
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="cv cvicon-cv-star"></i> Top Rated
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i class="cv cvicon-cv-watch-later"></i> Longest
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-lg-2 col-sm-12 hidden-xs">
                  <div class="loginsignup pull-right">
                    <a href="login.html">Login</a> .{" "}
                    <a href="signup.html">Signup</a>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
