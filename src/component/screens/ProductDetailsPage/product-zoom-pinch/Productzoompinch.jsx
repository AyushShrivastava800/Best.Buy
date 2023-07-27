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
import { addtoCart } from "../../../features/slice/cartSlice";
import {addWishlist} from "../../../features/slice/wishSlice"
import { useDispatch } from "react-redux";
function Productzoompinch({product}) {
  const dispatch=useDispatch();

  const handleAddToCart = () => {
    dispatch(addtoCart(product));
  };
  const handleAddToWishList = () => {
    dispatch(addWishlist(product));
  };
  return (
    <>
      <Box>
        <Container>
          <Box className="product-text-box ">
            <Typography variant="h5" className="sandal text-capitalize">
                {product.name}
              </Typography> 
              {product.Rating.map((items)=>(
                <Box className="ratingBox mt-10">
                  <Rating name="read-only" value={items.stars} size="medium" readOnly />
                  <Typography variant="caption" className="review">
                    ({items.reviews}    reviews)
                  </Typography>
                </Box>
                ))}

             
                  <Box className="priceBox mt-10">
                    <Typography variant="caption" className="discountedPrice mt-10">
                    ₹ {product.price}
                    </Typography>
                    <Typography variant="caption" className="realPrice mt-10">
                    ₹ {product.oldPrice}
                    </Typography>
                  </Box>
               
            
            <Box className="card-desc-lorem-box mt-10">
              <Typography className="card-desc-lorem">
             {product.text}
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
                onClick={handleAddToCart}
              >
                ADD TO CART
              </Button>
              <Box variant="text" className="wishList">
                <FavoriteBorderOutlinedIcon className="heartIcon" />
                <Typography className="text-capitalize"
                 onClick={handleAddToWishList}
                 >
                Add to wishlist
                </Typography>
              </Box>
            </Box>
            <Divider className="mt-30" />
            <Box className="categoryBox mt-30">
              <Typography className="category text-capitalize">
              category:  {product.category}
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
