import { Container, Box, Grid, Typography } from "@mui/material";
import React from "react";
import FooterLogo from "../../../Images/Home/logo.png";
import FooterImgOne from "../../../Images/Footer/footerImg1.jpg";
import FooterImgTwo from "../../../Images/Footer/footerImg2.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ mt: 10, p: 10, backgroundColor: "#fdf3ed" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={3}>
            <img src={FooterLogo} alt="" style={{ width: 200 }} />
            <Typography sx={{ my: 3 }}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever.
            </Typography>
            <Link to="#" style={{ color: "#444" }}>
              <FacebookOutlinedIcon sx={{ mr: 2 }} />
            </Link>
            <Link to="#" style={{ color: "#444" }}>
              <TwitterIcon sx={{ mr: 2 }} />
            </Link>
            <Link to="#" style={{ color: "#444" }}>
              <InstagramIcon />
            </Link>
          </Grid>
          <Grid xs={12} sm={12} md={3} sx={{ px: 2 }}>
            <Typography
              className="footer-header"
              variant="h5"
              sx={{ mb: 2, fontWeight: "bold" }}
            >
              Recent Post
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid xs={12} sm={12} md={12} sx={{ my: 2 }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={FooterImgOne}
                    alt=""
                    style={{ width: 80, borderRadius: "5px" }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography>
                      Most Important <br /> Issue For Your Car
                    </Typography>
                    <Typography sx={{ color: "#ed5217" }}>
                      18 Dec 2021
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={12}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={FooterImgTwo}
                    alt=""
                    style={{ width: 80, borderRadius: "5px" }}
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography>
                      Most Important <br /> Issue For Your Car
                    </Typography>
                    <Typography sx={{ color: "#ed5217" }}>
                      18 Dec 2021
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <Typography
              className="footer-header"
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Address
            </Typography>
            <Typography sx={{ mt: 2 }}>Head Office Address</Typography>
            <Typography sx={{ my: 2 }}>
              121 King Street, Melbourne West, Australia
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <span style={{ color: "#ed5217" }}>Phone: </span>888 123-4587
            </Typography>
            <Typography>
              <span style={{ color: "#ed5217" }}>Email: </span>info@example.com
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={3}>
            <Typography
              className="footer-header"
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Services
            </Typography>
            <ul>
              <li style={{ marginBottom: "5px" }}>
                <Typography>Engine Repairs</Typography>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <Typography>Tire Replacement</Typography>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <Typography>Transmission</Typography>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <Typography>Diagnostic</Typography>
              </li>
              <li style={{ marginBottom: "5px" }}>
                <Typography>Batteries</Typography>
              </li>
              <li>
                <Typography>Break Repair</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
