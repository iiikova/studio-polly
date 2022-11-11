import React, { useState } from "react";
import s from "./Footer.module.scss";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");

  const formSend = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={s.footerWrap}>
      <div className="container">
        <div className={s.footer}>
          <h1>studio polly</h1>
          <div className={s.footer_blocks}>
            <div className={s.block}>
              <h2>Subscribe and get 10% off your first order.</h2>
              <form onSubmit={formSend}>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"
                  placeholder="Enter your email"
                />
                <button type="submit">Send</button>
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
