import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const Roots = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
