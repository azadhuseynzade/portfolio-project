import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import DesignImage from "../assets/designnn.svg";
import DevelopmentImage from "../assets/development.svg";
import MarketingImage from "../assets/marketing.svg";
const HowCanHelp = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1050px",
          margin: "0 auto",
          paddingBottom: "100px",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "16px",
              color: "#EF6D58",
              paddingLeft: { xs: "20px", md: "0px" },
            }}
          >
            Service
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "35px", md: "40px" },
              color: "#391400",
              fontWeight: "800",
              padding: { xs: "0px 0px 20px 20px", md: "0px 0px 20px 0px " },
            }}
          >
            How Our Agency <br />
            Can Help{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              border: " 1px solid #F3D1BF",
              borderRadius: "6px 0px 0px 6px",
              margin: { xs: "0px 20px", md: "0px" },
              padding: { xs: "48px 0px 50px 48px", md: "48px 45px 50px 48px" },
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "25px", left: "22px" }}>
                <Image src={DesignImage} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#391400",
                marginTop: "35px",
              }}
            >
              Design
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "17px",
              }}
            >
              Agency provides a full service range
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "5px",
              }}
            >
              including technical skills, design.
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#391400",
                marginTop: "22px",
              }}
            >
              Learn More
            </Typography>
          </Box>
          <Box
            sx={{
              border: " 1px solid #F3D1BF",
              borderRadius: "6px 0px 0px 6px",
              margin: { xs: "0px 20px", md: "0px" },

              padding: { xs: "48px 0px 50px 48px", md: "48px 40px 50px 48px" },
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "25px", left: "22px" }}>
                <Image src={DevelopmentImage} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#391400",
                marginTop: "35px",
              }}
            >
              Design
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "17px",
              }}
            >
              Full service range including technical{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "5px",
              }}
            >
              skills, design, business.{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#391400",
                marginTop: "22px",
              }}
            >
              Learn More
            </Typography>
          </Box>
          <Box
            sx={{
              border: " 1px solid #F3D1BF",
              borderRadius: "6px 0px 0px 6px",
              margin: { xs: "0px 20px", md: "0px" },

              padding: { xs: "48px 0px 50px 48px", md: "48px 40px 50px 48px" },
            }}
          >
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "25px", left: "22px" }}>
                <Image src={MarketingImage} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                color: "#391400",
                marginTop: "35px",
              }}
            >
              Design
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "17px",
              }}
            >
              Technical skills, design, business{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(57, 20, 0, 0.64)",
                marginTop: "5px",
              }}
            >
              understanding, ability.{" "}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#391400",
                marginTop: "22px",
              }}
            >
              Learn More
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowCanHelp;
