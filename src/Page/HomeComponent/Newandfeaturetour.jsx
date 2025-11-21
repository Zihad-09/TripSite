import React, { useEffect, useState } from "react";

const Newandfeaturetour = ({ title, limit }) => {
  const [tripsData, setTipsdata] = useState([]);
  useEffect(() => {
    fetch("/public/trips.json")
      .then((res) => res.json())
      .then((data) => setTipsdata(data));
  }, []);
  const visibleData = limit ? tripsData.slice(0, limit) : tripsData;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12 tracking-wide">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {visibleData.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-semibold text-xl drop-shadow-md">
                  {data.name}
                </h3>
                <p className="text-xs font-medium drop-shadow-md">
                  {data.duration} Days • From ${data.price}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-6">
              <span className="text-orange-600 text-sm font-medium uppercase">
                {data.category}
              </span>
              <p className="text-gray-600 mt-3 text-sm line-clamp-4">
                {data.description}
              </p>

              <div className="flex justify-end mt-6">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2 rounded-md text-sm font-semibold tracking-wide transition">
                  View Tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newandfeaturetour;
