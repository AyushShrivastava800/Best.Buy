import React from "react";

import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Productcard from "../../generic-component/product-card";
import { ProductData } from "../../../data/Product";
import { Link } from "react-router-dom";
function ProductCarousel() {
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
            {ProductData.map((data, index) => (
              <Box>
                <Link to={{ pathname: `/products/${data.id}` }} className="carouseLinks">
                  <Productcard data={data} />
                </Link>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default ProductCarousel;
