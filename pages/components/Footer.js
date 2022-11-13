import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Facebook from "../assets/facebook (1).svg";
import Instagram from "../assets/instagram (2).svg";
import Twitter from "../assets/twitter (1).svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        padding: { xs: "30px 0px", md: "40px 0px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },

          margin: "0 auto",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              color: "#391400",
              fontSize: "24px",
              fontWeight: "800",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Agency
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "30px", md: "10px" },
            textAlign: { xs: "center", md: "left" },
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#EF6D58",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            Menu
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "20px",
            }}
          >
            About{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            Services{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            Blog{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            Contact{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: { xs: "30px", md: "10px" },
            textAlign: { xs: "center", md: "left" },
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#EF6D58", fontSize: "16px", fontWeight: "400" }}
          >
            Service
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "20px",
            }}
          >
            Design{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            Development{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            Marketing{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              paddingTop: "10px",
            }}
          >
            See More{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: { xs: "30px", md: "0px" },
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#EF6C57",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", top: "13px", left: "20px" }}>
              <Image src={Facebook} alt="design" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#EF6C57",
              borderRadius: "50%",
              position: "relative",
              marginLeft: "8px",
            }}
          >
            <Box sx={{ position: "absolute", top: "13px", left: "16px" }}>
              <Image src={Twitter} alt="design" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "48px",
              height: "48px",
              backgroundColor: "#EF6C57",
              borderRadius: "50%",
              position: "relative",
              marginLeft: "8px",
            }}
          >
            <Box sx={{ position: "absolute", top: "13px", left: "15px" }}>
              <Image src={Instagram} alt="design" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          borderTop: "1px solid #F3D1BF",
          margin: "0 auto",
          paddingTop: "60px",
          marginTop: "60px",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "rgba(57, 20, 0, 0.64)",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Copyright © 2022 Laaqiq. All Rights Reserved.{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: { xs: "30px", md: "0px" },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Terms of Use{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
              paddingLeft: { xs: "0px", md: "60px" },
              cursor: "pointer",
            }}
          >
            Privacy Policy{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
