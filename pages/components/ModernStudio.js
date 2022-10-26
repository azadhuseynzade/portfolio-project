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
            md: "row",
          },
          maxWidth: "1150px",
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
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              left: "330px",
              zIndex: "-100",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Image src={StarImg} width={148} height={148} alt="starImg" />
          </Box>

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
              marginLeft: {
                xs: "20px",
              },
            }}
          >
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
          <Box
            sx={{
              display: "flex",
              color: "white",
              paddingTop: "50px",
              marginLeft: {
                xs: "20px",
              },
            }}
          >
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
          <Image src={RightSide} width={700} height={600} alt="rightSide" />
        </Box>
      </Box>
    </Box>
  );
};

export default ModernStudio;
