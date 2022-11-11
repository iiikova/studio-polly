import AboutHero from "./components/AboutHero/AboutHero";
import Advisor from "./components/Advisor/Advisor";
import Articles from "./components/Articles/Articles";
import Category from "./components/Category/Category";
import FollowUs from "./components/FollowUs/FollowUs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Navigation from "./components/Navigation/Navigation";
import Newssendler from "./components/Newssendler/Newssendler";
import Order from "./components/Order/Order";
import Products from "./components/Products/Products";
import Router from "./Router";

function App() {
  return (
    <>
      <Navigation />
      <Router />
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

export default App;
