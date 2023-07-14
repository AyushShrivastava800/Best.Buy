import React from "react";
import { Box, Container, Grid, Hidden, Paper, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import TabPanel from "@mui/lab/TabPanel";
import { ListItem } from "@mui/material";
function ProductDesc({ product }) {
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
          mt: "50px",
          mb:"30px",
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
                {product.Description.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsOne}
                    </Typography>
                  </Box>
                ))}
                {product.DescriptionDetailsList.map((items) => (
                  <Box className="list-box">
                    <ListItem className="list-items">
                    {items.listItemOne}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemTwo}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemThree}
                    </ListItem>
                  </Box>
                ))}
                {product.Description.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsTwo}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TabPanel>

            <TabPanel value="2" >
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">
                    Additional Information
                  </Typography>
                </Box>
                {product.AdditionalInfo.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsOne}
                    </Typography>
                  </Box>
                ))}
                {product.DescriptionDetailsList.map((items) => (
                  <Box className="list-box">
                    <ListItem className="list-items">
                    {items.listItemOne}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemTwo}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemThree}
                    </ListItem>
                  </Box>
                ))}
                {product.AdditionalInfo.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsTwo}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TabPanel>

            <TabPanel value="3" >
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">
                    Shipping & returns
                  </Typography>
                </Box>
                {product.ShoppingPolicy.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsOne}
                    </Typography>
                  </Box>
                ))}
                {product.DescriptionDetailsList.map((items) => (
                  <Box className="list-box">
                    <ListItem className="list-items">
                    {items.listItemOne}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemTwo}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemThree}
                    </ListItem>
                  </Box>
                ))}
                {product.ShoppingPolicy.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsTwo}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel value="4" >
              <Box className="tabs1">
                <Box>
                  <Typography className="desc-head">Reviews</Typography>
                </Box>
                {product.Reviews.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsOne}
                    </Typography>
                  </Box>
                ))}
                {product.DescriptionDetailsList.map((items) => (
                  <Box className="list-box">
                    <ListItem className="list-items">
                    {items.listItemOne}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemTwo}
                    </ListItem>
                    <ListItem className="list-items">
                    {items.listItemThree}
                    </ListItem>
                  </Box>
                ))}
                {product.Reviews.map((items) => (
                  <Box>
                    <Typography className="desc-para">
                      {items.DetailsTwo}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </TabPanel>
          </Paper>
        </TabContext>
      </Box>
    </>
  );
}

export default ProductDesc;
