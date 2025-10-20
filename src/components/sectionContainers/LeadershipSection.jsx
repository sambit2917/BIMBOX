import React from "react";
import ceoImage from "../../assets/images/ceoImage.png";
import ctoImage from "../../assets/images/ctoImage.png";
import vpImage from "../../assets/images/vpImage.png";
import { motion } from "framer-motion";

const LeadershipSection = () => {
  const imageData = [
    {
      image: ceoImage,
      name: "Deep Samal",
      deg: "CEO & Co-founder",
    },
    {
      image: ctoImage,
      name: "Deep Samal",
      deg: "CTO & Co-founder",
    },
    {
      image: vpImage,
      name: "Deep Samal",
      deg: "VP Product",
    },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-5 py-10">
      <motion.h1
        variants = {headingVariant}
        initial = "hidden"
        whileInView = "visible"
        viewport = {{amount: 0.5}} 
        className="text-3xl md:text-5xl sm:text-7xl text-[#0059FF] font-inter font-semibold md:w-[50%] text-center">
        Leaders in BIM,AI, and construction
      </motion.h1>

      <div className="flex flex-col gap-5 md:flex md:gap-10 lg:flex lg:flex-row justify-around py-12 px-10 md:px-[6rem]">
        {imageData.map((ele, i) => {
          return (
            <motion.div
              variants = {cardVariant}
              initial = "hidden"
              whileInView = "visible"
              viewport = {{amount: 0.4}}
              key={i}
              className="flex flex-col justify-center items-center gap-5 py-6"
            >
              <img
                src={ele.image}
                alt={i}
                className="lg:h-[20rem] w-[15rem] lg:w-[20rem] rounded-[42px]"
              />
              <h1 className="text-3xl md:text-5xl text-[#0059FF] font-inter font-normal leading-[112.00000000000001%f] mt-3">
                {ele.name}
              </h1>
              <p className="text-lg md:text-2xl leading-[112.00000000000001%] text-[#111B2D] font-inter font-normal">
                {ele.deg}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LeadershipSection;
