import React from "react";

const Trips = ({ trips }) => {
  console.log(trips);
  const {
    title,description,rating,location,image
  } = trips;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
          className="w-full h-56"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            {description}
          </p>
          <div className="justify-start badge badge-outline">{location}</div>
          <div className="justify-end">Rating {rating}</div>
          <div className="card-actions justify-end">
            <button className="btn  bg-orange-500  hover:bg-orange-600 text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
