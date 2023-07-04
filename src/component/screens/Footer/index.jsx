import React from "react";

import { Box, Container } from "@mui/system";
import { Divider, Grid, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SupportIcon from "@mui/icons-material/Support";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div>
      <Grid
        className="footerContainerBox"
        sx={{
          background: "#333333",
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Box
            className="footerContainer"
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              gap:'20px',
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid container  sx={{mt:10}}>
              <Grid item md={3}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <RocketLaunchIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Free Shipping</Typography>
                    <Typography   color={"#645e5e"}>Orders $50 or more</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <RotateLeftIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Free Returns</Typography>
                    <Typography   color={"#645e5e"}>within 30 days</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <ErrorOutlineIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Get 20% Off 1 Item</Typography>
                    <Typography   color={"#645e5e"}>When you sign up</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <SupportIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>We Support</Typography>
                    <Typography   color={"#645e5e"}>24/7 Amazing services</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem color={"#645e5e"}/>

            <Grid container>
              <Grid item md={3}>
                <Box
                  sx={{
              
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Typography sx={{ fontSize: "24px", fontWeight: "700px" }}>
                    Molla
                  </Typography>
                  <Typography color={"#645e5e"}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Typography>
                  <Box sx={{ display: "flex" }} color={"#645e5e"}>
                    <FacebookIcon sx={{ fontSize: "xxx-large" }} />
                    <TwitterIcon sx={{ fontSize: "xxx-large" }} />
                    <InstagramIcon sx={{ fontSize: "xxx-large" }} />
                    <YouTubeIcon sx={{ fontSize: "xxx-large" }} />
                    <PinterestIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box
                color={"#645e5e"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Typography sx={{ color:'white', fontSize: "24px", fontWeight: "700px" }}>
                    Useful Links
                  </Typography>

                  <Typography >About Molla</Typography>
                  <Typography>How to shop on Molla</Typography>
                  <Typography>FAQ</Typography>
                  <Typography>Contact us</Typography>
                  <Typography> log in</Typography>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box
                color={"#645e5e"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <Typography sx={{ color:'white',fontSize: "24px", fontWeight: "700px" }}>
                    Customer service
                  </Typography>
                  <Typography>Payment Methods</Typography>
                  <Typography>MOney-Back guarantee!</Typography>
                  <Typography>Returns</Typography>
                  <Typography>Shipping</Typography>
                  <Typography> Terms and conditions</Typography>
                  <Typography> Privacy Policy</Typography>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box
                color={"#645e5e"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",

                  }}
                >
                  <Typography sx={{color:'white', fontSize: "24px", fontWeight: "700px" }}>
                    My Account
                  </Typography>
                  <Typography>Sign in</Typography>
                  <Typography>View Cart</Typography>
                  <Typography>My wishlist</Typography>
                  <Typography>Track My Order</Typography>
                  <Typography>Help</Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem color={"#645e5e"}/>

            <Grid container sx={{mb:"20px"}}>
              <Grid item md={6}>
                <Typography color={"#645e5e"}>
                  copyRights @2023 Molla All Rights REserved
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Box sx={{
                  display: "flex",
                  gap:"10px",
                  justifyContent: "end",
                  alignItems: "center",
                }}>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                  <Box sx={{width:'50px', height:'30px',background:"red"}}></Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </div>
  );
}

export default Footer;
