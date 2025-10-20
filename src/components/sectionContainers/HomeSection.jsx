import React from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import MissonSection from "./MissonSection";
import ConstructionSection from "./ConstructionSection";
import LeadershipSection from "./LeadershipSection";
import BimGroup from "../../assets/images/BimGroup.png";
import CoreValueSection from "./CoreValueSection";
import { motion } from "framer-motion";

const HomeSection = () => {
  const imageRevealVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };
  return (
    <div className="flex flex-col items-center gap-10">
      <HeroSection />
      <MainSection />
      <MissonSection />
      <ConstructionSection />
      <LeadershipSection />
      <motion.div
        variants = {imageRevealVariant}
        initial = "hidden"
        whileInView = "visible"
        viewport = {{amount: 0.6}} 
        className="w-full max-h-[40rem]">
        <img src={BimGroup} alt="" className="h-full w-full" />
      </motion.div>
      <CoreValueSection />
    </div>
  );
};

export default HomeSection;
