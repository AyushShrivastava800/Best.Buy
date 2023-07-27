import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CartTable from "./Table";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "../../features/slice/cartSlice";
import { useEffect } from "react";
function Carts() {
  const ProductData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [ProductData.newCart]);

  return (
    <Box>
      <Box className="CartPage">
        <Box className="banner">
          <Box className="bannerImg"></Box>
        </Box>
        <Box className="cartContainer">
          <Container>
            <Box className="mt-30">
              <Typography className="CartHeading">
                Your Cart has {ProductData.amount}{" "}
                {ProductData.amount > 1 ? 'items' : 'item'}
              </Typography>
            </Box>
            <Box className="mt-18 mb-30 cartTable">
              <CartTable ProductData={ProductData.newCart} />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Carts;
