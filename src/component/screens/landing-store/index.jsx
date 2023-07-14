import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Productcard from "../../generic-component/product-card";
import SideProductCard from "../../generic-component/sidebox-product-card";
import { ProductData } from "../../../data/Product";
import { Link } from "react-router-dom";
import ProductDesc from "../ProductDetailsPage/product-description-tabs/ProductDesc";

const LandingStore = () => {
  return (
    <Box className="mt-50 mb-50">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9}>
          <Grid item xs={12}>
            <Typography className="LandingStoreHeading mt-30">
              Recent Arrivals
            </Typography>
          </Grid>
          <Box className="landingProducts mt-30 mb-30">
            <Grid container spacing={1}>
              {ProductData?.map((data, index) => (
                
                <Grid item xs={6} sm={4} key={data.id}>
                  <Link
                  className="landinLinks"
                    to={{
                      pathname: `/products/${data.id}`,
                   
                    }}
                  >
                    <Productcard data={data} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography className="LandingStoreHeading mt-30">
            Best Selling
          </Typography>
          <Box className="landingProducts mt-30 mb-30">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
              <Grid item xs={12}>
                <SideProductCard />
              </Grid>
            </Grid>
          </Box>
          <Typography className="LandingStoreHeading mt-30"></Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingStore;
