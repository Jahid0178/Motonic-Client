import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Service = ({ service }) => {
  const { img, title, desc } = service;
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Card sx={{ maxWidth: 345, py: 3, textAlign: "center" }}>
        <CardMedia
          component="img"
          sx={{ width: 50, margin: "auto" }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
