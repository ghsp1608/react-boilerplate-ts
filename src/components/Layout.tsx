import { Box, Container, CssBaseline } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: "#fff", height: "30vh" }} />
        <Navbar />
        <Outlet />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
