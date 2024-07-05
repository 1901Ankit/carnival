import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import Scroll from "../components/scrolltotop";
import ScrollToTop from "../components/scroll";
import Home from "../view/Homepage";
import Footer from "../components/footer";
// import Loader from "../components/Loadercount";
const Router = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Loader/> */}
        <Navbar />
        <ScrollToTop />
        <Scroll />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Router;
