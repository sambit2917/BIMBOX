import React from "react";
import { motion } from "framer-motion";

const MissonSection = () => {
  const sideInfromRight = {
    hidden: {opacity: 0, x: 100},
    visible: {
      opacity: 1, 
      x: 0,
      transition: {duration: 0.7, ease: "easeOut"}
    },
  };

  const sideInfromLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full min-h-[50rem] flex flex-col items-center justify-center gap-8 px-5 md:py-16 md:px-10 lg:py-24 lg:px-20 relative  overflow-hidden">
      {/* Vision Box */}
      <motion.div
        variants={sideInfromRight}
        initial="hidden"
        whileInView="visible"
        // viewport={{ amount: 0.5 }}
        className="bg-[#0058FF] text-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[30px] w-full sm:w-[90%] md:w-[80%] lg:h-[25rem] lg:w-[45%] xl:w-[40%] py-8 px-6 sm:py-10 sm:px-10 md:py-12 md:px-12 lg:px-14 lg:py-16 z-20 lg:mr-[13rem] lg:self-end shadow-lg lg:border-white lg:border-[1rem] "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-semibold mb-3 font-sfpro">
          Our Vision
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[1rem] font-normal leading-relaxed font-inter">
          To be the global leader in transforming physical sites into
          intelligent digital ecosystems—where every structure has a living
          digital twin that drives sustainability, collaboration, and innovation
          across design, construction, and operations.
        </p>
      </motion.div>

      {/* Mission Box */}
      <motion.div
        variants={sideInfromLeft}
        initial="hidden"
        whileInView="visible"
        // viewport={{ amount: 0.5 }}
        className="bg-[#0059FF] text-white rounded-[20px] sm:rounded-[30px] md:rounded-[40px] lg:rounded-[30px] w-full sm:w-[90%] md:w-[80%] lg:w-[45%] lg:h-[25rem] xl:w-[40%] py-8 px-6 sm:py-10 sm:px-10 md:py-12 md:px-12 lg:px-14 lg:py-16 z-10 lg:ml-[10rem] lg:self-start mt-10 lg:-mt-[10rem] shadow-lg "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2rem] font-semibold mb-3 font-sfpro">
          Our Mission
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-[1rem] font-normal leading-relaxed font-inter">
          To empower the construction and infrastructure industry with
          cutting-edge digital solutions by capturing real-world conditions,
          converting them into intelligent BIM models, and enabling seamless
          digital twin integration. We are committed to accuracy, efficiency,
          and innovation.
        </p>
      </motion.div>
    </div>
  );
};

export default MissonSection;
