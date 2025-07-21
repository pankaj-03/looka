import carousal1 from "../assets/carousal1.jpg"
import carousal2 from "../assets/carousal2.jpg"
import carousal3 from "../assets/carousal3.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  carousal1,
  carousal2,
  carousal3
]
const Carousal = () => {
  return (
    <section className="relative z-10">
      <div className="mt-20 md:p-0 p-4">

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000 }}
          loop={true}
          onInit={(swiper) => {
            swiper.params.pagination.el = ".custom-pagination";
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }}
          className="w-full lg:h-[600px] md:h-[350px] rounded-lg overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`carousal${index + 1}`}
                className="w-full h-full object-fit"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-8 flex justify-center space-x-2"></div>
      </div>


    </section>
  )
}

export default Carousal
