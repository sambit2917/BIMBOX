import React, { useState } from "react";
import { motion, spring } from "framer-motion";
import { NavLink } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 w-full">
      {/* Main Content Area */}
      <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-11  mx-auto">
        {/* Welcome Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }} //? Start hidden and slightly above
          animate={{ opacity: 1, y: 0 }} //? animate to visible and original position
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-blue-800 leading-tight sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
        >
          {" "}
          {/* Makes h1 as a motion component*/}
          Welcome to Our HomeSite!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }} //? Start hidden and slightly below
          animate={{ opacity: 1, y: 0 }} //? Animate to visible and original position
          transition={{ duration: 0.8, delay: 0.2 }} //? Add a slightly delay after h1
          className="text-lg text-gray-700 sm:text-xl md:text-2xl lg:text-2xl max-w-3xl mx-auto"
        >
          Discover amazing features and start your journey with us
        </motion.p>

        {/* Get Started Button */}
        <NavLink to="/homeSection" className={`block`}>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: spring,
              stiffness: 200,
            }} //? Spring physic for a bouncy feel
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pop-in text-base sm:text-lg md:text-xl"
          >
            Get Started
          </motion.button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
