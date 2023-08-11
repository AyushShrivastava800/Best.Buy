import { Box, Container, Grid, Divider, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../../../assets/logos/logo.png";
import logoDark from "../../../assets/logos/logo-dark.png";
import { navLinks } from "../../../constant";
import { json, NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import classNames from "classnames";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { loggedUser,LogOut } from "../../features/slice/FormSlice";
import { useSelector, useDispatch } from "react-redux";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const dataUser = useSelector((state) => state.users.Users);



  const dispatch=useDispatch();
  const ProductData = useSelector((state) => state.cart);
  const { amount } = useSelector((state) => state.wishList);

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
                    <Badge badgeContent={amount}>
                      <Link to={{ pathname: `/wishlist` }}>
                        <FavoriteBorderOutlinedIcon className="cartIcon" />
                      </Link>
                    </Badge>
                  </Box>
                  <Box className="navIcon">
                    {dataUser? (
                     
                      <Link onClick={()=>dispatch(LogOut())} >
                        <LogoutIcon className="cartIcon" />
                      </Link>
               
                    ) : (
                      <Link to={{ pathname: `/login` }}>
                        <LoginIcon className="cartIcon" />
                      </Link>
                    )}
                    
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
