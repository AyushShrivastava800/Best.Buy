import React from "react";
import {
  Box,
  InputLabel,
  TextField,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

import InputAdornment from "@mui/material/InputAdornment";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <>
      <Box className="counterContainer">
        <Typography className="qty">Qty:</Typography>
        <Box className="counter">
          <RemoveIcon onClick={handleDecrement} />
          <Typography>{count}</Typography>
          <AddIcon onClick={handleIncrement} />
        </Box>
      </Box>
    </>
  );
}

export default Counter;
