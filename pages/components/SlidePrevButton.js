import { React } from "react";
import { useSwiper } from "swiper/react";
export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>Slide to the prev slide</button>
  );
}
