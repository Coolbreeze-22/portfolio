import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { breakPoints } from "./utils/breakPoints";
import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";

const Swipe = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerGroup={1}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".about-button-next",
        prevEl: ".about-button-prev",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      breakpoints={breakPoints}
    >
      <SwiperSlide>
        <img
          src={portfolio1}
          alt="loading"
          loading="lazy"
          className="w-[100%] sm:w-[80%] h-60 sm:h-50 mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={portfolio2}
          alt="loading"
          loading="lazy"
          className="w-[100%] sm:w-[80%] h-60 sm:h-50 mx-auto"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={portfolio3}
          alt="loading"
          loading="lazy"
          className="w-[100%] sm:w-[80%] h-60 sm:h-50 mx-auto"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe;
