import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-6 px-5 lg:px-87 text-center items-center md:text-left">
          <p className="text-4xl mt-20 font-semibold text-[#666666]">ABOUT US</p>
          <p className="text-gray-700">
            Tripsite is your comprehensive marketplace for active holidays in
            Europe, Asia, and beyond, showcasing hundreds of tours for the
            adventurous vacationer, including bike and boat tours, bike tours,
            hiking adventures, small ship cruises, birdwatching, and
            multi-adventure experiences! Offering a diverse portfolio, we have
            tours to fit any budget, from luxury to value, and tours to suit any
            interest, including history, culture, and gastronomy. Custom-made
            tours are possible as well! Founded in 1999, we are still
            family-owned and operated. Our focus then, and our focus now, is to
            share our love of travel, and to help you find the perfect tour for
            you.
          </p>
        </div>
        <div className="mt-30">
          <p className="text-4xl font-semibold text-[#666666] text-center">
            DESTINATIONS
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-10 text-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`
          flex flex-col text-[#fe653d] space-y-2
          ${i > 1 ? "hidden lg:flex" : "flex"} 
        `}
              >
                {[...Array(10)].map((_, j) => (
                  <a key={j} href="#">
                    Albeniya
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 py-6 border-t border-[#666666] bg-gray-100">
          <div className="flex flex-wrap justify-center gap-6 container mx-auto">
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F1-aca.png"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F2.png"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F3.png"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F4.jpg"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F5.png"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F6.png"}
              alt=""
            />
            <img
              className="w-20 h-20 object-contain"
              src={"/src/assets/image/F7.png"}
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#212121]">
          <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-5 gap-8 text-white">
            <div className="flex justify-center md:justify-start">
              <img
                className="w-40"
                src={"/src/assets/image/Logo.png"}
                alt="Logo"
              />
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-2xl mb-4 font-semibold">ABOUT US</p>
              <a href="#">About Us</a>
              <a href="#">About Us</a>
              <a href="#">About Us</a>
              <a href="#">About Us</a>
              <a href="#">About Us</a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-2xl mb-4 font-semibold">BLOG</p>
              <a href="#">Ireland by Road and Bike: A Sisters</a>
              <a href="#">Journey Through the Emerald Isle</a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-2xl mb-4 font-semibold">COLLECTIONS</p>
              {[...Array(12)].map((_, i) => (
                <a key={i} href="#">
                  Discounts/Specials
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-2xl mb-4 font-semibold">SUBSCRIBE</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-3 w-full">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
              />
              <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#121212]">
          <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
            <p>© Tripsite 2025 All rights reserved</p>
            <div className="flex gap-5 mt-3 md:mt-0">
              <a href="#" className="hover:text-orange-500">
                Cookie Preferences
              </a>
              <a href="#" className="hover:text-orange-500">
                Terms + Conditions
              </a>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
