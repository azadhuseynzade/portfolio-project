import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const ExploreFuture = () => {
  return (
    <Box sx={{ backgroundColor: "#28293E", paddingBottom: "50px" }}>
      <Typography
        sx={{ fontSize: "16px", color: " #EF6D58", textAlign: "center" }}
        variant="h5"
      >
        Events
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "40px", md: "56px" },
          color: " #ffffff",
          textAlign: "center",
          fontWeight: "800",
        }}
        variant="h2"
      >
        Explore Future
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "40px", md: "56px" },
          color: " #ffffff",
          textAlign: "center",
          fontWeight: "800",
          paddingBottom: "40px",
        }}
        variant="h2"
      >
        Conferences{" "}
      </Typography>
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          margin: "0 auto",
          paddingBottom: "30px",

          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#28293E",
            border: { xs: "2px solid #3A3C56", md: "1px solid #3A3C56" },
            borderRadius: "6px",
            padding: { xs: "36px 0px 20px 40px", md: "40px 40px 20px 30px" },
            display: "flex",
            flexDirection: "column",
            margin: { xs: "20px 20px", md: "0px 20px 0px 30px " },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                sx={{ color: "white", fontSize: "72px", fontWeight: "800" }}
                variant="h1"
              >
                3
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginTop: "17px",
                  marginLeft: "12px",
                }}
                variant="h4"
              >
                November <br />
                2021
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              position: "relative",
              marginLeft: "35px",
              marginTop: "10px",
            }}
            variant="subtitle1"
          >
            <AccessTimeIcon
              sx={{ color: "red", position: "absolute", left: "-30px" }}
            />
            9:00 am – 3:00 pm
          </Typography>
          <Box
            sx={{
              maxWidth: "290px",
              height: "1px",
              backgroundColor: "#3A3C56",
              margin: "36px 0px",
            }}
          ></Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "24px", color: "white", fontWeight: "700" }}
            >
              Design Weeks
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.64)",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Digital agency is a business you hire <br /> to outsource your
              digital.
            </Typography>
            <Button
              sx={{
                color: "white",
                fontSize: "10px",
                marginTop: "25px",
                padding: "0px",
              }}
            >
              Explore Now
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#28293E",
            border: { xs: "2px solid #3A3C56", md: "1px solid #3A3C56" },
            borderRadius: "6px",
            padding: { xs: "36px 0px 20px 40px", md: "40px 40px 20px 30px;" },
            display: "flex",
            flexDirection: "column",
            margin: { xs: "20px 20px", md: "0px  20px" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                sx={{ color: "white", fontSize: "72px", fontWeight: "800" }}
                variant="h1"
              >
                15
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginTop: "17px",
                  marginLeft: "12px",
                }}
                variant="h4"
              >
                November <br />
                2021
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              position: "relative",
              marginLeft: "35px",
              marginTop: "10px",
            }}
            variant="subtitle1"
          >
            <AccessTimeIcon
              sx={{ color: "red", position: "absolute", left: "-30px" }}
            />
            1:00 pm – 8:00 pm{" "}
          </Typography>
          <Box
            sx={{
              maxWidth: "290px",
              height: "1px",
              backgroundColor: "#3A3C56",
              margin: "36px 0px",
            }}
          ></Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "24px", color: "white", fontWeight: "700" }}
            >
              Interior Design{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.64)",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Marketing efforts, instead of <br /> handling in-house.
            </Typography>
            <Button
              sx={{
                color: "white",
                fontSize: "10px",
                marginTop: "25px",
                padding: "0px",
              }}
            >
              Explore Now
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#28293E",
            border: { xs: "2px solid #3A3C56", md: "1px solid #3A3C56" },
            borderRadius: "6px",
            padding: { xs: "36px 0px 20px 40px", md: "40px 40px 20px 30px" },
            display: "flex",
            flexDirection: "column",
            margin: { xs: "20px 20px", md: "0px 20px" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                sx={{ color: "white", fontSize: "72px", fontWeight: "800" }}
                variant="h1"
              >
                2
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "700",
                  marginTop: "17px",
                  marginLeft: "12px",
                }}
                variant="h4"
              >
                December <br />
                2021
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#ffffff",
              fontSize: "16px",
              position: "relative",
              marginLeft: "35px",
              marginTop: "10px",
            }}
            variant="subtitle1"
          >
            <AccessTimeIcon
              sx={{ color: "red", position: "absolute", left: "-30px" }}
            />
            10:00 am – 2:00 pm{" "}
          </Typography>
          <Box
            sx={{
              maxWidth: "290px",
              height: "1px",
              backgroundColor: "#3A3C56",
              margin: "36px 0px",
            }}
          ></Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "24px", color: "white", fontWeight: "700" }}
            >
              The F design events{" "}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.64)",
                fontWeight: "400",
                marginTop: "15px",
              }}
            >
              Provide your business with a variety <br />
              of digital solutions to promote.
            </Typography>
            <Button
              sx={{
                color: "white",
                fontSize: "10px",
                marginTop: "25px",
                padding: "0px",
              }}
            >
              Explore Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: "white",
          fontSize: "10px",
          marginTop: "25px",
          display: "flex",
          margin: "0 auto",
        }}
      >
        Explore Now
      </Button>
    </Box>
  );
};

export default ExploreFuture;
