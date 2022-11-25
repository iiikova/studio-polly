import React from "react";

// styles
import s from "./Footer.module.scss";

// icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

// components
import FormMail from "../FormMail/FormMail";

function Footer() {
  return (
    <div className={s.footerWrap}>
      <div className="container">
        <div className={s.footer}>
          <h1>studio polly</h1>
          <div className={s.footer_blocks}>
            <div>
              <h2>Subscribe and get 10% off your first order.</h2>
              <FormMail />
            </div>
            <div>
              <p>home</p>
              <p>shop</p>
              <p>Journal</p>
              <p>Contact</p>
            </div>
            <div>
              <p>about</p>
              <p>Terms and Conditions</p>
              <p>Privacy policy</p>
            </div>
            <div>
              <p>Style guide</p>
              <p>Licensing</p>
              <p>Changelog</p>
            </div>
          </div>
          <div className={s.terms}>
            <div>
              <p>Made by Ikova</p>
              <p>
                <a href="mailto:ikova.ua@gmail.com">ikova.ua@gmail.com</a>
              </p>
            </div>
            <div>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
