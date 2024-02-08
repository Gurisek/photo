import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer_navigation">
            <ul className="footer_list">
              <li className="footer_item">
                <Link to={"/kontakt"} className="footer_link">
                  Kontaktuj mě
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/about"} className="footer_link">
                  O mně
                </Link>
              </li>
              <li className="footer_item">
                <Link to={"/kontakt"} className="footer_link">
                  Dobré vědět
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="social_media_links">
            <a href="/" className="social_media_link">
              <i className="gg-facebook" id="icon"></i>
            </a>
            <a href="/" className="social_media_link">
              <i className="gg-instagram" id="icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <p className="footer_copy">
          &copy; {new Date().getFullYear()} Tereza Josefíková. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

      //  <div className="container">
      //   <Link to={'/kontakt'}>Kontaktuj mě</Link>
      //   <Link to={'/about'}>O mně</Link>
      //   <div className="social">
      //       <a href='/'><i className='gg-facebook'></i></a>
      //   </div>
      
      //   <p className="text-muted">Copyright &copy; 2023 Tereza Josefíková. All rights reserved.</p>
      // </div> 