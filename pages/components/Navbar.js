import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { HiMenu } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AppBar
      sx={{
        backgroundColor: "#28293E",
        position: "static",
        padding: {
          xs: "10px 0px",
          md: "15px 0px",
        },
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",

            justifyContent: {
              md: "space-between",
              sm: "space=between",
            },
          }}
        >
          <Box sx={{ display: "flex", cursor: "pointer" }}>
            <Image
              src={Logo}
              alt="Picture of the author"
              width={48}
              height={48}
            />
            <Typography
              sx={{
                marginTop: "10px",
                marginLeft: "5px",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              Agency
            </Typography>
          </Box>
          <Box>
            <List
              sx={{
                mr: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "row",
                  padding: "0px",
                },
              }}
            >
              <ListItem sx={{ cursor: "pointer", paddingLeft: "70px" }}>
                <ListItemText sx={{ fontSize: "16px" }} primary="About" />
              </ListItem>
              <ListItem sx={{ cursor: "pointer", paddingLeft: "70px" }}>
                <ListItemText sx={{ fontSize: "16px" }} primary="Services" />
              </ListItem>
              <ListItem sx={{ cursor: "pointer", paddingLeft: "70px" }}>
                <ListItemText sx={{ fontSize: "16px" }} primary="Pricing" />
              </ListItem>
              <ListItem sx={{ cursor: "pointer", paddingLeft: "70px" }}>
                <ListItemText sx={{ fontSize: "16px" }} primary="Blog" />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              marginTop: "5px",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "900",
                padding: "10px 15px",
                border: " 1px solid rgba(255, 255, 255, 0.295743);",
                borderRadius: "6px",
              }}
            >
              Contact
            </Typography>
          </Box>
        </Box>
        <Box
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            mr: 2,
            position: "absolute",
            right: "10px",
            top: "15px",
            border: "1px solid rgba(255, 255, 255, 0.295743)",
            padding: "2px",
            borderRadius: "6px",
            cursor: "pointer",
            display: {
              md: "none",
              xs: "flex",
            },
          }}
        >
          {isOpen ? (
            <HiMenu
              style={{ fontSize: "32px" }}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <>
              <AiOutlineMinus style={{ fontSize: "32px" }} />
            </>
          )}
        </Box>
        <Box>
          {!isOpen && (
            <Box
              sx={{
                backgroundColor: "#28293E",
                height: "400vh",
                position: "absolute",
                right: "0px",
                top: "40px",
                padding: "0px 60px",
                marginTop: "20px",
                borderLeft: "1px solid white",
                zIndex: "100",
                position: "absolute",
              }}
            >
              <List>
                <ListItem>
                  <ListItemText
                    sx={{
                      fontSize: "16px",
                      color: "white",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                    primary="About"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    sx={{
                      fontSize: "16px",
                      textAlign: "center",
                      color: "white",
                      marginTop: "20px",
                    }}
                    primary="Services"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    sx={{
                      fontSize: "16px",
                      color: "white",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                    primary="Pricing"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    sx={{
                      fontSize: "16px",
                      color: "white",
                      textAlign: "center",
                      marginTop: "20px",
                    }}
                    primary="Blog"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    sx={{
                      fontSize: "16px",
                      color: "white",
                      textAlign: "center",
                      marginTop: "20px",
                      fontWeight: "600",
                      padding: "10px 10px",
                      border: " 1px solid rgba(255, 255, 255, 0.295743);",
                      borderRadius: "6px",
                    }}
                    primary="Contact"
                  />
                </ListItem>
              </List>
            </Box>
          )}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
