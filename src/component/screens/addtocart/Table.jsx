import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Button, Divider, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import {
  clearCart,
  removeItem,
  Increase,
  Decrease,
} from "../../features/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartTable({ ProductData }) {
  const { total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/store");
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHeading">Cart Items</TableCell>
            <TableCell className="tableHeading"></TableCell>

            <TableCell className="tableHeading " align="right">
              Unit price
            </TableCell>
            <TableCell className="tableHeading " align="right">
              Qty
            </TableCell>
            <TableCell className="tableHeading " align="right">
              Sub Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProductData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Box>
                  <img src={row.image} className="productImage" />
                </Box>
              </TableCell>
              <TableCell>
                <Box>
                  <Box className="tableText"> {row.name}</Box>
                  <Box className="tableText">Category : {row.category}</Box>
                  <Box className="tableText">Brand : {row.company}</Box>
                  <Box>
                    <Button
                      variant="text"
                      className="hvr-bounce-to-right Removebtn"
                      onClick={() => dispatch(removeItem(row.id))}
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              </TableCell>

              <TableCell align="right" className="tableText ">
                {row.price}
              </TableCell>
              <TableCell align="right" className="tableText ">
                <Box className="product-counter">
                  <Box>
                    <Typography
                      className="p-decrement"
                      variant="h4"
                      onClick={() => {
                        if (row.amount === 1) {
                          dispatch(removeItem(row.id));
                          return;
                        }
                        dispatch(Decrease(row.id));
                      }}
                    >
                      {"<"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography className="p-count-icon">
                      {row.amount}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      className="p-increment"
                      variant="h4"
                      onClick={() => dispatch(Increase(row.id))}
                    >
                      {">"}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>

              <TableCell align="right" className="tableText ">
                {row.subtotal.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={4} colSpan={2} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{total.toFixed(2)}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">7%</TableCell>
            <TableCell align="right">{(0.07 * total).toFixed(2)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="tableHeading">
              Grand Total
            </TableCell>
            <TableCell align="right" className="tableHeading">
              {(0.07 * total + total).toFixed(2)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              <Link to={{ pathname: `/payment` }} className="paymentbtn">
                <Button
                  variant="outlined"
                  className="proceedbtn mb-10 hvr-bounce-to-left"
                
                >
                  proceed to payment
                </Button>
              </Link>
                <Divider>OR</Divider>

              <Button
                onClick={routeChange}
                variant="outlined"
                className="Continuebtn hvr-bounce-to-right mt-10"
              >
                Continue Shopping
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
