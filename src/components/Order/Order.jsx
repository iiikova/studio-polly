import React from "react";
import s from "./Order.module.scss";

function Order() {
  return (
    <div className={s.orderWrap}>
      <div className="container">
        <div className={s.order}>
          <div>
            <h1>home clay kits</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              lobortis ante sit amet neque tristique rutrum. Nullam a suscipit
              ex. Donec ac efficitur mauris.
            </h3>
            <p>free shipping</p>
            <p>no need to fire</p>
            <p>tools and clay included</p>
            <button>order your kit now</button>
          </div>
          <div>
            <img src={require("../../assets/images/kits.png")} alt="kit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
