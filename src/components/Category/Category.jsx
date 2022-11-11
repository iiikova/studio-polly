import React from "react";
import s from "./Category.module.scss";

import { NavLink } from "react-router-dom";

function Category() {
  let activeStyle = {
    textDecoration: "underline",
  };

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
            <NavLink
              to="/vases"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p>Vases</p>
            </NavLink>
          </div>
          <div>
            <img
              src={require("../../assets/images/category/2.png")}
              alt="Cups"
            />
            <NavLink
              to="/cups"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p>Cups</p>
            </NavLink>
          </div>
          <div>
            <img
              src={require("../../assets/images/category/3.png")}
              alt="Plates"
            />
            <NavLink
              to="/plates"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <p>Plates </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
