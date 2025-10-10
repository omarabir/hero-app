import { Circle } from "lucide-react";
import React from "react";

const Loading = ({ size = 48, text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="12" cy="12" r="10" stroke="#e5e7eb" strokeWidth="4" />
        <path
          d="M22 12a10 10 0 00-10-10"
          stroke="#7c3aed"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-3 text-sm text-gray-500">{text}</p>
    </div>
  );
};

export default Loading;
