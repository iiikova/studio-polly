import React from "react";
import s from "./Products.module.scss";

function Products() {
  return (
    <div className={s.productsWrap}>
      <div className="container">
        <div className={s.products}>
          <div>
            <h2>our</h2>
            <h2>bestsellers</h2>
            <img
              src={require("../../assets/images/products/arrow.png")}
              alt="arrow"
            />
          </div>
          <div>
            <img
              src={require("../../assets/images/products/1.png")}
              alt="prod"
            />
            <p>Fruit Bowl</p>
            <p>$ 47.24 USD</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/products/2.png")}
              alt="prod"
            />
            <p>Coffee Cup</p>
            <p>$ 65.62 USDD</p>
            <p>$ 30.50 USD</p>
          </div>
          <div>
            <img
              src={require("../../assets/images/products/3.png")}
              alt="prod"
            />
            <p>Tall Vase</p>
            <p>$ 46.58 USD</p>
          </div>
        </div>
        <div className={s.seeAll}>
          <p>see all products</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
