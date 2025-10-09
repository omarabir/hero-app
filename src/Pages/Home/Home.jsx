import React from "react";
import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import TopApps from "../../Components/TopApps/TopApps";

const Home = () => {
  const appData = useLoaderData();
  console.log(appData);
  return (
    <div className="">
      <Banner></Banner>
      <TopApps appData={appData}></TopApps>
    </div>
  );
};

export default Home;
