import { Box } from "@mui/material";
import React from "react";
import Side1Img from "../assets/side1.svg";
import Side2Img from "../assets/side2.svg";
import Side3Img from "../assets/side3.svg";
import Side4Img from "../assets/side4.svg";
import Side5Img from "../assets/side5.svg";
import Image from "next/image";
const DigitalSide = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-around" },
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "50px 0px",

          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={Side1Img} width={147} height={42} alt="side1" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "25px", md: "0px" },
          }}
        >
          <Image src={Side2Img} width={108} height={32} alt="side1" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "25px", md: "0px" },
          }}
        >
          <Image src={Side3Img} width={119} height={47} alt="side1" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "25px", md: "0px" },
          }}
        >
          <Image src={Side4Img} width={86} height={21} alt="side1" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: { xs: "30px", md: "0px" },
          }}
        >
          <Image src={Side5Img} width={126} height={24} alt="side1" />
        </Box>
      </Box>
    </Box>
  );
};

export default DigitalSide;
