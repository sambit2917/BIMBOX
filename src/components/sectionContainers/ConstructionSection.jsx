import React from "react";
import constructImg from "../../assets/images/Construction.png";
import builderImg from "../../assets/images/Builder.png";
import planningImg from "../../assets/images/Planning.png";
import { motion } from "framer-motion";

const ConstructionSection = () => {
  const imageData = [
    {
      image: constructImg,
      header: "Where BIM meets reality",
      desc: "Drawings and models alone don’t reflect daily site conditions. Our solution integrates BIM with real-time field reality capture, automatically aligning models with site progress so every stakeholder sees what’s built, what’s missing, and what’s next.",
    },
    {
      image: builderImg,
      header: "Made for builders, powered by AI",
      desc: "Engineered for the field, our platform blends computer vision, machine learning, and BIM data to deliver actionable insights. Progress tracking, quality checks, and safety monitoring happen automatically—so project managers and trades spend less time reporting and more time building.",
    },
    {
      image: planningImg,
      header: "The future of construction intelligence",
      desc: "We’re creating a connected ecosystem where BIM models, AI, and site data work together seamlessly. From design intent to final turnover, every phase is captured, contextualized, and optimized—empowering teams to build smarter, safer, and faster.",
    },
  ];

  //? Variants for the containers
  const itemVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: "easeOut"}
    },
  };

  const imageVariant = {
    hidden: {opacity: 0, scale: 0.95},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {duration: 0.8, ease: "easeOut"},
    },
  };

  const textvariant = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.7, ease: "easeOut", delay: 0.2}
    },
  };
  return (
    <div className="py-9 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-around gap-12 sm:gap-20">
      {imageData.map((ele, i) => {
        return (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            key={i}
            className={`flex flex-col items-center md:flex md:flex-col text-center sm:text-left sm:flex-row lg:flex lg:flex-row lg:justify-center md:max-w-7xl lg:min-w-full ${
              i % 2 !== 0 ? "sm:flex-row-reverse lg:flex-row-reverse" : ""
            } gap-8 md:gap-16 lg:gap-14`}
          >
            <motion.img
              variants={imageVariant}
              src={ele.image}
              alt={ele.header}
              className=" max-w-[20rem] md:h-[20rem] lg:h-[20rem] sm:max-w-md md:max-w-[30rem] lg:max-w-[20rem] rounded-3xl object-cover "
            />
            <motion.div
              variants={textvariant}
              className="flex flex-col justify-center min-w-lg md:items-center lg:items-start lg:w-[40%]"
            >
              <h1 className="text-2xl sm:text-2xl lg:text-3xl md:text-center lg:text-left text-[#0059FF] font-inter font-bold hover:underline cursor-pointer mb-4 md:w-[60%] lg:w-full">
                {ele.header}
              </h1>
              <p className="text-base md:text-lg md:text-center sm:text-xl lg:text-xl lg:text-left text-[#203C6E] font-inter font-extralight leading-[129%] tracking-[-1px] hover:underline cursor-pointer md:w-[60%] lg:w-[70%]">
                {ele.desc}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ConstructionSection;
