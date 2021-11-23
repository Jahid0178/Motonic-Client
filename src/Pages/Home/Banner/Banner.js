import { Container, Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import BannerBg from "../../../Images/Home/hero-image-1.png";
import "./Banner.css";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Box className="banner">
      <Container>
        <Box>
          <Grid container spacing={2} style={alignment}>
            <Grid item xs={12} sm={12} md={5}>
              <Typography variant="h3">
                We Ensure Your Safe & Happy Journey
              </Typography>
              <Typography sx={{ my: 4 }}>
                We also offer cost-friendly repairs so you won’t need to spend a
                lot to get your vehicle back on the road.Repair services to his
                fellow . We know how valuable your time and money.
              </Typography>
              <Button variant="contained">Learn More</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <img src={BannerBg} alt="" style={{ width: "100%" }}></img>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
