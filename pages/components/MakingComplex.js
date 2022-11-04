import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import MetaImg from "../assets/girlll.svg";

import NewLookImg from "../assets/makingComplex.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const MakingComplex = () => {
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
          backgroundColor: "#FDF0E9",
          display: "flex",
          justifyContent: "space-between",

          flexDirection: {
            xs: "column",
            md: "row",
          },
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Image src={NewLookImg} width={800} height={600} alt="rightSide" />
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: "50",
            paddingLeft: { xs: "0px", md: "120px" },
          }}
        >
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
            Service
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "40px",
                md: "56px",
              },
              padding: {
                xs: "0px 0px 0px 20px",
              },
              color: "#391400",
              fontWeight: "900",
            }}
            variant="h1"
          >
            Making Complex Digital Products
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              color: "#391400",
              marginTop: "20px",
              paddingLeft: {
                xs: " 20px",
              },
            }}
          >
            Agency provides a full service range including <br /> technical
            skills, design, business.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#391400",
              padding: {
                xs: "0px 20px",
              },
            }}
          ></Typography>
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
                sx={{
                  color: "rgba(57, 20, 0, 0.64);",
                  fontSize: { xs: "12px", md: "14px" },
                }}
              >
                Understanding, ability to put themselves in the <br /> merchants
                shoes. It is meant to partner.
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#391400" }}>
                Jenny Murtaugh{" "}
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              width: "138px",
              padding: "10px 0px",
              backgroundColor: "white",
              color: "#391400",
              fontSize: "12px",
              fontWeight: "800",
              marginTop: "40px",
              marginLeft: "20px",
            }}
          >
            Explore
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MakingComplex;
