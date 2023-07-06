import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./Product.js";
import Productcard from "../../generic-component/product-card";
import Filter from "./FilterButton";
import "./index.scss";
import SortBy from "./SortBy";
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
const Products = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];
function Store() {
   
  return (
    <div>
      <Box  className="mainStore">
      <Box className='bannerImg'></Box>
        <Box className="store" >
          <Container >
            <Box >
              <Box className="filterBar" >
                <Box className="fsBarbutton">
                  <Filter>Filter</Filter>
                  <SortBy>SortBy</SortBy>
                </Box>
                <Box sx={{display:{md:'none', sm:'flex'}}}>
                <ViewWeekIcon sx={{fontSize:'30px' }}
     
                
                />
                </Box>
              </Box>
              <Grid container sx={{mt:5,mb:5}}>
                <Grid item md={3} className="filterSidebar" sx={{display:{md:'flex', sm:'none'}}}>
                <Typography>daawd</Typography>
                <Typography>daawd</Typography>
                <Typography>daawd</Typography>
                </Grid>
                <Grid item md={9} sm={12} >
                  <Grid container spacing={1} className="productsGrid">
                    {Products.map((e) => (
                      <Grid item md={3}  key={e.id}>
                        <Productcard />
                      </Grid>
                    ))}
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
