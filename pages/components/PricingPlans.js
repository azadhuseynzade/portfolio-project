import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const PricingPlans = () => {
  return (
    <Box sx={{ backgroundColor: " #FDF0E9" }}>
      <Box
        sx={{
          maxWidth: "1050px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          paddingBottom: "70px",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "#EF6D58",
            fontSize: "16px",
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          Pricing
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#391400",
            fontSize: { xs: "40px", md: "56px" },
            fontWeight: "800",
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          Check Our{" "}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#391400",
            fontSize: { xs: "40px", md: "56px" },
            fontWeight: "800",
            padding: { xs: "0px 20px", md: "0px" },
          }}
        >
          Pricing Plans{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            paddingTop: "50px",
            padding: { xs: "0px 20px", md: "50px 0px 0px 0px" },
          }}
        >
          <Box
            sx={{
              border: "1px solid #F3D1BF",
              borderRadius: " 6px 0px 0px 6px",
              maxWidth: "370px",
              padding: "48px  70px 48px 48px",
              height: "480px",
              marginTop: "50px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Consultation
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#391400",
                fontSize: "40px",
                fontWeight: "800",
              }}
            >
              Free{" "}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "rgba(57, 20, 0, 0.64);",
                fontSize: "16px",
                paddingTop: "15px",
              }}
            >
              Your digital marketing efforts,
              <br /> instead of handling in-house.{" "}
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "25px",
              }}
            >
              <ListItem sx={{ padding: "0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Brand Design"
                />
              </ListItem>
              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Market Analysis"
                />
              </ListItem>

              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Production"
                />
              </ListItem>
            </List>
            <Button
              sx={{
                backgroundColor: "white",
                fontWeight: "800",
                color: "#391400",
                fontSize: "12px",
                padding: "5px 20px",
                marginTop: "35px",
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box
            sx={{
              border: "1px solid #F3D1BF",
              borderRadius: " 6px ",
              maxWidth: "370px",
              padding: "48px  ",
              backgroundColor: "white",
              position: "relative",
              height: "530px",
            }}
          >
            <Button
              sx={{
                backgroundColor: "#EF6D58",
                color: "white",
                fontSize: "12px",
                padding: "10px 20px",
                borderRadius: "19px",
              }}
            >
              Popular
            </Button>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Design{" "}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#391400",
                fontSize: "40px",
                fontWeight: "800",
              }}
            >
              $1500{" "}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "rgba(57, 20, 0, 0.64);",
                fontSize: "16px",
                paddingTop: "15px",
              }}
            >
              Provide your business with a variety <br /> of digital solutions
              to promote.
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "25px",
              }}
            >
              <ListItem sx={{ padding: "0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Brand Design"
                />
              </ListItem>
              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Market Analysis"
                />
              </ListItem>

              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Production"
                />
              </ListItem>
            </List>
            <Button
              sx={{
                backgroundColor: "#EF6D58",
                fontWeight: "800",
                color: "white",
                fontSize: "12px",
                padding: "5px 20px",
                marginTop: "35px",
              }}
            >
              Contact Us
            </Button>
          </Box>
          <Box
            sx={{
              border: "1px solid #F3D1BF",
              borderRadius: " 6px 0px 0px 6px",
              maxWidth: "370px",
              padding: "48px ",
              height: "480px",
              marginTop: { xs: "0px", md: "50px" },
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: "#EF6D58",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              Design+Code{" "}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#391400",
                fontSize: "40px",
                fontWeight: "800",
              }}
            >
              $2900{" "}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "rgba(57, 20, 0, 0.64);",
                fontSize: "16px",
                paddingTop: "15px",
              }}
            >
              Help you hit your marketing goals and <br /> grow your business.
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "25px",
              }}
            >
              <ListItem sx={{ padding: "0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Brand Design"
                />
              </ListItem>
              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Market Analysis"
                />
              </ListItem>

              <ListItem sx={{ padding: "10px 0px 0px 0px" }}>
                <ControlPointIcon sx={{ color: "#EF6C57" }} />
                <ListItemText
                  sx={{
                    color: "rgba(57, 20, 0, 0.64)",
                    marginLeft: "10px",
                  }}
                  primary="Production"
                />
              </ListItem>
            </List>
            <Button
              sx={{
                backgroundColor: "white",
                fontWeight: "800",
                color: "#391400",
                fontSize: "12px",
                padding: "5px 20px",
                marginTop: "35px",
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PricingPlans;
