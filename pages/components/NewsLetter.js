import { Box, Typography, Input, TextField, Button } from "@mui/material";
import React from "react";

const NewsLetter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        padding: { xs: "30px 20px", md: "40px 0px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          margin: "0 auto",
          borderTop: "1px solid #F3D1BF",
          paddingTop: { xs: "20px", md: "60px" },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "20px", md: "40px" },
              color: "#391400",
              fontWeight: "800",
            }}
          >
            Newsletter
          </Typography>
        </Box>
        <Box sx={{ paddingTop: { xs: "30px", md: "0px" } }}>
          <TextField
            id="standard-name"
            label="Your Email"
            InputProps={{
              endAdornment: (
                <Button sx={{ color: "#391400" }}>Subscribe</Button>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetter;
