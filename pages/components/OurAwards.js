import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Sofa from "../assets/sofaaa.jpg";
import Keyboard from "../assets/keyboarddd.jpg";
import DesignAwards from "../assets/designAwardd.svg";
import WorkMedia from "../assets/workMedia.jpg";
import FWA from "../assets/FWA.svg";
const OurAwards = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9", paddingBottom: "50px" }}>
      <Typography
        variant="h3"
        sx={{ fontSize: "40px", fontWeight: "800", textAlign: "center" }}
      >
        Our Awards
      </Typography>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          paddingTop: "67px",
          padding: { xs: "40px 20px", md: "60px 0px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            borderTop: "1px solid #F3D1BF",
            borderBottom: "1px solid #F3D1BF",
            padding: { xs: "0px", md: "10px 0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "120px",
                display: "flex",
                margin: "0 auto",
                paddingTop: { xs: "10px", md: "0px" },
              }}
            >
              <Image src={Sofa} alt="sofa" width={120} height={80} />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "#391400",
                paddingTop: "25px",
                paddingLeft: { xs: "0px", md: "15px" },
              }}
            >
              Sofa
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: { xs: "10px", md: "30px" },
                textAlign: "center",
              }}
            >
              25 Oct, 2021
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "#391400",
                paddingTop: { xs: "10px", md: "25px" },
                paddingLeft: "15px",
                textAlign: "center",
              }}
            >
              Awwwards
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "25px",
                color: "#391400",
                paddingTop: { xs: "0px", md: "15px" },
                paddingLeft: "15px",
                fontWeight: "800",
              }}
            >
              W.
            </Typography>
          </Box>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            borderBottom: "1px solid #F3D1BF",
            padding: { xs: "0px", md: "10px 0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "120px",
                display: "flex",
                margin: "0 auto",
                paddingTop: { xs: "10px", md: "0px" },
              }}
            >
              <Image src={Keyboard} alt="sofa" width={120} height={80} />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "#391400",
                paddingTop: "25px",
                paddingLeft: { xs: "0px", md: "15px" },
              }}
            >
              KeyBoard{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: { xs: "10px", md: "30px" },
                paddingLeft: { xs: "0px", md: "10px" },
                textAlign: "center",
              }}
            >
              19 Oct, 2021{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "#391400",
                paddingTop: { xs: "10px", md: "25px" },
                paddingLeft: "15px",
                textAlign: "center",
              }}
            >
              CSS Design Awards
            </Typography>
            <Image src={DesignAwards} alt="sofa" width={40} height={40} />
          </Box>{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "space-between" },
            borderBottom: "1px solid #F3D1BF",
            padding: { xs: "0px", md: "10px 0px" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                maxWidth: "120px",
                display: "flex",
                margin: "0 auto",
                paddingTop: { xs: "10px", md: "0px" },
              }}
            >
              <Image src={WorkMedia} alt="sofa" width={120} height={80} />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "20px",
                color: "#391400",
                paddingTop: "25px",
                paddingLeft: { xs: "0px", md: "15px" },
              }}
            >
              Work Media{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(57, 20, 0, 0.64)",
                paddingTop: { xs: "10px", md: "30px" },
                paddingRight: { xs: "0px", md: "80px" },
                textAlign: "center",
              }}
            >
              7 Oct, 2021{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "#391400",
                paddingTop: { xs: "5px", md: "25px" },
                textAlign: "center",
                paddingRight: "20px",
              }}
            >
              The FWA
            </Typography>
            <Image src={FWA} alt="sofa" width={40} height={40} />
          </Box>{" "}
        </Box>
      </Box>
      <Box sx={{ display: "flex", margin: "0 auto", justifyContent: "center" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "16px", color: "rgba(57, 20, 0, 0.64)" }}
        >
          Want more awards?
        </Typography>
        <Button
          sx={{
            padding: "0px",
            fontSize: "12px",
            color: "#391400",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          Explore Now
        </Button>
      </Box>
    </Box>
  );
};

export default OurAwards;
