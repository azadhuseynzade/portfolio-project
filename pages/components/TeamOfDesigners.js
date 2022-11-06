import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/Swiper.module.css";
//
import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import SwiperPic1 from "../assets/swiperPic1.svg";
import SwiperPic2 from "../assets/swiperPic2.svg";
import SwiperPic3 from "../assets/swiperPic3.svg";
import SwiperPic4 from "../assets/swiperPic4.svg";
const TeamOfDesigners = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#28293E",
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#EF6D58", fontSize: "16px", marginLeft: "30px" }}
        >
          Our Team
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontSize: "56px",
            fontWeight: "800",
            marginLeft: "30px",
          }}
        >
          Team of Designers <br /> and Developers{" "}
        </Typography>
        <Box sx={{ paddingBottom: "40px" }}>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            style={{ paddingBottom: "40px" }}
          >
            <SwiperSlide>
              <Image src={SwiperPic1} alt="swiperImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SwiperPic4} alt="swiperImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SwiperPic3} alt="swiperImg" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={SwiperPic4} alt="swiperImg" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamOfDesigners;
