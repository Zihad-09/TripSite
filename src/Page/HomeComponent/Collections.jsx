import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Collections = () => {
  const [tripsData, setTripsData] = useState([]);

  useEffect(() => {
    fetch("/trips.json")
      .then((res) => res.json())
      .then((data) => setTripsData(data));
  }, []);

  return (
    <div className="w-full py-16">
      <h1 className="text-center mb-12 font-bold text-4xl md:text-5xl text-gray-800 tracking-wide">
        COLLECTIONS
      </h1>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={25}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full px-6 pb-10"
      >
        {tripsData.slice(0, 6).map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group">
              <img
                src={item.image}
                alt="Tour"
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-5 text-center">
                <h3 className="text-orange-600 font-bold text-lg">
                  {item.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Collections;
