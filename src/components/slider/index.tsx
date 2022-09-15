
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "./styles.css";

import { data } from "./data";
import SwiperCore, { EffectCoverflow } from "swiper";

SwiperCore.use([EffectCoverflow]);

const AboutUs = () => {
  return (
    <section id="AboutUs" className="main__aboutUs__wrapper" >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        pagination={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img  src={item.image} alt={item.name}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="quote-parent">
        <div className="quote n-box1 flex-with-center">
          <h1>Quote?!</h1>
          <div className="quote-content">
            <p>“ Knowledge is power.” </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;