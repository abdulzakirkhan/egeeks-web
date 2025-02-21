import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image"; // If you're using Next.js

const technologies =["/Home/dev/Python.png","/Home/dev/react.png","/Home/dev/Mysql.png","/Home/dev/javascript.png","/Home/dev/Css.png","/Home/dev/Php.png"]

const TechSlider = () => {
  return (
    <section
      className="mt-24 pt-5 flex justify-center items-center bg-cover bg-no-repeat w-full h-96 bg-center"
      style={{ backgroundImage: "url(/Home/theme.png)" }}
    >
      <div className="container py-12 mx-auto px-6">
        <h1 className="text-2xl lg:text-5xl text-white text-center font-bold">
          Technologies we work with
        </h1>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="py-8"
        >
          {technologies.map((item, index) => (
            <SwiperSlide key={index} className="flex py-7 justify-center items-center">
              {/* <Image src={item} width={120} height={120} alt="Tech Logo" /> */}
              <Image src={item} width={`${index === 0 ? 300 : index === 1 ? 80 : index === 2 ? 110 : index === 3 ? 70 : index === 4 ? 110 : 120}`} height={120} alt="" className={`${index === 0 ? "mt-5" : ""}`} />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TechSlider;
