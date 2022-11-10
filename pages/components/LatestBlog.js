import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LatestPic1 from "../assets/latesttPic1.svg";
import LatestPic2 from "../assets/latesttPic2.svg";
import LatestPic3 from "../assets/latesttPic3.svg";
import Image from "next/image";
const LatestBlog = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        padding: { xs: "0px", md: "30px 0px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            padding: { xs: "30px 20px", md: "60px 0px" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "16px", color: "#EF6D58" }}
            >
              Our Blog
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "40px", md: "56px" },
                color: "#391400",
                fontWeight: "800",
              }}
            >
              Latest Blog <br /> Articles{" "}
            </Typography>
          </Box>
          <Box sx={{ paddingTop: { xs: "30px", md: "115px" } }}>
            <Button
              sx={{
                padding: "5px 15px",
                backgroundColor: "white",
                color: "#391400",
                fontWeight: "800",
                fontSize: "12px",
              }}
            >
              Discover All
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          <Box sx={{ maxWidth: "350px" }}>
            <Image src={LatestPic1} alt="storiesPic" />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                color: "#391400",
                fontWeight: "400",
                paddingTop: "10px",
              }}
            >
              Stories{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                color: "#391400",
                fontWeight: "700",
                paddingTop: "5px",
              }}
            >
              Agency is a business you <br /> hire to outsource{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "16px" },
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: "15px",
              }}
            >
              5 Nov, 2021{" "}
            </Typography>
          </Box>
          <Box
            sx={{ maxWidth: "350px", paddingTop: { xs: "45px", md: "0px" } }}
          >
            <Image src={LatestPic2} alt="storiesPic" />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                color: "#391400",
                fontWeight: "400",
                paddingTop: "10px",
              }}
            >
              Design{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                color: "#391400",
                fontWeight: "700",
                paddingTop: "5px",
              }}
            >
              Outsource your digital <br /> marketing efforts{" "}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "16px" },
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: "15px",
              }}
            >
              29 Oct, 2021{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: "350px",
              paddingTop: {
                xs: "45px",
                md: "0px",
              },
              paddingBottom: { xs: "40px", md: "0px" },
            }}
          >
            <Image src={LatestPic3} alt="storiesPic" />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "20px" },
                color: "#391400",
                fontWeight: "400",
                paddingTop: "10px",
              }}
            >
              Marketing{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "20px", md: "24px" },
                color: "#391400",
                fontWeight: "700",
                paddingTop: "5px",
              }}
            >
              Your business with a <br /> variety of digital{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: "20px", md: "16px" },
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: "15px",
              }}
            >
              21 Oct, 2021{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestBlog;
