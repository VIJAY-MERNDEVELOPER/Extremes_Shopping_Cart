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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "black",
  borderRadius: 50,
  backgroundColor: "whitesmoke",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "black",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function NavBar() {
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
          <Search sx={{ display: { xs: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>{" "}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              className="nav-icon"
            >
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex" } }}>
            {" "}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              className="nav-icon"
            >
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
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
              <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                Login
              </Typography>
            </IconButton>{" "}
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}

export default NavBar;
