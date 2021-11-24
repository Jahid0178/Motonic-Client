import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./Service.css";
import { Box } from "@mui/material";

const Service = ({ service }) => {
  const { img, title, desc } = service;
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card
        sx={{ maxWidth: 345, py: 3, textAlign: "center", boxShadow: "none" }}
      >
        <Box className="service-img">
          <CardMedia
            component="img"
            sx={{ width: 50, margin: "auto" }}
            image={img}
            alt={title}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "17px" }}
          >
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
