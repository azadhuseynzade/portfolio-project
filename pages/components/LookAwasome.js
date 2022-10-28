import { Box, Typography } from "@mui/material";
import React from "react";

const LookAwasome = () => {
  return (
    <Box sx={{ backgroundColor: "#FDF0E9" }}>
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          paddingBottom: "40px",
          maxWidth: "1050px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "470px",
            textAlign: {
              xs: "left",
            },
            padding: {
              xs: "0px 20px",
              md: "0px",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "#EF6D58", fontSize: "16px" }}
          >
            How we work
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#391400",
              fontSize: {
                xs: "35px",
                md: "40px",
              },
              fontWeight: "800",
            }}
          >
            Making Your Projects Look Awesome
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: " rgba(57, 20, 0, 0.64);",
              fontSize: "16px",
              paddingTop: "30px",
            }}
          >
            Technical skills, design, business understanding, ability to put
            themselves in the merchants shoes.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#391400;",
              fontSize: "16px",
              paddingTop: "30px",
              cursor: "pointer",
            }}
          >
            Read More
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: "50px",
            paddingLeft: {
              xs: "0px",
              md: "100px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "0 auto",
              marginLeft: "20px",
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "55px",
                    md: "70px",
                  },
                  fontWeight: "800",
                }}
              >
                1
              </Typography>
            </Box>
            <Box>
              {" "}
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "55px",
                    md: "70px",
                  },
                  fontWeight: "800",
                }}
              >
                2
              </Typography>
            </Box>
            <Box>
              {" "}
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "55px",
                    md: "70px",
                  },
                  fontWeight: "800",
                }}
              >
                3
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              margin: "0 auto",
              paddingLeft: {
                xs: "20px",
                md: "40px",
              },
            }}
          >
            <Box>
              {" "}
              <Typography
                variant="h1"
                sx={{ fontSize: "20px", fontWeight: "700", paddingTop: "30px" }}
              >
                Full service range including
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  paddingTop: {
                    xs: "30px",
                    md: "60px",
                  },
                }}
              >
                Technical skills, design, business{" "}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "20px",
                  fontWeight: "700",
                  paddingTop: {
                    xs: "20px",
                    md: "60px",
                  },
                }}
              >
                Themselves in the merchants
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LookAwasome;
