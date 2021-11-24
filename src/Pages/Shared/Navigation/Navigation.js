import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../../Images/Home/logo.png";

const Navigation = () => {
  return (
    <Box position="sticky" sx={{ flexGrow: 1, top: 0, zIndex: 999 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="" width="150" />
          </Box>

          <Box>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
