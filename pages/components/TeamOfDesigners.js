import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/Swiper.module.css";
//
import React, { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import SwiperPic1 from "../assets/swiperPic1.svg";
import SwiperPic2 from "../assets/swiperPic2.svg";
import SwiperPic3 from "../assets/swiperPic3.svg";
import SwiperPic4 from "../assets/swiperPic4.svg";
import { useSwiper } from "swiper/react";
import SlideNextButton from "./SlideNextButton";
import SlidePrevButton from "./SlidePrevButton";
import { margin } from "@mui/system";
const TeamOfDesigners = () => {
  const [swiper, setSwiper] = useState(null);

  const nexto = () => {
    swiper.slideNext();
  };
  return (
    <Box
      sx={{
        backgroundColor: "#28293E",
      }}
    >
      <Box
        sx={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EF6D58",
              fontSize: "16px",
              marginLeft: { xs: "30px", md: "0px" },
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "40px", md: "56px" },
              fontWeight: "800",
              marginLeft: { xs: "30px", md: "0px" },
            }}
          >
            Team of Designers <br /> and Developers{" "}
          </Typography>
        </Box>

        <Swiper
          slidesPerView="auto"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 20,
              slidesPerGroup: 4,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          style={{
            paddingBottom: "40px",
            backgroundColor: "#28293E",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              justifyContent: "flex-end",
              color: " #FFFFFF",
              marginBottom: "40px",
            }}
          >
            <SlidePrevButton />
            <SlideNextButton />
          </Box>

          <Box>
            <Typography variant="h1">hello</Typography>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: {
                      xs: "0px 30px ",
                      md: "20px 30px 0px 30px",
                    },
                    margin: { xs: "0px 20px", md: "0px" },
                    marginTop: { xs: "50px", md: "0px" },
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                    marginLeft: { xs: "30px", md: "0px" },
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                    marginLeft: { xs: "30px", md: "0px" },
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    border: "1px solid #3A3C56",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "6px",
                    padding: "20px 30px 0px 30px",
                  }}
                >
                  <Image
                    src={SwiperPic1}
                    alt="swiperImg"
                    width={196}
                    height={247}
                  />
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: "white",
                    marginTop: "22px",
                  }}
                >
                  Azah Anyeni
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(255, 255, 255, 0.64);",
                    marginTop: "5px",
                  }}
                >
                  Designer
                </Typography>
              </Box>
            </SwiperSlide>
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};

export default TeamOfDesigners;
