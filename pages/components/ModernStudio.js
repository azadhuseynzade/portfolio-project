import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import MetaImg from "../assets/meta-img.png";
import StarImg from "../assets/Star.png";
import RightSide from "../assets/pic.svg";

const ModernStudio = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#28293E",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#28293E",
          display: "flex",
          justifyContent: "center",
          flexDirection: {
            xs: "column-reverse",
          },
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "16px", color: "#EF6D58;" }} variant="h5">
            Modern Studio
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "40px",
                md: "72px",
              },
              color: "white",
              fontWeight: "900",
            }}
            variant="h1"
          >
            We’re Help
            <br /> To Build Your Dream Project
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.64);",
              marginTop: "20px",
            }}
          >
            Agency provides a full service range including
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.64);" }}
          >
            technical skills, design, business understanding.
          </Typography>
          <Box sx={{ marginTop: "30px" }}>
            <Button
              sx={{
                width: "148px",
                backgroundColor: "#EF6D58",
                fontWeight: "600",
                color: "white",
                padding: "10px 0px",
              }}
            >
              How We Work
            </Button>
            <Button
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                color: "white",
                marginLeft: "30px",
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{ display: "flex", color: "white", paddingTop: "50px" }}>
            <Box>
              <Image src={MetaImg} width={48} height={48} alt="meta-img" />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255, 255, 255, 0.64);" }}
              >
                Put themselves in the merchants shoes
              </Typography>
              <Typography variant="subtitle2">Meta Inc.</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Image src={RightSide} width={640} height={600} alt="rightSide" />
        </Box>
      </Box>
    </Box>
  );
};

export default ModernStudio;
