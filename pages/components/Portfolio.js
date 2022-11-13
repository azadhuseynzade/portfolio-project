import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Badge,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
import { Keyboard } from "swiper";
const Portfolio = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#28293E",
        paddingBottom: "80px",
        paddingTop: "90px",
      }}
    >
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
            fontSize: { xs: "40px", md: "52px" },
            fontWeight: "800",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Latest Work{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
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
      <Box sx={{ display: { xs: "block", md: "none" }, padding: "30px 20px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">All</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Design</MenuItem>
            <MenuItem value={30}>Branding</MenuItem>
            <MenuItem value={30}>Illustration</MenuItem>
            <MenuItem value={30}>Motion</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: { xs: "0px", md: "45px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            marginTop: "50px",
            flexDirection: { xs: "column", md: "row" },
            padding: "0px 30px",
          }}
        >
          <Box
            sx={{
              borderRadius: "6px",
              background: `url(${Sofa.src}) center / cover`,
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "260px 200px 100px 44px",
                  md: "260px 280px 100px 60px",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  background: "white",
                  color: "#391400",
                  fontSize: "16px ",
                  width: "84px",

                  padding: "5px 0px",
                  borderRadius: "19px",
                  textAlign: "center",
                }}
              >
                Design
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "40px ",
                  borderRadius: "19px",
                  fontWeight: "700",
                  paddingTop: "15px",
                }}
              >
                Sofa
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "6px",
              background: `url(${Design.src}) center / cover`,
              marginLeft: { xs: "0px", md: "20px" },
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "260px 200px 100px 44px",
                  md: "260px 400px 100px 50px",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  background: "white",
                  color: "#391400",
                  fontSize: "16px ",
                  width: "102px",
                  textAlign: "center",
                  padding: "5px 0px",
                  borderRadius: "19px",
                }}
              >
                Branding
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "38px ",
                  borderRadius: "19px",
                  fontWeight: "700",
                  paddingTop: "15px",
                }}
              >
                Keyboard
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: { xs: "0px", md: "50px" },
            flexDirection: { xs: "column", md: "row" },
            padding: "0px 30px",
          }}
        >
          <Box
            sx={{
              borderRadius: "6px",
              background: `url(${Media.src}) center / cover`,
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "260px 200px 100px 44px",
                  md: "260px 400px 100px 50px",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  background: "white",
                  color: "#391400",
                  fontSize: "16px ",
                  width: "102px",
                  textAlign: "center",
                  padding: "5px 0px",
                  borderRadius: "19px",
                }}
              >
                Illustration
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "38px ",
                  borderRadius: "19px",
                  fontWeight: "700",
                  paddingTop: "15px",
                }}
              >
                KeyMedia
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: "6px",
              background: `url(${Done.src}) center / cover`,
              marginLeft: { xs: "0px", md: "20px" },
            }}
          >
            <Box
              sx={{
                padding: {
                  xs: "260px 200px 100px 44px",
                  md: "260px 210px 100px 60px",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  background: "white",
                  color: "#391400",
                  fontSize: "16px ",
                  width: "84px",

                  padding: "5px 0px",
                  borderRadius: "19px",
                  textAlign: "center",
                }}
              >
                Motion{" "}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontSize: "40px ",
                  borderRadius: "19px",
                  fontWeight: "700",
                  paddingTop: "15px",
                }}
              >
                DDDone
              </Typography>
            </Box>
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
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "#FDF0E9",
            justifyContent: "space-around",
            position: "relative",
            paddingTop: { xs: "15px", md: "100px" },
            marginTop: "150px",
            margin: { xs: "50px 30px", md: "150px 0px 0px 0px" },
          }}
        >
          <Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "200px",
                display: { xs: "none", md: "block" },
              }}
            >
              <Image src={IconStar} alt="star" />
            </Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "16px",
                color: "#EF6D58",
                textAlign: { xs: "center", md: "left" },
              }}
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
                textAlign: { xs: "center", md: "left" },
              }}
            >
              We Help Companies <br /> Move Faster
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
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
          </Box>
          <Box sx={{ paddingRight: "300px" }}>
            <Image src={Block} alt="sofa" width={338} height={176} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              right: "40px",
              display: { xs: "none", md: "block" },
            }}
          >
            <Image src={Path} alt="sofa" width={239} height={366} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
