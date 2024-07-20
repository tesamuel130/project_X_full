const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="container padding-def">
            <div className="col-lg-1  col-sm-2 col-xs-12 footer-logo">
              <a className="navbar-brand" href="index.html">
                <img
                  src="./src/assets/images/logo.svg"
                  alt="Project name"
                  className="logo"
                />
              </a>
              <a className="navbar-brand" href="index-2.html">
                <img
                  src="./src/assets/images/logo.svg"
                  alt="Project name"
                  className="logo"
                />
                <span>Circle</span>
              </a>
            </div>
            <div className="col-lg-7 col-sm-6 col-xs-12">
              <div className="f-links">
                <ul className="list-inline">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Copyright</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li className="hidden-xs">
                    <a href="#">Help</a>
                  </li>
                </ul>
              </div>
              <div className="delimiter"></div>
            </div>
            <div className="col-lg-7 col-sm-6 col-xs-12">
              <div className="f-copy">
                <ul className="list-inline">
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    Copyrights 2016{" "}
                    <a href="azyrusthemes.html" className="hidden-xs">
                      azyrusthemes.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-offset-1 col-lg-3 col-sm-4 col-xs-12">
              <div className="f-last-line">
                <div className="f-icon pull-left">
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
                <div className="f-lang pull-right">
                  <div className="btn-group dropup pull-right">
                    <button
                      className="btn btn-default btn-sm dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Language <span className="caret"></span>
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
                          <i className="cv cvicon-cv-watch-later"></i> Longest
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="delimiter visible-xs"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
