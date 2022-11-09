import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
const FrequentlyAsked = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF0E9",
        padding: { xs: "0px 0px 50px 0px", md: "100px 0px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          justifyContent: { xs: "center", md: "space-around" },
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "0px 20px", md: "0px" },

          margin: "0 auto",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: "16px", color: "#EF6D58" }}
          >
            Faq
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "35px", md: "40px" },
              fontWeight: "800",
              color: "#391400;",
              paddingTop: "10px",
            }}
          >
            Frequently Asked <br /> Questions{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "13px", md: "16px" },
              color: "rgba(57, 20, 0, 0.64)",
              paddingTop: "30px",
            }}
          >
            A digital agency is a business you hire to outsource your <br />
            digital marketing efforts, instead of handling in-house.{" "}
          </Typography>
          <Button
            sx={{
              padding: "0px",
              color: "#391400",
              fontSize: "14px",
              paddingTop: "30px",
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Box sx={{ maxWidth: "570px" }}>
          <Accordion sx={{ backgroundColor: "#FDF0E9", padding: "10px 5px" }}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "22px",
                  color: "#391400",
                  fontWeight: "700",
                }}
              >
                A digital agency is a business
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgba(57, 20, 0, 0.64);",
                }}
              >
                Digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you hit your
                marketing goals and grow your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#FDF0E9", padding: "10px 5px" }}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "22px",
                  color: "#391400",
                  fontWeight: "700",
                }}
              >
                Hire to outsource your digital
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgba(57, 20, 0, 0.64);",
                }}
              >
                Digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you hit your
                marketing goals and grow your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#FDF0E9", padding: "10px 5px" }}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "22px",
                  color: "#391400",
                  fontWeight: "700",
                }}
              >
                Marketing efforts{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgba(57, 20, 0, 0.64);",
                }}
              >
                Digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you hit your
                marketing goals and grow your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "#FDF0E9", padding: "10px 5px" }}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "22px",
                  color: "#391400",
                  fontWeight: "700",
                }}
              >
                Can provide your business{" "}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgba(57, 20, 0, 0.64);",
                }}
              >
                Digital marketing efforts, instead of handling in-house. They
                can provide your business with a variety of digital solutions to
                promote your product or service online and help you hit your
                marketing goals and grow your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default FrequentlyAsked;
