import React from 'react'



import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import BlogCards from './BlogCards';
function BlogCarousel() {
    const items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 6 },
      ];
      const settings = {
        dots: true,
        autoplay: false,
        arrows: true,
        infinite: false,
        speed: 500,

            
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <KeyboardArrowRightIcon className='arrow-Icons' sx={{ color: "gray" }} />,
        prevArrow: <KeyboardArrowLeftIcon className='arrow-Icons' sx={{ color: "gray" }} />,
        responsive: [
        
    
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };
  return (
    <>
    <Box className="blog-carousel-box mb-18">
    <Box>
      <Typography className="carousel-heading">
         Our Authors 
      </Typography>
    </Box>
    <Box>
      <Slider {...settings}>
        {items.map((e) => (
          <Box key={e.id}>
            <BlogCards />
          </Box>
        ))}
      </Slider>
    </Box>
  </Box>
    </>
  )
}

export default BlogCarousel
