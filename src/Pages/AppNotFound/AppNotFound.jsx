import React from "react";
import notFound from '../../assets/App-Error.png'
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="text-center py-20">
      <div className="flex justify-center mb-8">
        <img
          src={notFound}
          alt="Not Found"
          className="max-w-xs"
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">OPPS!! APP NOT FOUND</h1>
      <p className="text-lg text-gray-600 mb-8">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to="/apps" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
};

export default AppNotFound;
