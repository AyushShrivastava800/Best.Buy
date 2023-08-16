import { Box, Container, Typography } from "@mui/material";
import React from "react";
import PaymentForm from "./stepperform";

function Payment() {
  return (
    <>
      <Box className="paymentPage">
        <Box className="banner">
          <Box className="bannerImg"></Box>
        </Box>
        <Box>
          <Container>
            <Box className="mt-50 ">
              <PaymentForm />
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Payment;
