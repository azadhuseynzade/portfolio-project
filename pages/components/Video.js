import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import VideoImg from "../assets/video.jpeg";
const Video = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "100px 0px",
          borderTop: "1px solid #F3D1BF",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: "329px", md: "580px" },
            height: { xs: "212px", md: "368px" },
            margin: { xs: "0 auto" },
          }}
        >
          <Image src={VideoImg} alt="img" />
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "329px", md: "417px" },
            paddingLeft: { xs: "0px", md: "50px" },
            paddingTop: { xs: "30px", md: "40px" },
            margin: "0 auto",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "16px", color: "#EF6D58" }}
          >
            Video Reel
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "33px",
              color: "#391400",
              fontWeight: "800",
              marginTop: "17px",
            }}
          >
            Unlock The Greatest Value Possible
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              color: " rgba(57, 20, 0, 0.64)",
              fontWeight: "400",
              marginTop: "20px",
            }}
          >
            Design, business understanding, ability to put themselves in the
            merchants shoes meant to partner.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Video;
