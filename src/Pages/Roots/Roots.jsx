import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../../Components/Loading/Loading";

const Roots = () => {
  const navigation = useNavigation();

  return (
    <div className="bg-[#F5F5F5]">
      <Navbar />
      {navigation.state === "loading" && <Loading />}
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Roots;
