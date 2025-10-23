import React from 'react'
import { motion } from "framer-motion";
import mainImage from "../../assets/images/MainImage.png"
import gImage1 from "../../assets/images/gImage1.png"
import gImage2 from "../../assets/images/gImage2.png"
import gImage3 from "../../assets/images/gImage3.png"

const ProductPage = () => {
  const product = {
    name: "Next-Gen AI Construction Scanner",
    description:
      "Revolutionize your construction site with our advanced AI-powered scanner. Achieve unparalleled accuracy in progress tracking, material management, and anomaly detection. Integrated 3D mapping and real-time data analytics empower you to make informed decisions faster and reduce costly errors. Perfect for projects of all scales, from residential builds to large-scale infrastructure.",
    price: "$9,999.00",
    mainImage:
      mainImage, 
    galleryImages: [
      gImage1,
      gImage2,
      gImage3,
    ],
    features: [
      "Real-time 3D mapping",
      "AI-powered anomaly detection",
      "Seamless data integration",
      "Rugged, weather-resistant design",
      "Intuitive user interface",
    ],
  };

  // Variants for different elements
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Stagger effect for features
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-center items-start">
        {/* Product Image Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={imageVariants}
          className="lg:w-1/2 flex flex-col items-center"
        >
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full max-w-lg h-auto rounded-lg shadow-xl"
          />
          <div className="flex gap-3 mt-4">
            {product.galleryImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`${product.name} gallery image ${index + 1}`}
                className="w-20 h-14 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Product Details Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.1 }} // Stagger children animations
          className="lg:w-1/2 flex flex-col gap-6"
        >
          <motion.h1
            variants={contentVariants}
            className="text-4xl lg:text-5xl font-bold text-[#203C6E] leading-tight"
          >
            {product.name}
          </motion.h1>

          <motion.p
            variants={contentVariants}
            className="text-xl text-[#111B2D] leading-relaxed"
          >
            {product.description}
          </motion.p>

          <motion.div
            variants={contentVariants}
            className="flex items-baseline gap-3"
          >
            <span className="text-4xl font-extrabold text-[#2763E5]">
              {product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              $12,000.00
            </span>{" "}
            {/* Example for a discounted price */}
          </motion.div>

          <motion.button
            variants={buttonVariants}
            className="w-full lg:w-fit px-8 py-4 border rounded-[2.1rem] bg-gradient-to-r from-[#2763E5] via-[#0059FF] to-[#2087F4] text-xl leading-[100%] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Add to Cart
          </motion.button>

          {/* Features Section */}
          <div className="mt-6">
            <motion.h3
              variants={contentVariants}
              className="text-2xl font-semibold text-[#203C6E] mb-4"
            >
              Key Features
            </motion.h3>
            <ul className="list-disc pl-5 text-lg text-[#111B2D]">
              {product.features.map((feature, index) => (
                <motion.li
                  key={index}
                  custom={index} // Pass index as custom prop for staggered animation
                  variants={featureItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  className="mb-2"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProductPage
