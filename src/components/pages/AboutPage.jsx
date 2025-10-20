import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textContentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  const cardItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
    }),
  };

  const aboutData = [
    {
      icons: "💡",
      title: "Pioneering Digital Twins",
      description:
        "We lead the industry in creating precise and dynamic digital twins, bridging the gap between physical infrastructure and intelligent data. Our technology empowers better decision-making from design to operations.",
    },
    {
      icon: "🤝",
      title: "Collaborative Innovation",
      description:
        "Our approach fosters a collaborative ecosystem. We integrate cutting-edge AI and BIM solutions to ensure seamless information flow, enhancing efficiency and communication across all project stakeholders.",
    },
    {
      icon: "🌱",
      title: "Sustainable Future",
      description:
        "Committed to a greener tomorrow, our solutions optimize resource utilization, minimize waste, and improve operational longevity. We enable sustainable practices in every phase of construction and infrastructure management.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#0059FF] to-[#0CB7FA] py-20 px-5 sm:py-24 sm:px-10 md:py-32 lg:py-40 flex flex-col items-center text-center">
        <motion.h1
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-inter font-bold leading-tight max-w-4xl tracking-[-1px]"
        >
          Building the Future, Digitally
        </motion.h1>
        <motion.p
          variants={textContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-white font-inter font-normal leading-relaxed max-w-3xl"
        >
          We are pioneers in transforming the construction and infrastructure
          industry through intelligent digital solutions and advanced reality
          capture.
        </motion.p>
      </div>
      <div className="w-full max-w-7xl mx-auto py-16 px-5 sm:py-20 sm:px-10 md:py-24 lg:py-28 flex flex-col gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        <motion.h2
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#0059FF] font-inter font-semibold text-center"
        >
          Our journey
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            className="flex flex-col gap-6 text-[#203C6E] font-inter font-extralight leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl"
          >
            <p>
              Founded on the belief that the construction industry deserved more
              than outdated processes, our journey began with a vision to
              integrate cutting-edge technology into every build. We saw the
              potential of BIM, AI, and digital twins not just as tools, but as
              revolutionary forces to redefine how structures are designed,
              built, and operated.
            </p>
            <p>
              From our humble beginnings, we've grown into a team of passionate
              engineers, data scientists, and construction experts, united by a
              common goal: to empower builders with precision, efficiency, and
              intelligence. Every project we undertake is a step towards a
              smarter, more sustainable, and truly connected future for global
              infrastructure.
            </p>
          </motion.div>
          <motion.img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWd0-vO97DRbHvS2ve1cIPZfAr3Mz9qWKaw&s"
            alt="Our Story"
            variants={cardItemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.4 }}
            className="w-full h-auto rounded-3xl object-cover shadow-lg"
          />
        </div>
      </div>
      <div>
        <motion.h2
          variants={sectionTitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          className="text-3xl sm:text-4xl md:text-5xl text-[#0059FF] font-sfpro font-semibold text-center"
        >
          What we Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
          {aboutData.map((ele, i) => {
            return (
              <motion.div
                key={i}
                variants={cardItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                custom={i} //? Pass index for staggered animation
                className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-md gap-4"
              >
                <div className="bg-[#0059FF] w-20 h-20 rounded-full flex items-center justify-center text-3xl text-white">
                  {ele.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-inter font-medium text-[#111B2D]">
                  {ele.title}
                </h3>
                <p className="text-base sm:text-lg font-inter font-normal text-[#203C6E]">
                  {ele.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
