import React from "react";
import s from "./Advisor.module.scss";

function Advisor() {
  return (
    <div className={s.advisorWrap}>
      <div>
        <p>Vases</p>
        <img src={require("../../assets/images/hash.png")} alt="hash" />
        <p>Mugs</p>
        <img src={require("../../assets/images/hash.png")} alt="hash" />
        <p>Plates</p>
        <img src={require("../../assets/images/hash.png")} alt="hash" />
      </div>
      <div>
        <p>VASES</p>
        <img src={require("../../assets/images/hash.png")} alt="hash" />
        <p>BOWLS</p>
        <img src={require("../../assets/images/hash.png")} alt="hash" />
        <p>PLATES</p>
      </div>
    </div>
  );
}

export default Advisor;
