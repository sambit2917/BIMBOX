import React from "react";

const LowerFooter = () => {
  return (
    // Outer container for the lower footer content
    // Centered, responsive width, and padding
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mt-8">
      {/* Grid container for copyright and policies */}
      {/* Defaults to a single column on mobile, switches to 2 columns on medium screens */}
      <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4 text-xs sm:text-sm lg:text-base text-white font-sfpro font-normal items-center">
        {/* Copyright */}
        <div className="flex justify-center md:justify-start items-center">
          <p>© 2025 BIMBOX</p>
        </div>

        {/* Privacy Policy | Terms and Condition */}
        <div className="flex justify-center md:justify-end items-center">
          <p>Privacy Policy | Terms and Condition</p>
        </div>

        {/* Trademark Information */}
        {/* Takes full width on all screen sizes */}
        <div className="col-span-1 md:col-span-2 text-center md:text-left mt-4 text-xs sm:text-sm text-gray-400">
          <p>
            BIMBOX® and the BIMBOX Logo are registered trademarks of BIMBOX
            Labs, Inc. Trademarks marked with ® are registered in at least one
            of the following jurisdictions: United States, UK, EU, Switzerland
            or China; trademark status may vary in other countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LowerFooter;
