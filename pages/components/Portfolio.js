import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import Sofa from "../assets/sofa.jpg";
import Design from "../assets/design.jpg";
import Media from "../assets/media.jpg";
import Done from "../assets/done.jpg";
import Block from "../assets/block.png";
import Path from "../assets/girlsssss.svg";
import IconStar from "../assets/iconStar.svg";
const Portfolio = () => {
  return (
    <Box sx={{ backgroundColor: "#28293E", paddingBottom: "80px" }}>
      <Box>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "16px", color: "#EF6D58", textAlign: "center" }}
        >
          Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Latest Work{" "}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "0 auto" }}>
        <List
          sx={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
        >
          <ListItem
            sx={{
              margin: "0px",
              padding: "0px",
              color: "rgba(255, 255, 255, 0.64)",
            }}
          >
            <Badge
              badgeContent={14}
              color="default"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ListItemText primary="All" />
            </Badge>
          </ListItem>
          <ListItem
            sx={{
              margin: "0px",
              padding: "0px",
              color: "rgba(255, 255, 255, 0.64)",
              marginLeft: "50px",
            }}
          >
            <Badge
              badgeContent={8}
              color="default"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ListItemText primary="Design" />
            </Badge>
          </ListItem>
          <ListItem
            sx={{
              margin: "0px",
              padding: "0px",
              color: "rgba(255, 255, 255, 0.64)",
              marginLeft: "50px",
            }}
          >
            <Badge
              badgeContent={3}
              color="default"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ListItemText primary="Branding" />
            </Badge>
          </ListItem>
          <ListItem
            sx={{
              margin: "0px",
              padding: "0px",
              color: "rgba(255, 255, 255, 0.64)",
              marginLeft: "50px",
            }}
          >
            <Badge
              badgeContent={1}
              color="default"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ListItemText primary="Illustration" />
            </Badge>
          </ListItem>
          <ListItem
            sx={{
              margin: "0px",
              padding: "0px",
              color: "rgba(255, 255, 255, 0.64)",
              marginLeft: "50px",
            }}
          >
            <Badge
              badgeContent={4}
              color="default"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ListItemText primary="Motion" />
            </Badge>
          </ListItem>
        </List>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", marginTop: "50px" }}>
          <Box sx={{ borderRadius: "6px" }}>
            <Image src={Sofa} alt="sofa" width={450} height={418} />
          </Box>
          <Box sx={{ marginLeft: "20px", borderRadius: "6px" }}>
            <Image src={Design} alt="sofa" width={650} height={418} />
          </Box>
        </Box>
        <Box sx={{ display: "flex", marginTop: "20px" }}>
          <Box sx={{ borderRadius: "6px" }}>
            <Image src={Media} alt="sofa" width={650} height={418} />
          </Box>
          <Box sx={{ borderRadius: "6px", marginLeft: "20px" }}>
            <Image src={Done} alt="sofa" width={450} height={418} />
          </Box>
        </Box>
        <Button
          sx={{
            width: "170px",
            color: "white",
            fontWeight: "800",
            display: "flex",
            margin: "0 auto",
            fontSize: "12px",
            marginTop: "50px",
          }}
          variant="outlined"
        >
          Explore More
        </Button>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#FDF0E9",
            justifyContent: "space-around",
            position: "relative",
            paddingTop: "100px",
            marginTop: "150px",
          }}
        >
          <Box>
            <Box sx={{ position: "absolute", bottom: "200px" }}>
              <Image src={IconStar} alt="star" />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{ fontSize: "16px", color: "#EF6D58" }}
            >
              Get Started
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#391400",
                margin: "0px",
                padding: "0px",
              }}
            >
              We Help Companies <br /> Move Faster
            </Typography>

            <Button
              sx={{
                backgroundColor: " #EF6D58",
                color: "white",
                fontWeight: "700",
                marginTop: "20px",
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box sx={{ paddingRight: "300px" }}>
            <Image src={Block} alt="sofa" width={338} height={176} />
          </Box>
          <Box sx={{ position: "absolute", bottom: "0px", right: "40px" }}>
            <Image src={Path} alt="sofa" width={239} height={366} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
