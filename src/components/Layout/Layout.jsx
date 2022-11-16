import React from "react";
import Hero from "../Hero/Hero";
import AboutHero from "../AboutHero/AboutHero";
import Products from "../Products/Products";
import Advisor from "../Advisor/Advisor";
import Category from "../Category/Category";
import Order from "../Order/Order";
import Info from "../Info/Info";
import Articles from "../Articles/Articles";
import Newssendler from "../Newssendler/Newssendler";
import FollowUs from "../FollowUs/FollowUs";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Hero />
      <AboutHero />
      <Products />
      <Advisor />
      <Category />
      <Order />
      <Info />
      <Articles />
      <Newssendler />
      <FollowUs />
      <Footer />
    </>
  );
}

export default Layout;
