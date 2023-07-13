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
    <div className="footer">
      <Grid className="footerContainerBox">
        <Container>
          <Box className="footerContainer">
            <Grid container sx={{ mt: 5 }}>
              <Grid item md={3} sm={6} xs={12}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <RocketLaunchIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Free Shipping</Typography>
                    <Typography className="FaddedText">
                      Orders $50 or more
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <RotateLeftIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Free Returns</Typography>
                    <Typography className="FaddedText">
                      within 30 days
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <ErrorOutlineIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>Get 20% Off 1 Item</Typography>
                    <Typography className="FaddedText">
                      When you sign up
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Box sx={{ color: "#cc9966" }}>
                    <SupportIcon sx={{ fontSize: "xxx-large" }} />
                  </Box>
                  <Box>
                    <Typography>We Support</Typography>
                    <Typography className="FaddedText">
                      24/7 Amazing services
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem color={"#645e5e"} />

            <Grid container sx={{  mb: "30px" }} spacing={2}>
              <Grid item md={3} sm={6} xs={10} >
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
                  <Typography color={"#645e5e"} className="FaddedText">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </Typography>
                  <Box
                    className="mollaIconsBox"
                    sx={{
                      display: { md: "flex", xs: "none" },
                    }}
                    color={"#645e5e"}
                  >
                    <Box className="mollaIcons">
                      <FacebookIcon
                        sx={{ fontSize: "x-large", margin: "8px" }}
                      />
                    </Box>
                    <Box className="mollaIcons">
                      <TwitterIcon
                        sx={{ fontSize: "x-large", margin: "8px" }}
                      />
                    </Box>
                    <Box className="mollaIcons">
                      <InstagramIcon
                        sx={{ fontSize: "x-large", margin: "8px" }}
                      />
                    </Box>
                    <Box className="mollaIcons">
                      <YouTubeIcon
                        sx={{ fontSize: "x-large", margin: "8px" }}
                      />
                    </Box>
                    <Box className="mollaIcons">
                      <PinterestIcon
                        sx={{ fontSize: "x-large", margin: "8px" }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box className="midSectionLinks">
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "700px",
                    }}
                  >
                    Useful Links
                  </Typography>

                  <Typography className="FaddedText">About Molla</Typography>
                  <Typography className="FaddedText">
                    How to shop on Molla
                  </Typography>
                  <Typography className="FaddedText">FAQ</Typography>
                  <Typography className="FaddedText">Contact us</Typography>
                  <Typography className="FaddedText"> log in</Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box className="midSectionLinks">
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "700px",
                    }}
                  >
                    Customer service
                  </Typography>
                  <Typography className="FaddedText">
                    Payment Methods
                  </Typography>
                  <Typography className="FaddedText">
                    MOney-Back guarantee!
                  </Typography>
                  <Typography className="FaddedText">Returns</Typography>
                  <Typography className="FaddedText">Shipping</Typography>
                  <Typography className="FaddedText">
                    {" "}
                    Terms and conditions
                  </Typography>
                  <Typography className="FaddedText">
                    {" "}
                    Privacy Policy
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} sm={6} xs={12}>
                <Box className="midSectionLinks">
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "700px",
                    }}
                  >
                    My Account
                  </Typography>
                  <Typography className="FaddedText">Sign in</Typography>
                  <Typography className="FaddedText">View Cart</Typography>
                  <Typography className="FaddedText">My wishlist</Typography>
                  <Typography className="FaddedText">Track My Order</Typography>
                  <Typography className="FaddedText">Help</Typography>
                </Box>
                <Box
                  className="mollaIconsBox"
                  sx={{
                    display: { md: "none", xs: "flex" },
                  }}
                  color={"#645e5e"}
                >
                  <Box className="mollaIcons">
                    <FacebookIcon sx={{ fontSize: "x-large", margin: "8px" }} />
                  </Box>
                  <Box className="mollaIcons">
                    <TwitterIcon sx={{ fontSize: "x-large", margin: "8px" }} />
                  </Box>
                  <Box className="mollaIcons">
                    <InstagramIcon
                      sx={{ fontSize: "x-large", margin: "8px" }}
                    />
                  </Box>
                  <Box className="mollaIcons">
                    <YouTubeIcon sx={{ fontSize: "x-large", margin: "8px" }} />
                  </Box>
                  <Box className="mollaIcons">
                    <PinterestIcon
                      sx={{ fontSize: "x-large", margin: "8px" }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" flexItem color={"#645e5e"} />

            <Grid container sx={{  mb: "20px" }} className="copyRightsBox">
              <Grid item md={6} xs={12}>
                <Typography className="FaddedText">
                  copyRights @2023 Molla All Rights REserved
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="cardsContainer">
                  <Box className="cards"></Box>
                  <Box className="cards"></Box>
                  <Box className="cards"></Box>
                  <Box className="cards"></Box>
                  <Box className="cards"></Box>
                  <Box className="cards"></Box>
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
