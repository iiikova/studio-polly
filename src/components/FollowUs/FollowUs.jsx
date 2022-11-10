import React from "react";
import s from "./FollowUs.module.scss";

function FollowUs() {
  return (
    <div className={s.follow}>
      <div className="container">
        <div className={s.title}>
          <h1>behind the scenes</h1>
          <p>follow us on instagram</p>
        </div>
        <div className={s.images}>
          <div>
            <img
              src={require("../../assets/images/followus/1.png")}
              alt="instagram"
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/followus/2.png")}
              alt="instagram"
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/followus/3.png")}
              alt="instagram"
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/followus/4.png")}
              alt="instagram"
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/followus/5.png")}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowUs;
