import React from "react";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads } = app;
  return (
    <div className="w-full max-w-xs sm:max-w-sm">
      <div className="card bg-base-100 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <figure className="px-6 pt-6">
          <img
            src={image}
            alt={title}
            className="rounded-xl aspect-square object-cover w-full h-auto"
          />
        </figure>

        <div className="card-body items-start text-left p-5">
          <h2
            className="card-title text-base sm:text-lg font-semibold truncate w-full"
            title={title}
          >
            {title}
          </h2>

          <div className="flex justify-between w-full text-xs sm:text-sm text-gray-600 mt-3">
            <div className="flex items-center space-x-1 bg-[#E6F0FF] text-green-600 px-2 py-1 rounded-md">
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

            <div className="flex items-center space-x-1 text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#FF8811]"
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
