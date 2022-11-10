import React from "react";
import s from "./Articles.module.scss";

function Articles() {
  return (
    <div className={s.ariclesWrap}>
      <div className="container">
        <h1>latest articles</h1>
        <div className={s.articles}>
          <div>
            <img
              src={require("../../assets/images/articles/1.png")}
              alt="articles"
            />

            <p>10 tips for beginners</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/articles/2.png")}
              alt="articles"
            />

            <p>2022 pottery trends</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/articles/3.png")}
              alt="articles"
            />

            <p>How to start your brand</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
