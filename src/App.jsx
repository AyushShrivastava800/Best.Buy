import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import LandingPage from "./component/screens/landing-page";
import Footer from "./component/screens/Footer/index";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
