import React from "react";
import surveyImage from "../../assets/images/SurveyImage.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  //? Variant for the text content
  const textvariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  //? Variant for the button content
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  //? Variat for the image
  const imageVariant = {
    hidden: { opacity: 0, x: 50 }, //? Starts hidden and slightly to the right
    visible: {
      opacity: 1,
      x: 0, //? Animate to its natural position
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }, //? Delay slightly
    },
  };

  return (
    <div className="w-full sm:min-h-[40rem] mx-auto py-10 flex flex-col items-center justify-center sm:gap-3 gap-7 md:flex-col lg:flex-row ">
      <motion.div
        //? Animates the entire text container when it enters view
        initial="hidden"
        whileInView = "visible"
        viewport={{  amount: 0.3 }} //? Trigger when 30% of the container is in view
        className="sm:w-1/2 md:w-[70%] lg:w-1/2 sm:h-[31.8rem] lg:h-[28rem] flex flex-col items-center sm:flex sm:flex-col sm:items-start justify-center gap-8 px-5 py-7 md:flex md:flex-col md:items-center lg:flex lg:items-start"
      >
        <motion.h1
          variants={textvariants} //? Use variants for h1
          className="text-4xl md:text-5xl lg:text-6xl text-center md:text-center lg:text-start text-[#203C6E] font-inter font-medium hover:underline cursor-pointer sm:w:[85%] lg:w-[80%]"
        >
          AI-Powerd clarity for construction and beyond
        </motion.h1>

        <motion.p
          variants={textvariants}
          transition={{ delay: 0.2 }}
          className="text-center md:text-center lg:text-start lg:text-[22px] text-lg sm:text-2xl text-[#111B2D] font-sfpro font-normal max-w-[80%] leading-[100%] tracking-[-1px] hover:underline cursor-pointer"
        >
          Turn field reality into dicisions you can act on. See progress
          clearly, share it instantly, and move work forward.
        </motion.p>

        <motion.button
          variants={buttonVariants}
          transition={{ delay: 0.4 }}
          className="px-6 py-3 sm:px-9 sm:py-3 lg:px-9 lg:py-4 border rounded-[2.1rem] bg-gradient-to-r from-[#2763E5] via-[#0059FF] to-[#2087F4] text-lg leading-[100%] text-white font-sfpro font-medium"
        >
          Get a Custom quote
        </motion.button>
      </motion.div>
      <motion.img
        variants = {imageVariant}
        initial = "hidden"
        whileInView = "visible"
        viewport = {{ amount: 0.3}}

        src={surveyImage}
        alt=""
        className="h-[22rem] w-[23rem] sm:h-[25rem] md:h-[28rem] md:w-[28rem]"
      />
    </div>
  );
};

export default HeroSection;
