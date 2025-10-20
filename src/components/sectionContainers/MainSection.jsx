import React from "react";
import { motion } from "framer-motion";

const MainSection = () => {
  //? Define animation variants
  const headingVariants = {
    hidden: {opacity: 0, y: 0},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.7, ease: "easeOut"}
    },
  };

  const paragraphBoxVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.7, ease: "easeOut", delay: 0.2}
    },
  };

  return (
    <div className="w-full sm:min-h-[50rem] lg:min-h-[30rem] py-14 flex items-center justify-center bg-[#F2F6FA] mx-auto">
      <div className="flex flex-col px-5 md:flex md:flex-col sm:flex sm:flex-row sm:items-center sm:justify-center lg:flex lg:flex-row gap-5">
        <motion.div
          initial = "hidden"
          whileInView = "visible"
          viewport = {{amount: 0.5}}
          className="sm:w-[40%] md:w-full lg:w-[40%]"
        >
          <motion.h1
            variants = {headingVariants}
            className="text-4xl text-center sm:text-[60px] md:text-5xl lg:text-[60px] text-[#0059FF] font-inter font-bold leading-[112%] tracking-[-1px] cursor-pointer hover:underline"
          >
            Build with clarity, not Guesswork
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial = "hidden"
          whileInView = "visible"
          viewport = {{amount: 0.5}}
          variants = {paragraphBoxVariants}
          className="bg-[#ffffff] md:w-[80%] md:h-[30rem] sm:w-[50%] sm:h-[34.7rem] lg:h-[28rem] lg:w-[40%] py-7 px-10 sm:px-14 sm:py-16 rounded-[3.3rem]"
        >
          <p className="text-2xl md:text-3xl sm:text-[40px] lg:text-[40px] text-[#203C6E] font-sfpro font-normal leading-[129%] tracking-[-1px] hover:underline cursor-pointer">
            Projects are fast, complex, and constantly changing. Our platform
            transforms raw field{" "}
            <span className="text-[#ccd2d8]">
              capture into living jobsite context—so teams see what’s happening
              now, spot what’s at risk, and keep momentum without the
              back-and-forth.
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MainSection;
