import React from "react";
import { Link } from "react-router";
import bannerImg from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
        {" "}
        We Build <br />{" "}
        <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="text-[#627382] mt-3 mb-4 text-sm sm:text-base">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br className="hidden sm:block" />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className="flex gap-4 mt-4 justify-center mb-4">
        <Link to="https://play.google.com/store/apps?hl=en">
          <button className="flex items-center gap-2 bg-gray-100 text-black py-3 px-6 rounded-xl hover:bg-gray-200 transition border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
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
            Google Play
          </button>
        </Link>
        <Link to="https://www.apple.com/store">
          <button className="flex items-center gap-2 bg-gray-100 text-black py-3 px-6 rounded-xl hover:bg-gray-200 transition border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <g clipPath="url(#clip0_1_716)">
                <path
                  d="M26.0328 0.00201416H6.96319C3.39163 0.00201416 0.5 2.89364 0.5 6.4652V25.5388C0.5 29.1064 3.39163 31.998 6.96319 31.998H26.0368C29.6044 31.998 32.5 29.1064 32.5 25.5348V6.4652C32.496 2.89364 29.6044 0.00201416 26.0328 0.00201416Z"
                  fill="url(#paint0_linear_1_716)"
                />
                <path
                  d="M16.3619 7.35309L17.0099 6.23321C17.4098 5.53328 18.3017 5.29734 19.0016 5.69728C19.7016 6.09721 19.9375 6.98909 19.5376 7.68903L13.2943 18.4957H17.8097C19.2736 18.4957 20.0934 20.2155 19.4576 21.4073H6.21924C5.41137 21.4073 4.76343 20.7594 4.76343 19.9515C4.76343 19.1437 5.41137 18.4957 6.21924 18.4957H9.9308L14.6822 10.2607L13.1984 7.68503C12.7985 6.98509 13.0344 6.10121 13.7344 5.69328C14.4343 5.29334 15.3182 5.52928 15.7261 6.22921L16.3619 7.35309Z"
                  fill="white"
                />
                <path
                  d="M10.7466 22.9071L9.34682 25.3348C8.94688 26.0348 8.05501 26.2707 7.35507 25.8708C6.65513 25.4708 6.41919 24.579 6.81913 23.879L7.85901 22.0793C9.03482 21.7153 9.99069 21.9953 10.7466 22.9071Z"
                  fill="white"
                />
                <path
                  d="M22.8011 18.5037H26.5886C27.3965 18.5037 28.0444 19.1517 28.0444 19.9595C28.0444 20.7674 27.3965 21.4153 26.5886 21.4153H24.4849L25.9047 23.879C26.3046 24.579 26.0687 25.4628 25.3688 25.8708C24.6688 26.2707 23.7849 26.0348 23.377 25.3348C20.9853 21.1873 19.1895 18.0838 17.9977 16.016C16.7778 13.9123 17.6498 11.8005 18.5096 11.0847C19.4656 12.7245 20.8934 15.2002 22.8011 18.5037Z"
                  fill="white"
                />
              </g>
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
                <clipPath id="clip0_1_716">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            App Store
          </button>
        </Link>
      </div>

      <div>
        <img src={bannerImg} alt="" className="mx-auto" />
      </div>
      <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] mx-auto flex flex-col justify-center text-white rounded-xl p-8 mb-4">
        <h2 className="text-center text-4xl font-extrabold mb-8">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center">
          <div className="p-4 ">
            <p className="font-light">Total Downloads</p>
            <h2 className="text-4xl font-extrabold my-4">29.6M</h2>
            <p className="font-light"> 21% more than last month</p>
          </div>

          <div className="p-4 ">
            <p className="font-light">Total Reviews</p>
            <h2 className="text-4xl font-extrabold my-4">906K</h2>
            <p className="font-light">46% more than last month</p>
          </div>

          <div className="p-4">
            <p className="font-light">Active Apps</p>
            <h2 className="text-4xl font-extrabold my-4">132+</h2>
            <p className="font-light">31 more will launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
