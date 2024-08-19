//import image
import logoimg from "../assets/images/lingChatLogoOnly.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="container padding-def">
            <div className="col-lg-1  col-sm-2 col-xs-12 footer-logo">
              <a className="navbar-brand">
                <img src={logoimg} alt="Project name" className="logo" />
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
                  <li>Copyrights 2024 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
