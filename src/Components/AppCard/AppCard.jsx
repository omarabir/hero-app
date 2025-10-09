import React from "react";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads } = app;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
        <figure className="px-5 pt-5 ">
          <img
            src={image}
            alt={title}
            className="rounded-xl aspect-square object-cover bg-gray-100 p-10"
          />
        </figure>
        <div className="card-body items-start text-left">
          <h2 className="card-title truncate w-full" title={title}>
            {title}
          </h2>
          <div className="flex justify-between w-full text-sm text-gray-500 mt-2">
            <div className="flex items-center space-x-1 bg-gray-100  px-2 py-1 rounded  text-green-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>{downloads}</span>
            </div>
            <div className="flex items-center space-x-1  bg-[#FFF0E1] px-2 py-1 rounded text-[#FF8811]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4  "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-2.667 5.4a1 1 0 01-.753.547l-5.962.867a1 1 0 00-.555 1.705l4.314 4.204a1 1 0 01.287.886l-1.017 5.94a1 1 0 001.451 1.054L10 18.25l5.325 2.798a1 1 0 001.451-1.054l-1.017-5.94a1 1 0 01.287-.886l4.314-4.204a1 1 0 00-.555-1.705l-5.962-.867a1 1 0 01-.753-.547l-2.667-5.4z" />
              </svg>
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
