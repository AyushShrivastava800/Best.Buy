import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Increase, Decrease } from "../../../../features/slice/cartSlice";
import {
  Box,
  InputLabel,
  TextField,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";

function Counter({ product }) {
  const { newCart } = useSelector((store) => store.cart);

  const cartData = newCart.find((item) => item.id == product.id);
  const cartAmount = cartData ? cartData.amount : 0; 
  console.log(cartData)
  const dispatch = useDispatch();

  return (
    <>
      <Box className="counterContainer">
        <Typography className="qty">Qty:</Typography>
        <Button  disabled={!cartData} variant="text" className="counter">
          <RemoveIcon
         
              onClick={() => {
                if (cartAmount === 1) {
                
                  return;
                }
                dispatch(Decrease(cartData.id));
              }}
          />

          <Typography>{cartAmount}</Typography>

          <AddIcon onClick={() => dispatch(Increase(cartData.id))} disabled={!cartData} />
        </Button>
      </Box>
    </>
  );
}

export default Counter;
