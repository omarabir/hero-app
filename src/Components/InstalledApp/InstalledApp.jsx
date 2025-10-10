import React from "react";

const InstalledApp = ({ app, handleUninstall }) => {
  const { id, image, title, downloads, ratingAvg, size } = app;
  return (
    <div>
      <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm mt-4 mb-4">
        <div className="w-14 h-14 rounded-lg bg-gray-200 mr-4">
          <img src={image} alt="" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg mb-1">{title}</div>
          <div className="flex items-center space-x-3 text-sm">
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
            <span className="text-gray-500">{size} MB</span>
          </div>
        </div>
        <button
          onClick={() => handleUninstall(id)}
          className="ml-4 bg-green-400 hover:bg-green-500 text-white font-semibold rounded px-5 py-2 transition"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledApp;
