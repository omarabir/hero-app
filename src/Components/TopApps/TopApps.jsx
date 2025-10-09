import React from "react";
import AppCard from "../AppCard/AppCard";
import { Link } from "react-router";

const TopApps = ({ appData }) => {
  return (
    <section>
      <div className="text-center mt-20 mb-12">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p className="text-lg text-base-content/70 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
        {appData.slice(0, 8).map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/apps"
          className="btn text-xl  text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] px-10"
        >
          Show All
        </Link>
      </div>
    </section>
  );
};

export default TopApps;
