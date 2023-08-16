import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import LandingPage from "./component/screens/landing-page";
import Footer from "./component/screens/Footer/index";
import Store from "./component/screens/Store";
import Products from "./component/screens/ProductDetailsPage";
import Blog from "./component/screens/blogPage/index";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import Carts from "./component/screens/addtocart/Cart";
import { Provider } from "react-redux";
import { store } from "./component/features/store/store";
import WishList from "./component/screens/wishListPage/WishList";
import Login from "./component/screens/login/Login";
import SignUp from "./component/screens/signUp/SignUp";
import Payment from "./component/screens/Payment/Payment";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/products/:id" element={<Products />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="carts" element={<Carts />} />
          <Route exact path="wishlist" element={<WishList />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<SignUp />} />
          <Route exact path="payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
};

export default App;
