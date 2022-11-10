import React from "react";
import s from "./Footer.module.scss";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={s.footerWrap}>
      <div className="container">
        <div className={s.footer}>
          <h1>studio polly</h1>
          <div className={s.footer_blocks}>
            <div className={s.block}>
              <h2>Subscribe and get 10% off your first order.</h2>
              <form>
                <input type="text" placeholder="Enter your email" />
                <button>Send</button>
              </form>
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
              <p>Made by Daniela Tomanova.</p>
              <p>Powered by Webflow.</p>
            </div>
            <div>
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaTwitter />
              </p>
              <p>
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
