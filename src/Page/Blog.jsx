import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto mt-12 mb-8 px-6">
        <div className="flex flex-col md:flex-row mb-4 items-center gap-5">
          <img
            className="rounded-lg w-full md:w-1/3"
            src="/src/assets/image/Boat.webp"
            alt=""
          />
          <p className="text-justify">
            Travel is not just about moving from one destination to another—it’s
            about experiencing new cultures, meeting people, and embracing
            nature. Every journey adds unforgettable memories that stay with us
            for a lifetime.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-5 gap-5">
          <img
            className="rounded-lg w-full md:w-1/3"
            src="/src/assets/image/island_views.webp"
            alt=""
          />
          <p className="text-justify">
            For those seeking something different, adventure tours are the
            perfect choice. Cycling through mountain trails, kayaking in rivers,
            or trekking deep into forests—every moment is filled with excitement
            and adrenaline.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5">
          <img
            className="rounded-lg w-full md:w-1/3"
            src="/src/assets/image/hiking.webp"
            alt=""
          />
          <p className="text-justify">
            To truly understand a place, you must taste its food. Local cuisine
            not only satisfies hunger but also tells the story of the region’s
            history and culture, making the journey even more meaningful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
