import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import Image from "next/image";
import MetaImg from "../assets/meta-img.png";
import StarImg from "../assets/Star.png";
import RightSide from "../assets/pic.svg";
import NewLookImg from "../assets/newLook.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const NewLook = () => {
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
          justifyContent: "center",

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
              color: "#391400",
              fontWeight: "900",
            }}
            variant="h1"
          >
            Give Your Site New Look
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#391400",
              marginTop: "20px",
              padding: {
                xs: "0px 20px",
              },
            }}
          >
            Service range including technical skills, design{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#391400",
              padding: {
                xs: "0px 20px",
              },
            }}
          >
            business understanding.{" "}
          </Typography>
          <List
            sx={{ display: "flex", flexDirection: "column", marginTop: "5px" }}
          >
            <ListItem>
              <CheckCircleIcon sx={{ color: "#EF6C57" }} />
              <ListItemText
                sx={{
                  color: "rgba(57, 20, 0, 0.64)",
                  marginLeft: "10px",
                }}
                primary="Range including technical skills"
              />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: "#EF6C57" }} />
              <ListItemText
                sx={{ color: "rgba(57, 20, 0, 0.64)", marginLeft: "10px" }}
                primary="Business understanding"
              />
            </ListItem>
            <ListItem>
              <CheckCircleIcon sx={{ color: "#EF6C57" }} />
              <ListItemText
                sx={{ color: "rgba(57, 20, 0, 0.64)", marginLeft: "10px" }}
                primary="Partner on the long run"
              />
            </ListItem>
          </List>
        </Box>
        <Box>
          <Image src={NewLookImg} width={700} height={600} alt="rightSide" />
        </Box>
      </Box>
    </Box>
  );
};

export default NewLook;
