import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";

const Apps = () => {
  const allAppsData = useLoaderData();
  const [searchItem, setSearchItem] = useState("");

  const filteredApps = allAppsData.filter((app) => {
    return app.title.toLowerCase().includes(searchItem.toLowerCase());
  });
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Our All Applications
        </h1>
        <p className="mt-4 max-w-2xl mx-auto  text-sm sm:text-base text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-xl font-semibold">
          ({filteredApps.length}) Apps Found
        </h3>
        <div className="form-control w-full md:w-auto">
          <input
            type="text"
            placeholder="Search apps"
            className="input input-bordered w-full md:w-64"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="h-screen">
          <div className="text-center mt-4 mb-4">
            <h2 className="text-3xl font-bold">OPPS!! NO APPs FOUND</h2>
            <p className="text-[#627382]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Link to="/">
              <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded mt-2">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Apps;
