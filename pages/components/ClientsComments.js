import React from "react";
import { Box, Typography, Rating, Button } from "@mui/material";
import Image from "next/image";
import CommentPic1 from "../assets/commentPic1.svg";
import CommentPic2 from "../assets/comments(2).svg";
import CommentPic3 from "../assets/comments(3).svg";
import CommentPic4 from "../assets/comments(4).svg";
const ClientsComments = () => {
  return (
    <Box
      sx={{
        backgroundColor: " #FDF0E9",
        paddingTop: "120px",
        paddingBottom: "50px",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "#EF6D58", fontSize: "16px", textAlign: "center" }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#391400",
          fontSize: { xs: "40px", md: "56px" },
          textAlign: "center",
          fontWeight: "800",
        }}
      >
        What Our{" "}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#391400",
          fontSize: { xs: "40px", md: "56px" },
          textAlign: "center",
          fontWeight: "800",
          paddingBottom: { xs: "30px", md: "0px" },
        }}
      >
        Clients Saying
      </Typography>
      <Box
        sx={{
          maxWidth: "1050px",
          display: "flex",
          margin: "0 auto",
          flexWrap: "wrap",
          paddingTop: "60px",
          padding: { xs: "0px 20px", md: "60px 0px 0px 0px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "525px",
            padding: "48px ",
            border: "1px solid #F3D1BF",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Rating />
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(57, 20, 0, 0.64)",
              marginTop: "30px",
            }}
          >
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house. They can provide
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Box>
              <Image src={CommentPic1} width={48} height={48} alt="meta-img" />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#391400",
                  fontSize: { xs: "12px", md: "24px" },
                  fontWeight: "700",
                }}
              >
                Alan Martí
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#391400", fontSize: { xs: "12px", md: "16px" } }}
              >
                Meta Inc.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "525px",
            padding: "48px ",
            border: "1px solid #F3D1BF",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Rating />
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(57, 20, 0, 0.64)",
              marginTop: "30px",
            }}
          >
            Provide your business with a variety of digital solutions to promote
            your product or service online.
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Box>
              <Image src={CommentPic2} width={48} height={48} alt="meta-img" />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#391400",
                  fontSize: { xs: "12px", md: "24px" },
                  fontWeight: "700",
                }}
              >
                Richardo Kann{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#391400", fontSize: { xs: "12px", md: "16px" } }}
              >
                Photogram{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "525px",
            padding: "48px ",
            border: "1px solid #F3D1BF",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Rating />
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(57, 20, 0, 0.64)",
              marginTop: "30px",
            }}
          >
            A digital agency is a business you hire to outsource your digital
            marketing efforts, instead of handling in-house. They can provide
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Box>
              <Image src={CommentPic3} width={48} height={48} alt="meta-img" />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#391400",
                  fontSize: { xs: "12px", md: "24px" },
                  fontWeight: "700",
                }}
              >
                Graham Griffiths{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#391400", fontSize: { xs: "12px", md: "16px" } }}
              >
                Twitor{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "525px",
            padding: "48px ",
            border: "1px solid #F3D1BF",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "white" },
          }}
        >
          <Rating />
          <Typography
            sx={{
              fontSize: "16px",
              color: "rgba(57, 20, 0, 0.64)",
              marginTop: "30px",
            }}
          >
            Promote your product or service online and help you hit your
            marketing goals and grow your business.
          </Typography>
          <Box
            sx={{
              display: "flex",
              color: "white",
              marginTop: "30px",
            }}
          >
            <Box>
              <Image src={CommentPic4} width={48} height={48} alt="meta-img" />
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#391400",
                  fontSize: { xs: "12px", md: "24px" },
                  fontWeight: "700",
                }}
              >
                Maria Trofimova{" "}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#391400", fontSize: { xs: "12px", md: "16px" } }}
              >
                Whochat{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{
          display: "flex",
          margin: "0 auto",
          marginTop: "50px",
          color: " #391400",
          fontSize: "12px",
          fontWeight: "800",
          backgroundColor: "white",
          padding: "10px 30px",
        }}
      >
        See All
      </Button>
    </Box>
  );
};

export default ClientsComments;
