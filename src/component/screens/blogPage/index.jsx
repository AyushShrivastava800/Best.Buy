import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import img2 from "../../../assets/images/p-7.jpg";
import img3 from "../../../assets/images/homeBg.jpg";
import img4 from "../../../assets/images/p-2.jpg";
import { ItemData } from "./ImagesCollection";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlogCarousel from "../../generic-component/blogCarosel/BlogCarousel";
import Tooltip from "@mui/material/Tooltip";
const theme = createTheme({
  palette: {
    primary: {
      main: "#cc9966",
    },
    // secondary: {
    //   // This is green.A700 as hex.
    //   // main: '#11cb5f',
    // },
  },
});

function index() {
  return (
    <Box>
      <Box className="blogPage">
        <div className="banner">
          <Box className="bannerImg"></Box>
        </div>
        <Box className="blogContentsContainer mt-50">
          <Container>
            <Grid container spacing={4}>
              <Grid item sm={12} md={8}>
                <Box className="blogImg1Container">
                  <Box className="blogImg1"></Box>
                </Box>
                <Box className="AvatarLine mt-18">
                  <Avatar
                    className="Avatar"
                    alt="Remy Sharp"
                    src={img2}
                    sx={{ width: 56, height: 56 }}
                  />

                  <Box className="_flexes">
                    <Tooltip title="Admin" className="toolTips">
                      <PersonIcon className="flexesIcon" />
                    </Tooltip>
                    <PersonIcon className="flexesIcon hideIcon" />

                    <Typography className="flexesTxt">by Admin</Typography>
                  </Box>
                  <Box className="_flexes">
                    <Tooltip title="12 july 2023" className="toolTips">
                      <AccessTimeIcon className="flexesIcon" />
                    </Tooltip>
                    <AccessTimeIcon className="flexesIcon hideIcon" />

                    <Typography className="flexesTxt grey-text">
                      12 july 2023
                    </Typography>
                  </Box>
                  <Box className="_flexes">
                    <Tooltip title="Comments" className="toolTips">
                      <ForumRoundedIcon className="flexesIcon" />
                    </Tooltip>
                    <ForumRoundedIcon className="flexesIcon hideIcon" />

                    <Typography className="flexesTxt">3 comments</Typography>
                  </Box>
                </Box>
                <Box className="mt-30 blogContents">
                  <Typography className="blogHeading">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </Typography>

                  <Typography className="mt-18 blogHeadContents">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                  <Typography className="blogHeadContents mt-18 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                  <Typography className="mt-18 blogHeadContents">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                </Box>
                <Box>
                  <Box className="quoteContainer mt-18">
                    <Container>
                      <i class="fa-solid fa-quote-left"></i>
                      <Typography className="quote">
                        “We need to be willing to accept our feelings around an
                        event in order to fully gain the benefits, which are
                        available from it.”benefits, which are available from
                        it.
                      </Typography>
                      <Typography className="authorName mt-10">
                        -someone
                      </Typography>
                    </Container>
                  </Box>
                </Box>
                <Box>
                  <Typography className="randomContent mt-50">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                </Box>

                <Box className="mt-30 blogContents">
                  <Typography className="blogHeading">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </Typography>
                  <Typography className="mt-18 blogHeadContents">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                  <Box className="mt-18  imgTextFlex">
                    <Grid container spacing={4}>
                      <Grid item xs={12} sm={6}>
                        <img src={img3} className="imgTextFlex_img"></img>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography className="blogHeadContents">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown industry's standard dummy text ever
                          since the 1500s, when an unknown industry's standard
                          dummy text ever since the 1500s, when an unknown
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Typography className="mt-18 blogHeadContents">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                  </Typography>
                </Box>
                <Box className="shareContainer mt-30">
                  <Typography className="shareText">
                    Share This Post :
                  </Typography>
                  <Box className="iconContainer">
                    <Box className="iconBox">
                      <i class="fa-brands fa-facebook icons"></i>
                    </Box>
                    <Box className="iconBox">
                      <i class="fa-brands fa-twitter icons"></i>
                    </Box>
                    <Box className="iconBox">
                      <i class="fa-brands fa-pinterest icons"></i>
                    </Box>
                  </Box>
                </Box>
                <Box className="commentsContainer mt-30 ">
                  <Typography className="commentsText">Comments</Typography>
                  <Box className="mt-18 ">
                    <Box className="commentFlex">
                      <Avatar
                        alt="Remy Sharp"
                        src={img2}
                        sx={{ width: 80, height: 80 }}
                      />

                      <Box className="commentBox">
                        <Box className="commentBoxContent">
                          <Typography className="commenterName">
                            Harold
                          </Typography>
                          <Typography className="commentDate ">
                            12 july 2023
                          </Typography>
                          <Typography className="commenterComment mt-10">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="mt-18 ">
                    <Box className="commentFlex">
                      <Avatar
                        alt="Remy Sharp"
                        src={img2}
                        sx={{ width: 80, height: 80 }}
                      />

                      <Box className="commentBox">
                        <Box className="commentBoxContent">
                          <Typography className="commenterName">
                            Harold
                          </Typography>
                          <Typography className="commentDate ">
                            12 july 2023
                          </Typography>
                          <Typography className="commenterComment mt-10">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box class="replyContainer mt-30">
                  <Box className="replyheading">Leave a reply</Box>
                  <Box className="replyFormContainer mt-18">
                    <ThemeProvider theme={theme}>
                      <Box className="fieldBox">
                        <TextField
                          className="outlined-basic"
                          fullWidth
                          label="Your Name*"
                        />
                        <TextField
                          className="outlined-basic"
                          fullWidth
                          label="Email*"
                        />
                      </Box>
                      <Box>
                        <TextField
                          multiline={true}
                          rows={6}
                          className="outlined-basic messageBox"
                          label="Your Message"
                        />
                      </Box>
                    </ThemeProvider>
                    <Box className="postCommentBtnBox mt-10 mb-18">
                      <Button
                        className="postCommentBtn hvr-bounce-to-right"
                        variant="outlined"
                        endIcon={<i class="fa-solid fa-arrow-right"></i>}
                      >
                        Post Comment
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={12} md={4}>
                <Box className="categoriesContainer ">
                  <Box className="mt-18">
                    <Typography className="categoriesText">
                      Categories
                    </Typography>
                  </Box>
                  <Box className="categoriesLinksBox mt-30">
                    <Box className="linkFlex">
                      <i className="fas fa-angle-double-right"></i>
                      <Typography className="linkText">Bussiness</Typography>
                    </Box>
                    <Typography className="linkNumber">4</Typography>
                  </Box>
                  <Box className="categoriesLinksBox ">
                    <Box className="linkFlex">
                      <i className="fas fa-angle-double-right"></i>
                      <Typography className="linkText">Marketing</Typography>
                    </Box>
                    <Typography className="linkNumber">8</Typography>
                  </Box>
                  <Box className="categoriesLinksBox ">
                    <Box className="linkFlex">
                      <i className="fas fa-angle-double-right"></i>
                      <Typography className="linkText">Fashion</Typography>
                    </Box>
                    <Typography className="linkNumber">6</Typography>
                  </Box>
                  <Box className="categoriesLinksBox mb-18">
                    <Box className="linkFlex">
                      <i className="fas fa-angle-double-right"></i>
                      <Typography className="linkText">Clothing</Typography>
                    </Box>
                    <Typography className="linkNumber">5</Typography>
                  </Box>
                </Box>
                <Box className="galleyContainer mt-30 mb-30">
                  <Box>
                    <Typography className="galleyHeading mt-18">
                      Gallery
                    </Typography>
                  </Box>
                  <Box className="mt-10">
                    <ImageList
                      sx={{ width: "100%", height: "auto" }}
                      cols={3}
                      rowHeight={"auto"}
                      gap={"10px"}
                    >
                      {ItemData.map((item) => (
                        <ImageListItem key={item.img} rows={2}>
                          <img
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                </Box>
                <Box className="advertiseMentContainer mt-30 mb-50">
                  <Box>
                    <Typography className="advertiseMentHeading mt-18 ">
                      Advertisement
                    </Typography>
                  </Box>

                  <Box>
                    <img src={img4} className="advertiseImage mt-18" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box className="pcarousel mb-50 mt-50">
              <BlogCarousel />
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default index;
