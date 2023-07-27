import { Box, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { addWishlist } from "../../features/slice/wishSlice";
import { useDispatch } from "react-redux";
const Productcard = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Box className="card">
      <Box
        className="card-img-container"
        sx={{ backgroundImage: `url(${data.image})` }}
      >
        <Box className="card-hover">
          <Box className="like_btn" onClick={() => dispatch(addWishlist(data))}>
            <FavoriteBorderIcon sx={{ color: "#fff" }} />
          </Box>
          <Link
            className="landinLinks"
            to={{
              pathname: `/products/${data.id}`,
            }}
          >
            <Typography className="viewProducts_btn">View Product</Typography>
          </Link>
        </Box>
      </Box>
      <Box className="card-content-container">
        <Typography className="title mt-5">{data.name}</Typography>
        <Typography className="categories">{data.category}</Typography>

        <Typography className="price mt-10">₹ {data.price}</Typography>
      </Box>
    </Box>
  );
};

export default Productcard;
