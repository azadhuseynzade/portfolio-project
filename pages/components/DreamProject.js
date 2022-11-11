import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import MetaImg from "../assets/meta-img.png";
import RightSide from "../assets/dreamPiccc.svg";

const DreamProject = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        paddingTop: "60px",
        paddingBottom: "40px",
      }}
    >
      <Box
        sx={{
          backgroundColor: " #EF6D58",
          display: "flex",
          justifyContent: "center",
          padding: { xs: "30px 0px", md: "64px 50px 80px 90px" },

          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ position: "relative", zIndex: "50" }}>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#EF6D58;",

              paddingLeft: {
                xs: "20px",
              },
            }}
            variant="h5"
          >
            Modern Studio
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "45px",
                md: "72px",
              },
              padding: {
                xs: "0px 0px 0px 20px",
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
              padding: {
                xs: "0px 20px",
              },
            }}
          >
            Agency provides a full service range including
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(255, 255, 255, 0.64);",
              padding: {
                xs: "0px 20px",
              },
            }}
          >
            technical skills, design, business understanding.
          </Typography>
          <Box
            sx={{
              marginTop: "30px",
            }}
          >
            <Button
              sx={{
                fontSize: "12px",
                fontWeight: "800",
                color: "#391400",
                backgroundColor: "white",
                marginLeft: "30px",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        <Box>
          <Image src={RightSide} width={700} height={600} alt="rightSide" />
        </Box>
      </Box>
    </Box>
  );
};

export default DreamProject;
