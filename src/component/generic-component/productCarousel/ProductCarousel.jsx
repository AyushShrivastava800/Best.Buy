import React from "react";

import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Productcard from "../../generic-component/product-card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ProductCarousel() {
  const { cartItems } = useSelector((state) => state.cart);
  const settings = {
    dots: true,
    autoplay: false,
    arrows: true,
    infinite: true,
    speed: 500,
    className: "center",

    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: (
      <KeyboardArrowRightIcon className="arrow-Icons" sx={{ color: "gray" }} />
    ),
    prevArrow: (
      <KeyboardArrowLeftIcon className="arrow-Icons" sx={{ color: "gray" }} />
    ),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Box className="product-carousel-box mb-18">
        <Box>
          <Typography className="carousel-heading">
            You May Also Like
          </Typography>
        </Box>
        <Box>
          <Slider {...settings}>
            {cartItems.map((data, index) => (
              <Box>
                <Productcard data={data} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default ProductCarousel;
