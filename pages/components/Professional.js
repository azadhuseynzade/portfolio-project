import { Box, Typography } from "@mui/material";
import React from "react";
import ThreeSmth from "../assets/Combined Shape.png";
import Image from "next/image";
const Professional = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9", paddingBottom: "60px" }}>
      <Box
        sx={{
          maxWidth: "1050px",
          display: "flex",
          margin: "0 auto",
          paddingTop: { xs: "0px", md: "150px" },
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            marginRight: { xs: "0px", md: "130px" },
            marginTop: "80px",
            marginLeft: { xs: "20px", md: "0px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#EF6D58", fontSize: "16px", fontWeight: "400" }}
          >
            Features
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: " #391400",
              fontSize: "20px",
              fontWeight: "400",
              paddingTop: "30px",
            }}
          >
            Long run, and work as an extension <br /> of the merchants team.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: " #391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "30px",
            }}
          >
            Read More
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: { xs: "30px", md: "48px" },
            boxShadow: " 0px 32px 64px rgba(57, 20, 0, 0.04);",
            borderRadius: "6px 6px 0px 6px",
            border: " 1px solid #F3D1BF",
            margin: { xs: "20px 20px", md: "0px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#EF6C57",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "20px",
                left: "25px",
              }}
            >
              <Image src={ThreeSmth} alt="img" />
            </Box>
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: " #391400",
              fontSize: "24px",
              fontWeight: "700",
              paddingTop: "40px",
            }}
          >
            Professional
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "  rgba(57, 20, 0, 0.64)",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "19px",
            }}
          >
            Full service range including <br /> technical skills, design.
          </Typography>
        </Box>
        <Box
          sx={{
            padding: { xs: "30px ", md: "100px 70px 40px 48px" },
            margin: { xs: "0px 20px", md: "50px 0px 0px 0px" },

            height: { xs: "222px", md: "272px" },

            boxShadow: " 0px 32px 64px rgba(57, 20, 0, 0.04);",

            borderRadius: "  0px 6px 6px 0px",
            border: " 1px solid #F3D1BF",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: " #391400",
              fontSize: "24px",
              fontWeight: "700",
              paddingTop: "20px",
            }}
          >
            Accessibility{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "  rgba(57, 20, 0, 0.64)",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "19px",
            }}
          >
            Business understanding, <br /> ability to put themselves.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Professional;
