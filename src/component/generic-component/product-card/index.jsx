import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Productcard = ({ data }) => {

  return (
    <Box className="card">
      <Box
        className="card-img-container"
        sx={{ backgroundImage: `url(${data.img})` }}
      >
        <Box className="card-hover">
          <Box className="like_btn">
            <FavoriteBorderIcon sx={{ color: "#fff" }} />
          </Box>
          <Typography className="viewProducts_btn">View Product</Typography>
        </Box>
      </Box>
      <Box className="card-content-container">
        <Typography className="categories">{data.category}</Typography>

        <Typography className="title mt-5">{data.name}</Typography>
        {data.price?.map((value, index) => (
          <Typography className="price mt-10">{value.oldPrice}</Typography>

        ))}
      </Box>
    </Box>
  );
};

export default Productcard;
