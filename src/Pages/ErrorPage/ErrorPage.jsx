import React from "react";
import errorImg from "../../assets/error-404.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-10">
      <div className="max-w-lg">
        <img src={errorImg} alt="" className="max-w-full h-auto " />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mt-8">
        Oops, page not found!
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mt-4 mb-8">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
