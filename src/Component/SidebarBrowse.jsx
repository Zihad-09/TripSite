import React, { useEffect, useState } from "react";
import Trips from "./Trips";

const SidebarBrowse = ({ category }) => {
  const [allTrips, setAllTrips] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("/trips.json")
      .then((res) => res.json())
      .then((data) => {
        setAllTrips(data);
        setTrips(data);
      });
  }, []);

  const handleCategory = (id) => {
    if (id === "all") {
      setTrips(allTrips);
    } else {
      const ftrips = allTrips.filter((trip) => trip.category === id);
      setTrips(ftrips);
    }
  };

  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-3"
          className="btn drawer-button btn-primary lg:hidden"
        >
          Trips Menu
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4">
          {trips.map((tr) => (
            <Trips key={tr.id} trips={tr} />
          ))}
        </div>
      </div>

      <div className="drawer-side rounded-2xl">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200  gap-5 text-lg min-h-full  w-72 p-4">
          {category.map((ct) => (
            <li key={ct.id} onClick={() => handleCategory(ct.id)}>
              <a className="uppercase border border-gray-300 ">{ct.name}</a>
            </li>
          ))}
          <li>
            <a
              onClick={() => handleCategory("all")}
              className="uppercase border border-gray-300 text-orange-500"
            >
              All Trips
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarBrowse;
