import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import DesignPhoto from "../assets/designIMG.svg";

const DesignAgency = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          maxWidth: "1150px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "center",

            md: "space-between",
          },
          margin: "0 auto",
          borderTop: "1px solid #F3D1BF",
          paddingTop: {
            xs: "50px",
            md: "100px",
          },

          paddingBottom: "130px",
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "329px",
              md: "566px",
            },
            maxHeight: {
              xs: "340px",
              md: "566px",
            },
          }}
        >
          <Image src={DesignPhoto} width={566} height={566} alt="designPhoto" />
        </Box>
        <Box
          sx={{
            maxWidth: {
              xs: "307px",
              md: "467px",
            },
            textAlign: "left",
            paddingLeft: "30px",

            paddingTop: {
              sm: "0px",
              md: "100px",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: "400", color: "#EF6D58" }}
            variant="subtitle1"
          >
            ABOUT
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "35px",
                md: "56px",
              },
              alignItems: "center",
              fontWeight: "800",
              color: "black",
              padding: "0",
              margin: "0",
            }}
            variant="h1"
          >
            An Experience Design Agency
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              color: "#391400",
              padding: "10px 0px",
            }}
            variant="subtitle1"
          >
            Provides a full service range
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(57, 20, 0, 0.64)",
            }}
            variant="subtitle1"
          >
            Ability to put themselves in the merchants shoes. It is meant to
            partner on the long run, and work as an extension of the merchants
            team.
          </Typography>
          <Button
            sx={{
              width: "138px",
              padding: "10px 0px",
              backgroundColor: "white",
              color: "#391400",
              fontSize: "12px",
              fontWeight: "800",
              marginTop: "40px",
            }}
          >
            About Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DesignAgency;
