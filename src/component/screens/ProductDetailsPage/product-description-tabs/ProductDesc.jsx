import React from "react";
import { Box, Container, Grid, Hidden, Paper, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import { ListItem } from "@mui/material";
function ProductDesc() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          width: "100%",
          typography: "body1",
          mt: "4rem",
        }}
      >
        <TabContext value={value}>
          <Box>

          <TabList
            className="tabs-box"
            onChange={handleChange}
            aria-label="scrollable force tabs example"
            sx={{
              ".Mui-selected": {
                color: "#cc9966 !important",
              },
              "& .MuiTabs-flexContainer": {
                justifyContent: "center",
                
              },
            }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#cc9966",
              },
            }}
          >
            <Tab
            
              className="tabsbutton"
              label="Description"
              value="1"
              wrapped
            />
            <Tab
              className="tabsbutton"
              label="Additional information"
              value="2"
              wrapped
            />
            <Tab
              className="tabsbutton"
              label="shoppimg & Returns"
              value="3"
              wrapped
            />
            <Tab
              className="tabsbutton"
              label="Reviews(2)"
              value="4"
              wrapped
            />
          </TabList>

          </Box>

          <Paper elevation={3} className="tabs-desc-paper">
            <TabPanel value="1">
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">
                    Product Information
                  </Typography>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
                <Box className="list-box">
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Your search may have been removed or is not yet in the
                    system
                  </ListItem>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value="2" className="tabs2">
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">
                    Additional Information
                  </Typography>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
                <Box className="list-box">
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Your search may have been removed or is not yet in the
                    system
                  </ListItem>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
              </Box>
            </TabPanel>

            <TabPanel value="3" className="tabs3">
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">
                    Shipping & returns
                  </Typography>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
                <Box className="list-box">
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Your search may have been removed or is not yet in the
                    system
                  </ListItem>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="4" className="tabs3">
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">Reviews</Typography>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
                <Box className="list-box">
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Double check your spelling
                  </ListItem>
                  <ListItem className="list-items">
                    Your search may have been removed or is not yet in the
                    system
                  </ListItem>
                </Box>
                <Box>
                  <Typography className="desc-para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </Typography>
                </Box>
              </Box>
            </TabPanel>
          </Paper>
        </TabContext>
      </Box>
    </>
  );
}

export default ProductDesc;
