import React from "react";
import hImage from "../../assets/images/hImage.png";
import lightining from "../../assets/images/lightining.png";
import growImage from "../../assets/images/growImage.png";
import rightImage from "../../assets/images/rightImage.png";
import { motion } from "framer-motion";

const CoreValueSection = () => {
  const coreData = [
    {
      image: hImage,
      header: "Start with heart",
      desc: "People are at the heart of everything we do. We care about our customers and our team members, and always work to build lasting, meaningful relationships",
    },
    {
      image: lightining,
      header: "Change the game",
      desc: "We are driven and determined to rebuild a broken industry. This means believing in ourselves and not being afraid to take risks - even when some call us crazy",
    },
    {
      image: growImage,
      header: "Always evolve",
      desc: "Constantly learning and evolving is how we grow. We view mistakes as growth opportunities, and push ourselves to be better today than we were yesterday",
    },
    {
      image: rightImage,
      header: "Positivity begets positivity",
      desc: "We believe kindness, a smile, and always assuming the best intentions has a network effect, and that positive attitudes create the best working and living environment",
    },
  ];

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariant = {
    hidden: {opacity: 0, y: 50},
    visible: (i)=>({
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: "easeOut", delay: i * 0.15} 
    })
  }
  return (
    <div className="w-full bg-[#F1F5F9] flex flex-col gap-8 px-5 py-16 sm:px-10 sm:py-20 md:px-12 md:py-24 lg:px-20 lg:py-28">
      <motion.h1
        variants = {headingVariant}
        initial = "hidden"
        whileInView = "visible"
        viewport = {{amount: 0.5}} 
        className="w-full text-3xl text-center text-[#0059FF] font-sfpro font-semibold leading-tight tracking-[-0.5px] sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
        Our core values
      </motion.h1>
      {/* Changed grid layout for larger screens */}
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-4 xl:gap-6">
        {coreData.map((ele, i) => {
          return (
            <motion.div
              variants = {cardVariant}
              initial = "hidden"
              whileInView = "visible"
              viewport = {{amount: 0.3}}
              key={i}
              className="flex flex-col items-center text-center gap-4 sm:gap-5 lg:flex lg:flex-row lg:gap-4"
            >
              <div className="bg-[#0059FF] w-24 h-24 rounded-[50%] flex items-center justify-center sm:w-28 sm:h-28 lg:w-[15rem] lg:h-[5rem]">
                <img
                  src={ele.image}
                  alt=""
                  className="h-10 sm:h-10 lg:h-[2rem]"
                />
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3 ">
                <h1 className="text-xl text-[#111B2D] font-inter font-medium leading-tight tracking-[-0.5px] sm:text-2xl md:text-3xl lg:text-2xl lg:text-left xl:text-4xl w-full">
                  {ele.header}
                </h1>
                <p className="text-base text-[#111B2D] font-inter font-normal leading-normal tracking-[-0.25px] sm:text-lg md:text-xl lg:text-lg lg:text-left xl:text-2xl">
                  {ele.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CoreValueSection;
