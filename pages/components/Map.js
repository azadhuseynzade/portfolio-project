import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";
import React from "react";
import MapImage from "../assets/mapp.png";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Map = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        background: `url(${MapImage.src}) center / cover`,
        padding: { xs: "30px 30px", md: "120px 130px 120px 210px" },
        display: "flex",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: "470px",
          padding: { xs: "15px", md: "48px" },
          borderRadius: "6px",
        }}
      >
        <Typography variant="h4" sx={{ fontSize: "24px", fontWeight: "800" }}>
          Get In Touch
        </Typography>
        <TextField
          id="standard-name"
          label="Your Email"
          sx={{ maxWidth: "370px", width: "100%", marginTop: "20px" }}
        />
        <FormControl
          sx={{ maxWidth: "370px", width: "100%", marginTop: "14px" }}
        >
          <InputLabel id="demo-simple-select-label">Subject</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Message"
          sx={{ maxWidth: "370px", width: "100%", marginTop: "14px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "30px",
          }}
        >
          <Button
            sx={{
              background: "#EF6D58;",
              borderRadius: "6px;",
              color: "white",
              fontSize: "10px ",
              fontWeight: "800",
              padding: "10px 15px",
            }}
          >
            Submit Now
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "white",
            padding: "10px",
            backgroundColor: "#EF6D58",
            textAlign: "center",
            alignItems: "center",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <LocationOnIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Map;
