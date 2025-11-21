import React, { useState, useEffect } from "react";
import trips from "../../public/trips.json";
import { IoCalendarOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineDirectionsBike } from "react-icons/md";

const TripCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % trips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[70vh] w-full">
      {/* Background Image */}
      <img
        src={trips[current].image}
        alt=""
        className="w-full h-full object-cover rounded-2xl shadow-md transition-all duration-[3000ms]"
      />

      {/* Search Box */}
      <div className="absolute -bottom-14 w-full flex justify-center px-4">
        <div
          className="backdrop-blur-xl bg-white/80 border border-orange-400 shadow-xl 
    rounded-2xl w-full max-w-4xl py-6 flex flex-col gap-4 items-center"
        >
          {/* Title */}
          <p className="text-xl md:text-2xl text-orange-600 font-bold">
            LET'S PLAN YOUR PERFECT TRIP
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-base md:text-lg">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition duration-300 cursor-pointer">
              <IoLocationOutline className="text-orange-500 group-hover:text-white" />{" "}
              Location
            </button>

            <button className="flex items-center gap-2 px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition duration-300 cursor-pointer">
              <IoCalendarOutline className="text-orange-500 group-hover:text-white" />{" "}
              Dates
            </button>

            <button className="flex items-center gap-2 px-4 py-2 hover:bg-orange-500 hover:text-white rounded-md transition duration-300 cursor-pointer">
              <MdOutlineDirectionsBike className="text-orange-500 group-hover:text-white" />{" "}
              Tour Type
            </button>
          </div>

          {/* Button */}
          <button
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold 
      hover:bg-orange-600 transition duration-300 shadow-md"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCarousel;
