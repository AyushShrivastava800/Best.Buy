import { Box, Container, Grid, Divider, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logos/logo.png";
import logoDark from "../../../assets/logos/logo-dark.png";
import { navLinks } from "../../../constant";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classNames from "classnames";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const ProductData = useSelector((state) => state.cart);

  const [isScrolled, setIsScrolled] = useState(false);
  const Mobilematches = useMediaQuery("(max-width: 600px)");
  const Tabletmatches = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;

      setIsScrolled(scrollPosition > pageHeight / 9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box className={classNames("header", { scrolled: isScrolled })}>
      <Grid container>
        <Grid item xs={12}>
          <Container>
            <Grid container spacing={2}>
              <Grid item md={5} sm={4} xs={8}>
                <Box className="navigationContainer">
                  <Box className="navigationList">
                    {Tabletmatches ? (
                      <MenuOutlinedIcon sx={{ color: "#fff" }} />
                    ) : (
                      <>
                        {navLinks.map(({ path, title }, index) => (
                          <NavLink
                            key={index}
                            to={path}
                            activeClassName="selected"
                            className="navigationLinks"
                          >
                            {title}
                          </NavLink>
                        ))}
                      </>
                    )}
                  </Box>
                </Box>
              </Grid>
              {!Mobilematches ? (
                <Grid item md={2} sm={4}>
                  <Box className="logoContainer">
                    <img
                      src={isScrolled ? logoDark : logo}
                      className="logo"
                      alt="Header-logo-corporate"
                    />
                  </Box>
                </Grid>
              ) : (
                ""
              )}
              <Grid item md={5} sm={4} xs={4}>
                <Box className="iconNavigationContainer">
                  <Box className="navIcon">
                    <Badge badgeContent={ProductData.amount}>
                      <Link to={{ pathname: `/carts` }}>
                        <LocalMallOutlinedIcon className="cartIcon" />
                      </Link>
                    </Badge>
                  </Box>
                  <Box className="navIcon">
                    <Badge badgeContent={0}>
                      <FavoriteBorderOutlinedIcon />
                    </Badge>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {!isScrolled && <Divider className="divider" />}
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
