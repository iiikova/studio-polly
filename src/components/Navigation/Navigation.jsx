import React, { useState } from "react";
import s from "./Navigation.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";

function Navigation() {
  const [count, setCount] = useState(0);

  return (
    <div className={s.navigationWrap}>
      <div className={s.container}>
        <div className={s.navigation}>
          <div className={s.logo}>
            <h1>studio polly</h1>
          </div>
          <div className={s.links}>
            <p>shop</p>
            <p>about</p>
            <p>journal</p>
          </div>
          <div className={s.order}>
            <div>
              <p>search</p>
            </div>
            <div>
              <HiOutlineShoppingCart />
              <p>({count})</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
