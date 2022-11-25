import FormMail from "../FormMail/FormMail";

import React from "react";
import s from "./Newssendler.module.scss";

function Newssendler() {
  return (
    <div className={s.newsWrap}>
      <div className="container">
        <div className={s.news}>
          <div className={s.newsLeft}>
            <h1>
              new
              <br />
              collection
            </h1>
            <h1>april 2022</h1>
          </div>
          <span></span>
          <div className={s.newsRight}>
            <h1>keep in touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <FormMail />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newssendler;
