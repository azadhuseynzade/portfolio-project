import { React } from "react";
import { useSwiper } from "swiper/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";
export default function SlidePrevButton() {
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
      }}
    >
      <Box sx={{ marginTop: "10px" }}>
        <ArrowBackIcon onClick={() => swiper.slideNext()} />
      </Box>
    </Box>
  );
}
