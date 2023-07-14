import React from "react";
import { Box, Container, Grid, Hidden, Paper, Typography } from "@mui/material";
import TopBanner from "../../generic-component/TopBannner";

import ProductCarousel from "../../generic-component/productCarousel/ProductCarousel";

import ProductDesc from "./product-description-tabs/ProductDesc";
import Productzoompinch from "./product-zoom-pinch/Productzoompinch";
import ProductZoomslider from "./product-zoom-pinch/productZoomSlider/ProductzoomSlider";
import { useParams } from "react-router-dom";
import { ProductData } from "../../../data/Product";
function ProductDetailsPage() {
  const {id} = useParams();

const product=ProductData.find((product)=>product.id==id)


  return (
    <Box className="ProductDetailsPage">
      <Box>
        <TopBanner />
      </Box>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={12} className="product-zoom-pinch">
              <Grid container className="mt-18">
                <Grid item xs={12} sm={12} md={6}>
                  <ProductZoomslider product={product} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Productzoompinch  product={product} />

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="product-description-tabs">
              <ProductDesc  product={product}  />
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
              className="product-carousel"
              sx={{ mb: "2rem" }}
            >
              <ProductCarousel />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
