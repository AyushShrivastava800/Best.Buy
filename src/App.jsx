import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import LandingPage from "./component/screens/landing-page";
import Footer from "./component/screens/Footer/index";
import Store from "./component/screens/Store";
import Products from "./component/screens/ProductDetailsPage";
import Blog from "./component/screens/blogPage/index"
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
const App = () => {
  return (
    <>
    <ScrollToTop/>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/store" element={<Store />}/>
        <Route exact path="/products/:id" element={<Products />}/>
        <Route exact path="/blog" element={<Blog />}/>

      </Routes>
      <Footer/>
    
    </>
  );
};

export default App;