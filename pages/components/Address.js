import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import RedPhone from "../assets/redPhonee.svg";
import Email from "../assets/emailll.svg";
import Street from "../assets/street.svg";

const Address = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        padding: { xs: "0px", md: "80px 130px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            border: " 1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
            padding: "30px 170px 40px 38px",
            margin: { xs: "20px 10px 0px 10px", md: "0px" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "27px", left: "27px" }}>
                <Image src={RedPhone} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                paddingTop: "25px",
                paddingLeft: "20px",
              }}
            >
              Phone{" "}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400",
              fontSize: "16px",
              paddingTop: "26px",
            }}
          >
            +1 (234) 567-89-00{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            border: " 1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
            padding: "30px 170px 40px 38px",
            margin: { xs: "0px 10px", md: "0px" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "30px", left: "27px" }}>
                <Image src={Email} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                paddingTop: "25px",
                paddingLeft: "20px",
              }}
            >
              Email{" "}
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400",
              fontSize: "16px",
              paddingTop: "26px",
            }}
          >
            info@agency.com{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            border: " 1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
            padding: { xs: "30px 140px 40px 38px", md: "30px 170px 40px 38px" },
            margin: { xs: "0px 10px 40px 10px", md: "0px" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#EF6C57",
                borderRadius: "50%",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "27px", left: "27px" }}>
                <Image src={Street} alt="design" />
              </Box>
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                paddingTop: "25px",
                paddingLeft: "20px",
              }}
            >
              Address
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400",
              fontSize: "16px",
              paddingTop: "26px",
            }}
          >
            2247 Lunetta Street{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Address;
