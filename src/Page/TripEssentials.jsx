import React from "react";

const TripEssentials = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-50 py-10 mt-10 px-5">
          <h2 className="text-4xl font-semibold text-[#ff643d] old text-center mb-8">
            Trip Essentials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md hover:cursor-pointer rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">
                Documents You’ll Need
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Valid passport (6+ months)</li>
                <li>Visa requirements</li>
                <li>Travel insurance papers</li>
              </ul>
            </div>

            <div className="bg-white shadow-md hover:cursor-pointer rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">What to Pack</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Weather-appropriate clothes</li>
                <li>Comfortable shoes</li>
                <li>Power adapter & charger</li>
                <li>Personal medicines</li>
              </ul>
            </div>

            <div className="bg-white hover:cursor-pointer shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">Money Matters</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Local currency info</li>
                <li>Cash vs card tips</li>
                <li>Budget-friendly advice</li>
              </ul>
            </div>

            <div className="bg-white hover:cursor-pointer shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">Health & Safety</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Vaccination requirements</li>
                <li>Emergency contacts</li>
                <li>Safety guidelines</li>
              </ul>
            </div>

            <div className="bg-white hover:cursor-pointer shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">Local Tips</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Common local phrases</li>
                <li>Cultural etiquette</li>
                <li>Food & drink highlights</li>
              </ul>
            </div>

            <div className="bg-white hover:cursor-pointer shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">Stay Connected</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>SIM card / roaming info</li>
                <li>Wi-Fi availability</li>
                <li>Useful travel apps</li>
              </ul>
            </div>

            <div className="bg-white hover:cursor-pointer shadow-md rounded-lg p-6 hover:shadow-xl transition">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-xl text-[#ff643d]  font-semibold mb-4">We’re Here to Help</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>24/7 helpline number</li>
                <li>Local guide contact</li>
                <li>Cancellation & refund policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripEssentials;
