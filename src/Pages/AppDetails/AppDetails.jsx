import Download from "../../assets/icon-downloads.png";
import ratingsicon from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";
import { addToStoredDB, storedApp } from "../../Utility/addToDb";

const AppDetails = () => {
  const { id } = useParams();
  const appID = parseInt(id);
  const appData = useLoaderData();
  const app = appData.find((item) => item.id === appID);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = storedApp(); // get installed app IDs
    if (installedApps.includes(appID)) {
      setInstalled(true);
    }
  }, [appID]);

  const {
    image,
    title,
    downloads,
    ratingAvg,
    reviews,
    companyName,
    size,
    description,
    ratings,
  } = app;

  const formattedRatings = ratings
    .map((r) => {
      let count = r.count.toLowerCase().includes("k")
        ? parseFloat(r.count) * 1000
        : parseFloat(r.count);
      return { ...r, count };
    })
    .reverse();

  const handleInstall = (id) => {
    if (!installed) {
      toast("✅ Installed");
      setInstalled(true);
      addToStoredDB(id);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl shadow-lg object-cover"
          />
        </div>

        <div className="flex-grow text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <p className="text-base sm:text-lg text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-primary font-semibold">{companyName}</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
            <div className="flex flex-col items-center">
              <img src={Download} className="w-7 sm:w-8" alt="Downloads" />
              <div className="text-lg sm:text-xl font-bold">{downloads}</div>
              <div className="text-xs sm:text-sm text-gray-500">Downloads</div>
            </div>

            <div className="hidden lg:block divider lg:divider-horizontal"></div>

            <div className="flex flex-col items-center">
              <img
                src={ratingsicon}
                className="w-7 sm:w-8"
                alt="Average Ratings"
              />
              <div className="text-lg sm:text-xl font-bold flex items-center gap-1">
                {ratingAvg}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Avg. Rating
              </div>
            </div>

            <div className="hidden lg:block divider lg:divider-horizontal"></div>
            <div className="flex flex-col items-center">
              <img src={review} className="w-7 sm:w-8" alt="Total Reviews" />
              <div className="text-lg sm:text-xl font-bold">{reviews}</div>
              <div className="text-xs sm:text-sm text-gray-500">Reviews</div>
            </div>
          </div>

          <button
            className={`mt-6 w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition 
            ${installed ? "opacity-70 cursor-not-allowed" : ""}`}
            onClick={() => handleInstall(id)}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </section>

      <div className="mt-10 w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">
          Ratings Breakdown
        </h2>
        <div className="w-full h-64 sm:h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={formattedRatings}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip
                formatter={(value) => new Intl.NumberFormat().format(value)}
              />
              <Bar dataKey="count" fill="#FF8811" radius={[0, 6, 6, 0]}>
                <LabelList
                  dataKey="count"
                  position="right"
                  formatter={(value) => new Intl.NumberFormat().format(value)}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
