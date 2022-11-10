import React from "react";
import s from "./Hero.module.scss";
import "../../styles/index.scss";

function Hero() {
  return (
    <div className={s.heroWrap}>
      <div className={"container"}>
        <div className={s.hero}>
          <div className={s.hero_left}>
            <h1>
              PRODUCTS
              <br />
              WITH A STORY
            </h1>
            <button>watch our studio tour</button>
          </div>
          {/* <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
