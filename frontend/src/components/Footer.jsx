import React from "react";
import { assets, footer_data } from "../Assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between py-10 gap-10 border-grey-500/30 text-gray-500 border-b">
        <div>
          <img
            src={assets.blogie}
            alt="blogie logo"
            className="w-20 h-20 sm:w-44 object-contain"
          />
          <p className="max-w-102.5 mt-6">
            Blogie is a place to explore ideas on productivity, discipline,
            technology, and personal growth. Read, learn, and stay locked in.
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="text-primary text-center py-4 text-sm md:text-base">
        &copy; {new Date().getFullYear()} Blogie. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
