import React from "react";
import s from "./Category.module.scss";

function Category() {
  return (
    <div className={s.categoryWrap}>
      <div className="container">
        <h1>shop by category</h1>

        <div className={s.category}>
          <div>
            <img
              src={require("../../assets/images/category/1.png")}
              alt="vases"
            />
            <p>Vases</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/category/2.png")}
              alt="Cups"
            />
            <p>Cups</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/category/3.png")}
              alt="Plates"
            />
            <p>Plates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
