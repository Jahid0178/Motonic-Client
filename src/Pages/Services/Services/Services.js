import React from "react";
import Grid from "@mui/material/Grid";
import Service from "../../Services/Service/Service";
import { Container, Typography } from "@mui/material";
import "./Services.css";

const services = [
  {
    id: 1,
    img: "https://i.ibb.co/tcJ5m7m/turbo.png",
    title: "Engine Repair",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
  {
    id: 2,
    img: "https://i.ibb.co/qxrTLQP/tyre.png",
    title: "Tires Replacement",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
  {
    id: 3,
    img: "https://i.ibb.co/zR85KTT/service.png",
    title: "Transmission",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
  {
    id: 4,
    img: "https://i.ibb.co/pQmWqx2/checklist.png",
    title: "Diagnostic",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
  {
    id: 5,
    img: "https://i.ibb.co/CHJ7Txz/battery.png",
    title: "Batteries",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
  {
    id: 6,
    img: "https://i.ibb.co/FWTjvX2/electricity.png",
    title: "Breaks",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
  },
];

const Services = () => {
  return (
    <div
      style={{
        background: "#f5f5f5",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container sx={{ my: 5 }}>
        <Typography sx={{ textAlign: "center", color: "#ed5217" }}>
          What We Do
        </Typography>
        <Typography
          className="underline"
          variant="h4"
          sx={{ textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Grid container spacing={2} sx={{ my: 4 }}>
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Services;
