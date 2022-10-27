import React from "react";
import { Box, Typography } from "@mui/material";
const TotalCounts = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
          margin: "0 auto",
          paddingBottom: "80px",
          paddingLeft: {
            xs: "30px",
            md: "100px",
          },
          paddingRight: "30px",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "400px",
            },
            maxWidth: {
              xs: "320px",
              md: "400px",
            },
            height: "176px",
            border: "1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              color: "#391400",
              padding: "45px 0px 0px 45px",
            }}
          >
            42%
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              color: "rgba(57, 20, 0, 0.64);",
              padding: "10px 0px 0px 45px",
            }}
          >
            Years of experience
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              xs: "100%",
              md: "400px",
            },
            maxWidth: {
              xs: "320px",
              md: "400px",
            },
            height: "176px",
            border: "1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              color: "#391400",
              padding: "45px 0px 0px 45px",
            }}
          >
            73+
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              color: "rgba(57, 20, 0, 0.64);",
              padding: "10px 0px 0px 45px",
            }}
          >
            Agency members
          </Typography>
        </Box>

        <Box
          sx={{
            width: {
              xs: "100%",
              md: "400px",
            },
            maxWidth: {
              xs: "320px",
              md: "400px",
            },
            height: "176px",
            border: "1px solid #F3D1BF",
            borderRadius: "6px 0px 0px 6px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "40px",
              fontWeight: "800",
              color: "#391400",
              padding: "45px 0px 0px 45px",
            }}
          >
            5.000
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "20px",
              fontWeight: "400",
              color: "rgba(57, 20, 0, 0.64);",
              padding: "10px 0px 0px 45px",
            }}
          >
            Projects complete
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalCounts;
