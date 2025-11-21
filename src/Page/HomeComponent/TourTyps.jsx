import React, { useEffect, useState } from "react";

const TourTyps = () => {
  const [categoryData, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  console.log(categoryData);
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12 tracking-wide">
        TOUR TYPES
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {categoryData.slice(0, 4).map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h2 className="text-orange-500 font-bold text-xl hover:text-orange-600 transition cursor-pointer">
                {data.name}
              </h2>

              <p className="text-gray-600 mt-3 text-sm line-clamp-4">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourTyps;
