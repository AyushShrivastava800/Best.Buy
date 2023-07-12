import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,

  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Counter from "./counter/Counter";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Productzoompinch() {
 
  return (
    <>
      <Box>
        <Container>
          <Box className="product-text-box ">
            <Typography variant="h5" className="sandal text-capitalize">
              Sandals cool
            </Typography>
            <Box className="ratingBox mt-10">
              <Rating name="read-only" value={5} size="medium" readOnly />
              <Typography variant="caption" className="review">
                (2 reviews)
              </Typography>
            </Box>

            <Box className="priceBox mt-10">
              <Typography variant="caption" className="discountedPrice mt-10">
                $337.00
              </Typography>
              <Typography variant="caption" className="realPrice mt-10">
                $499.00
              </Typography>
            </Box>
            <Box className="card-desc-lorem-box mt-10">
              <Typography className="card-desc-lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                faucibus arcu et dolor varius iaculis. Curabitur euismod, enim
                sit amet semper eleifend, mi risus mattis ligula, quis egestas
                nibh risus sit amet nunc. In in ornare ipsum. Nulla porttitor
                laoreet magna. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </Typography>
            </Box>
            <Box className="counterBox mt-10">
              <Counter />
            </Box>
            <Box className="button-Box mt-10 ">
              <Button
                variant="outlined"
                className="btn hvr-bounce-to-right"
                startIcon={<AddShoppingCartIcon />}
              >
                ADD TO CART
              </Button>
              <Box variant="text" className="wishList">
                <FavoriteBorderOutlinedIcon className="heartIcon" />
                <Typography className="text-capitalize">
                Add to wishlist
                </Typography>
              </Box>
            </Box>
            <Divider className="mt-30" />
            <Box className="categoryBox mt-30">
              <Typography className="category text-capitalize">
                Category: Boots, Shoes, Women
              </Typography>
            </Box>
            <Box className="shareBox mt-30">
              <Typography className="share text-capitalize">Share:</Typography>
              <Box className="shareBox-icons">
                <Box className="shareIcon">
                  <i class="fa-brands fa-facebook-f  fa-lg " ></i>
                </Box>
                <Box className="shareIcon">
                  <i class="fa-brands fa-pinterest  fa-lg"></i>
                </Box>
                <Box className="shareIcon">
                  <i class="fa-brands fa-instagram  fa-lg"></i>
                </Box>
                <Box className="shareIcon">
                  <i class="fa-brands fa-twitter fa-lg"></i>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Productzoompinch;
