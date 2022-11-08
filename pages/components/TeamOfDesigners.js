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
            sx={{ color: "#EF6D58", fontSize: "16px" }}
          >
            Our Team
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: "56px",
              fontWeight: "800",
            }}
          >
            Team of Designers <br /> and Developers{" "}
          </Typography>
        </Box>
        <Box></Box>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
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
              display: "flex",
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
