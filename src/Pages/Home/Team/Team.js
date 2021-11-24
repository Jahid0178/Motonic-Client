import { Container, Typography, Grid, Paper } from "@mui/material";
import React from "react";
import PersonOne from "../../../Images/Person/img-1.jpg";
import PersonTwo from "../../../Images/Person/img-2.jpg";
import PersonThree from "../../../Images/Person/img-3.jpg";
import PersonFour from "../../../Images/Person/img-4.jpg";
import "./Team.css";

const Team = () => {
  return (
    <Container>
      <Typography sx={{ textAlign: "center", color: "#ed5217" }}>
        Meet Our Expertise
      </Typography>
      <Typography
        className="header-underline"
        variant="h4"
        sx={{ textAlign: "center", color: "#444" }}
      >
        Our Awesome Team
      </Typography>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper elevation={0} className="card-body">
            <img src={PersonOne} alt="" style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper elevation={0} className="card-body">
            <img src={PersonTwo} alt="" style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper elevation={0} className="card-body">
            <img src={PersonThree} alt="" style={{ width: "100%" }} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <Paper elevation={0} className="card-body">
            <img src={PersonFour} alt="" style={{ width: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Team;
