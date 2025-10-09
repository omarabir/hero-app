import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-10">
        <aside>
          <p>
            <span className="flex items-center gap-2 text-3xl font-bold">
              <img
                src={logo}
                alt="ACME Industries Ltd."
                className="w-14 my-4"
              />
              <h4> HERO.IO</h4>
            </span>
            HERO.IO Ltd.
            <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">Top Apps</a>
          <a className="link link-hover">New Releases</a>
          <a className="link link-hover">Editor's Choice</a>
          <a className="link link-hover">Categories</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Partnerships</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Developer Support</a>
          <a className="link link-hover">Report an Issue</a>
          <a className="link link-hover">FAQs</a>
        </nav>
      </div>
      <div className="text-center bg-neutral text-neutral-content">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO
          Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
