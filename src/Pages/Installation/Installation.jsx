import React, { useEffect, useState, useRef } from "react";
import { useLoaderData } from "react-router";
import { storedApp } from "../../Utility/addToDb";
import { toast } from "react-toastify";
import InstalledApp from "../../Components/InstalledApp/InstalledApp";
import { ChevronDown } from "lucide";
import { ChevronDownCircle } from "lucide-react";

const Installation = () => {
  const appsdata = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedAppData = storedApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const installed = appsdata.filter((app) =>
      convertedStoredApps.includes(app.id)
    );
    setInstalledApps(installed);
  }, [appsdata]);

  const handleSort = (order) => {
    setSort(order);
    setShowDropdown(false); // close dropdown after selection

    const sortedApps = [...installedApps].sort((a, b) => {
      const downloadsA = parseInt(a.downloads);
      const downloadsB = parseInt(b.downloads);

      if (order === "high-low") return downloadsB - downloadsA;
      if (order === "low-high") return downloadsA - downloadsB;
      return 0;
    });

    setInstalledApps(sortedApps);
  };

  const handleUninstall = (id) => {
    toast("Uninstalled successfully!");
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);

    const storedAppData = storedApp().filter(
      (storedId) => parseInt(storedId) !== id
    );
    localStorage.setItem("installed", JSON.stringify(storedAppData));
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-20">
  
      <div className="text-center mt-6 mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] mt-2 text-sm sm:text-base">
          Explore all trending apps on the market developed by us
        </p>
      </div>

   
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h4 className="text-lg font-medium">
          {installedApps.length} Apps Found
        </h4>

        <div className="relative" ref={dropdownRef}>
          <button
            className="btn btn-outline flex items-center gap-2 text-sm sm:text-base"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Sort by Downloads{" "}
            {sort ? `(${sort === "high-low" ? "High-Low" : "Low-High"})` : ""}
            <ChevronDownCircle className="w-4 h-4" />
          </button>

          {showDropdown && (
            <ul className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border border-gray-200 z-10">
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSort("high-low")}
                >
                  High-Low
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleSort("low-high")}
                >
                  Low-High
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

   
      <div className="grid grid-cols-1">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <InstalledApp
              key={app.id}
              app={app}
              handleUninstall={handleUninstall}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full mt-8">
            No App Found
          </p>
        )}
      </div>
    </div>
  );
};

export default Installation;
