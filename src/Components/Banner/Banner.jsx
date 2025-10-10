import React from "react";
import { Link } from "react-router";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <section className="text-center px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
        We Build <br />
        <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      {/* Subtext */}
      <p className="text-[#627382] mt-3 mb-6 text-sm sm:text-base leading-relaxed">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br className="hidden sm:block" />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 mb-6">
        {/* Google Play */}
        <Link to="https://play.google.com/store/apps?hl=en" target="_blank">
          <button
            className="flex items-center justify-center gap-2 bg-gray-100 text-black 
              py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-gray-200 transition border w-48 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M4.53711 0.734506L22.5478 11.1302L29.4817 15.136C30.1323 15.5274 30.1376 16.4626 29.4918 16.8591L29.4613 16.8796L4.55227 31.2606L4.53182 31.2707C4.27775 31.4131 3.99817 31.4283 3.7542 31.3571C3.34758 31.2351 3.0271 30.8641 3.0271 30.3812V1.61896C3.0271 1.13607 3.34734 0.765063 3.7542 0.643078C4.00322 0.571619 4.2828 0.587018 4.53711 0.734506Z"
                fill="#47BCFF"
              />
              <path
                d="M4.53707 0.734321L22.5478 11.13L18.0235 16L3.75415 0.642652C4.00317 0.571434 4.28275 0.586832 4.53707 0.734321Z"
                fill="#0BDF74"
              />
              <path
                d="M22.5477 11.13L29.4816 15.1358C30.1322 15.5272 30.1375 16.4625 29.4917 16.859L29.4612 16.8794L22.5477 20.8647L18.0234 16L22.5477 11.13Z"
                fill="#FDBA21"
              />
              <path
                d="M18.0235 16L22.5478 20.865L4.55223 31.2606L4.53177 31.2707C4.2777 31.4132 3.99812 31.4283 3.75415 31.3571L18.0235 16Z"
                fill="#FB434C"
              />
            </svg>
            <span className="text-sm sm:text-base font-medium">
              Google Play
            </span>
          </button>
        </Link>

        {/* App Store */}
        <Link to="https://www.apple.com/store" target="_blank">
          <button
            className="flex items-center justify-center gap-2 bg-gray-100 text-black 
              py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-gray-200 transition border w-48 sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 33 32"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="paint0_linear_1_716"
                  x1="16.5"
                  y1="0.00201416"
                  x2="16.5"
                  y2="31.998"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00BFFC" />
                  <stop offset="1" stopColor="#0073F6" />
                </linearGradient>
              </defs>
              <rect
                width="32"
                height="32"
                rx="6"
                fill="url(#paint0_linear_1_716)"
              />
              <path
                d="M15.5 10L17 12.5L12 21H15.5C17.1 21 18 22.9 17 24H9.5C8.5 24 7.7 23.2 7.7 22.2C7.7 21.2 8.5 20.4 9.5 20.4H12L15.5 10Z"
                fill="white"
              />
            </svg>
            <span className="text-sm sm:text-base font-medium">App Store</span>
          </button>
        </Link>
      </div>

      {/* Banner Image */}
      <div className="flex justify-center">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-contain mx-auto"
        />
      </div>

      <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white rounded-xl p-6 sm:p-8 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <p className="font-light">Total Downloads</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold my-2">29.6M</h3>
            <p className="font-light">21% more than last month</p>
          </div>

          <div>
            <p className="font-light">Total Reviews</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold my-2">906K</h3>
            <p className="font-light">46% more than last month</p>
          </div>

          <div>
            <p className="font-light">Active Apps</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold my-2">132+</h3>
            <p className="font-light">31 more will launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
