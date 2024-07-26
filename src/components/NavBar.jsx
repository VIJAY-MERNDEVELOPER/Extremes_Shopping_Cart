/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "./styles/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer, Grid } from "@mui/material";
import SideBar from "./SideBar";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";



function NavBar({ setIsLoggedIn, isLoggedIn }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [cart, setCart] = useState(0);
  const fetchCart = async () => {
    try {
      const res = await axios.get("/cart", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setCart(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  //   const renderMobileMenu = (
  //     <Menu
  //       anchorEl={mobileMoreAnchorEl}
  //       anchorOrigin={{
  //         vertical: "top",
  //         horizontal: "right",
  //       }}
  //       id={mobileMenuId}
  //       keepMounted
  //       transformOrigin={{
  //         vertical: "top",
  //         horizontal: "right",
  //       }}
  //       open={isMobileMenuOpen}
  //       onClose={handleMobileMenuClose}
  //     >
  //       <MenuItem>
  //         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //           <Badge badgeContent={4} color="error">
  //             <MailIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Messages</p>
  //       </MenuItem>
  //       <MenuItem>
  //         <IconButton
  //           size="large"
  //           aria-label="show 17 new notifications"
  //           color="inherit"
  //         >
  //           <Badge badgeContent={17} color="error">
  //             <NotificationsIcon />
  //           </Badge>
  //         </IconButton>
  //         <p>Notifications</p>
  //       </MenuItem>
  //       <MenuItem onClick={handleProfileMenuOpen}>
  //         <IconButton
  //           size="large"
  //           aria-label="account of current user"
  //           aria-controls="primary-search-account-menu"
  //           aria-haspopup="true"
  //           color="inherit"
  //         >
  //           <AccountCircle />
  //         </IconButton>
  //         <p>Profile</p>
  //       </MenuItem>
  //     </Menu>
  //   );

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }} className="nav-container">
      <AppBar
        position="static"
        style={{ backgroundColor: "#FF0000", padding: "10px", paddingLeft: 0 }}
      >
        <Toolbar>
          <IconButton
            size="larger"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ m: 0, pl: 0, left: 0 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon style={{ width: 30 }} />
          </IconButton>{" "}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <SideBar />
          </Drawer>
          <Grid>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Shop Now
            </Typography>{" "}
          </Grid>
          <Grid className="logo ">
            <img src="/extremes-logo.png" width="205px" />
          </Grid>{" "}
          <Box sx={{ display: { xs: "flex" } }}>
            {" "}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className="nav-icon"
            >
              <Link to={"/cart"}>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartIcon style={{ color: "rgb(255,255,255)" }} />
                </Badge>
              </Link>
            </IconButton>{" "}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className="nav-icon"
            >
              <AccountCircle />
            </IconButton>{" "}
          </Box>{" "}
          <Typography
            sx={{ display: { xs: "none", sm: "block", marginLeft: "10px" } }}
          >
            <NavLink
              to={"/login"}
              style={{ textDecoration: "none", color: "white" }}
            >
              {isLoggedIn === true ? "Logged In" : "Login"}
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
