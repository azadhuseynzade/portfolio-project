import { React } from "react";
import { useSwiper } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <Box
      sx={{
        width: "48px",
        height: "48px",
        border: "1px solid rgba(255, 255, 255, 0.295743)",
        borderRadius: "50%",
        textAlign: "center",
        cursor: "pointer",
        marginLeft: "16px",
      }}
    >
      <Box sx={{ marginTop: "10px" }}>
        <ArrowForwardIcon onClick={() => swiper.slideNext()} />
      </Box>
    </Box>
  );
}
