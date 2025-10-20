import React from "react";

const MidFooter = () => {
  const socialLinks = ["Facebook", "Instagram", "LinkedIn", "Youtube", "X"];
  return (
    <div className="text-white sm:w-auto md:w-auto lg:w-full mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center text-center">
        {/* Address */}
        <p className="text-base text-gray-300 text-center">
          333 Kearny St. Floor 4, San Francisco, CA 94108
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300"> 
          <span className="font-medium text-base">Social Links</span>
          {socialLinks.map((link, index) => (
            <span
              key={index}
              className="hover:text-white cursor-pointer border-b border-transparent hover:border-white transition"
            >
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-700 mx-4"></div>
    </div>
  );
};

export default MidFooter;
