import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./styles.css";

function Slide() {
  const [slidePerview, setSlidePerView] = useState(1);
  const data = [
    {
      id: "1",
      image:
        "https://i.ibb.co/7JsKhntX/santa-casa-barra-da-tijuca.png",
    },
    {
      id: "2",
      image:
        "https://i.ibb.co/7JsKhntX/santa-casa-barra-da-tijuca.png",
    },
    {
      id: "3",
      image:
        "https://i.ibb.co/7JsKhntX/santa-casa-barra-da-tijuca.png",
    },
    {
      id: "4",
      image:
        "https://i.ibb.co/7JsKhntX/santa-casa-barra-da-tijuca.png",
    },
  ];

  return (
    <div className="container">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        slidesPerView={slidePerview}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slide" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;