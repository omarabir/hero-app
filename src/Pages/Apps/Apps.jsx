import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../../Components/AppCard/AppCard";
import AppNotFound from "../AppNotFound/AppNotFound";
import Loading from "../../Components/Loading/Loading";

const Apps = () => {
  const allAppsData = useLoaderData();
  const [searchItem, setSearchItem] = useState("");
  const [searching, setSearching] = useState(false);

  const filteredApps = allAppsData.filter((app) => {
    return app.title.toLowerCase().includes(searchItem.toLowerCase());
  });
  useEffect(() => {
    if (searchItem === "") {
      setSearching(false);
      return;
    }

    setSearching(true);
    const id = setTimeout(() => setSearching(false), 400); // debounce
    return () => clearTimeout(id);
  }, [searchItem]);

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
      {searching ? (
        <Loading text={`Searching for "${searchItem}"...`} />
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <AppNotFound />
      )}
    </div>
  );
};

export default Apps;
