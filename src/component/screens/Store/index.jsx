import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { Box, Container } from "@mui/system";
import Productcard from "../../generic-component/product-card";

import SortBy from "./storeSortby/SortBy";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./storesidebar/SideBar.jsx";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import TopBanner from "../../generic-component/TopBannner";
import { useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { useState } from "react";
function Store() {
  const { productSort } = useSelector((store) => store.filterSort);
  const [pageApi, setPageApi] = useState(1);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const itemsPerPage = 8; 
  const pageCount = Math.ceil(productSort.length / itemsPerPage);
  const startIndex = (pageApi - 1) * itemsPerPage;
  const displayedProducts = productSort.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div>
      <Box className="mainStore">
        <Box>
          <TopBanner />
        </Box>
        <Box className="store">
          <Container>
            <Box>
              <Box className="filterBar">
                <Box>
                  <SortBy />
                </Box>

                <Box sx={{ display: { md: "none", sm: "flex" } }}>
                  {["right"].map((anchor) => (
                    <Box key={anchor}>
                      <MenuIcon
                        sx={{ fontSize: "30px" }}
                        onClick={toggleDrawer(anchor, true)}
                      />
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        <Box sx={{ mt: 5, p: 4, textAlign: "end" }}>
                          <CloseIcon
                            sx={{ fontSize: "30px" }}
                            onClick={toggleDrawer(anchor, false)}
                          />
                        </Box>
                        <Box sx={{ width: 300, p: 2 }}>
                          <SideBar />
                        </Box>
                      </Drawer>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className="showProductstxt">
                <Typography>Showing all The Produts In Our Store</Typography>
              </Box>

              <Grid container spacing={2} sx={{ mt: 5, mb: 5 }}>
                <Grid item md={3} sx={{ display: { md: "flex", xs: "none" } }}>
                  <Box className="filterSidebar">
                    <SideBar />
                  </Box>
                </Grid>
                <Grid item md={9} sm={12}>
                  <Grid container spacing={1} className="productsGrid">
                    {displayedProducts.map((data, index) => (
                      <Grid item md={3} sm={4} xs={6} key={data.id}>
                        <Productcard data={data} />
                      </Grid>
                    ))}
                    <Grid item xs={12}>
                      <Box className="pagination"> 
                      <Pagination
                        count={pageCount}
                        onChange={(e, value) => setPageApi(value)}
                      />

                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
export default Store;
