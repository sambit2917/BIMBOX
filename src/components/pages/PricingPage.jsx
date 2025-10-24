import React, { useState } from 'react'
import { BsCheck2Circle } from "react-icons/bs";
import { motion } from 'framer-motion';

const PricingPage = () => {
  const [isAnnual, setisAnnual] = useState(false)

  const pricingPlans = [
    {
      name: "Basic",
      description: "Ideal for small projects and individual contractors.",
      monthlyPrice: 99,
      annualPrice: 999,
      features: [
        "Single user license",
        "5 projects per month",
        "Standard data storage (100GB)",
        "Real-time 2D progress tracking",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      description: "Advanced features for growing teams and complex projects.",
      monthlyPrice: 299,
      annualPrice: 2999,
      features: [
        "Up to 5 user licenses",
        "Unlimited projects",
        "Extended data storage (1TB)",
        "Real-time 3D mapping & progress",
        "AI anomaly detection (basic)",
        "Priority email & chat support",
        "Customizable reports",
      ],
      highlight: true, // This plan will be highlighted
    },
    {
      name: "Enterprise",
      description:
        "Tailored solutions for large organizations and demanding workflows.",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited user licenses",
        "Unlimited projects & data storage",
        "Advanced AI anomaly detection",
        "Dedicated account manager",
        "On-site training & setup",
        "SLA-backed support",
        "API access & custom integrations",
      ],
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-16 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <div className="text-center mb-12 lg:mb-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#203C6E] leading-tight mb-4"
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl lg:text-2xl text-[#111B2D] max-w-3xl mx-auto"
        >
          Choose the plan that best fits your team's needs and scale as your
          projects grow.
        </motion.p>
      </div>

      {/* Billing Toggle */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center mb-10 lg:mb-14"
      >
        <div className="inline-flex items-center p-1 rounded-full bg-gray-200">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${
              !isAnnual
                ? "bg-[#2763E5] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${
              isAnnual
                ? "bg-[#2763E5] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-300"
            }`}
          >
            Annually{" "}
            <span className="text-sm ml-2 px-2 py-0.5 rounded-full bg-blue-200 text-blue-800 hidden sm:inline-block">
              -15%
            </span>
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ delay: index * 0.1 }} // Stagger cards
            className={`bg-white relative rounded-xl shadow-lg p-8 flex flex-col h-full transition-all duration-300 ${
              plan.highlight
                ? "border-4 border-[#2763E5] shadow-2xl scale-105"
                : "border border-gray-200"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2763E5] text-white text-sm font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                Most Popular
              </div>
            )}
            <h3 className="text-3xl font-bold text-[#203C6E] mb-3">
              {plan.name}
            </h3>
            <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>

            <div className="mb-8">
              {plan.monthlyPrice === "Custom" ? (
                <span className="text-5xl font-extrabold text-[#2763E5]">
                  Custom
                </span>
              ) : (
                <>
                  <span className="text-5xl font-extrabold text-[#2763E5]">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xl font-medium text-gray-500">
                    {plan.annualPrice !== "Custom" &&
                      (isAnnual ? "/year" : "/month")}
                  </span>
                </>
              )}
            </div>

            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={featureVariants} // Apply feature animation
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.8 }} // Animate features when they appear
                  className="flex items-center text-gray-700 text-lg"
                >
                  <BsCheck2Circle className="h-6 w-6 text-[#2763E5] mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full px-8 py-4 rounded-[2.1rem] text-xl font-semibold transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#2763E5] via-[#0059FF] to-[#2087F4] text-white shadow-lg hover:shadow-xl"
                  : "bg-white border-2 border-[#2763E5] text-[#2763E5] hover:bg-blue-50 hover:border-[#0059FF]"
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default PricingPage
