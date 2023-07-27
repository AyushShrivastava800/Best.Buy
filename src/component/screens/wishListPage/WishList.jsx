import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography, Container, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { removeWishItem, clearWishList } from "../../features/slice/wishSlice";
import { addtoCart } from "../../features/slice/cartSlice";
export default function SpanningTable() {
  const { newlist ,amount} = useSelector((store) => store.wishList);
  const dispatch = useDispatch();
  
 
  return (
    <Box>
      <Box className="wishlistPage">
        <Box className="banner">
          <Box className="bannerImg"></Box>
        </Box>

        <Box className="wishContainer">
          <Container>
            <Box className="mt-30">
              <Typography className="wishHeading">
                Your Cart has {amount} items
              </Typography>
            </Box>
            <Box className="mt-30 mb-30 wishTable">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                  <TableHead>
                    <TableRow>
                      <TableCell className="tableHeading">Products</TableCell>
                      <TableCell className="tableHeading">Name</TableCell>
                      <TableCell className="tableHeading">Price</TableCell>
                      <TableCell className="tableHeading" align="center" >
                        Add to Cart
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {newlist?.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell className="productImage">
                          <Box>
                            <img src={row.image} className="productImage" />
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box>
                            <Box className="tableText"> {row.name}</Box>
                            <Box className="tableText">
                              Category : {row.category}
                            </Box>
                            <Box className="tableText">
                              Brand : {row.company}
                            </Box>
                            <Box>
                              <Button
                                variant="text"
                                className="hvr-bounce-to-right Removebtn"
                                onClick={() => dispatch(removeWishItem(row.id))}
                              >
                                Remove
                              </Button>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>
                          <Box>
                            <Button
                              variant="text"
                              className="hvr-bounce-to-right clearbtn"
                              onClick={() => dispatch(addtoCart(row))}
                            >
                            ADD TO CART
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell colSpan={4} align="center">
                        <Box>
                          <Button
                            variant="text"
                            className="hvr-bounce-to-right clearbtn"
                            onClick={() => dispatch(clearWishList())}
                          >
                            Clear Wish List
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
