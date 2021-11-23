import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import AboutImg from "../../../Images/Home/about-pic.png";
import "./About.css";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const About = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={6}>
          <img src={AboutImg} alt="" style={{ width: "80%" }} />
        </Grid>
        <Grid xs={12} sm={12} md={6} style={alignment}>
          <Box>
            <Typography sx={{ mb: 1, color: "#ed5217" }}>
              About Our Company
            </Typography>
            <Typography className="about-small-header" variant="h4">
              How We Can Help you
            </Typography>
            <Typography sx={{ my: 4 }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there.
            </Typography>
            <Typography>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary anything embarrassing hidden in
              the.
            </Typography>
            <Button variant="contained" sx={{ mt: 5 }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
