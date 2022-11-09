import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import FounderImage from "../assets/founderImage.jpg";
import StringImage from "../assets/stringImage.svg";
const FounderWords = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#28293E",
        paddingTop: "150px",
        paddingBottom: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-around" },
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            borderRadius: "6px",
            maxWidth: "470px",
            margin: { xs: "0px 20px", md: "0px" },
          }}
        >
          <Image src={FounderImage} alt="founderImage" />
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "10",
            margin: { xs: "0px 20px", md: "0px" },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EF6D58",
              marginTop: "35px",
              fontSize: "16px",
            }}
          >
            Founder Words
          </Typography>
          <Box
            sx={{
              position: "absolute",
              zIndex: "-20",
              right: "20px",
              top: "40px",
            }}
          >
            <Image
              src={StringImage}
              alt="StringImage"
              width={100}
              height={80}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              color: "#EF6D58",
              fontSize: { xs: "24px", md: "38px" },
              fontWeight: "800",
              color: "white",
              marginTop: "25px",
            }}
          >
            Digital agency is a
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#EF6D58",
              fontSize: { xs: "24px", md: "38px" },
              fontWeight: "800",
              color: "white",
            }}
          >
            business you hire to{" "}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#EF6D58",
              fontSize: { xs: "24px", md: "38px" },
              fontWeight: "800",
              color: "white",
            }}
          >
            outsource your digital{" "}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#EF6D58",
              fontSize: { xs: "24px", md: "38px" },
              fontWeight: "800",
              color: "white",
            }}
          >
            marketing efforts{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EF6D58",
              fontSize: "18px",
              fontWeight: "400",
              color: "white",
              marginTop: "25px",
            }}
          >
            Ren Delan
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EF6D58",
              fontSize: "14px",
              fontWeight: "400",
              color: "rgba(255, 255, 255, 0.64)",
            }}
          >
            Founder{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FounderWords;
