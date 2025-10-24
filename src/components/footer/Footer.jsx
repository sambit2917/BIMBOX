import React, { useRef, useState } from "react";
import FooterList from "./footerIterator/FooterList";
import LowerFooter from "./footerIterator/LowerFooter";
import MidFooter from "./footerIterator/MidFooter";
import { motion, useInView } from "framer-motion";
import QuoteModal from "../pages/QuoteModal";

const Footer = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const isInview = useInView(ref,{amount: 0.2})
  
  const ctaBoxVariants = {
    hidden: { opacity: 0, y: "50%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    // Outer Container for the entire Footer section
    <div className="mt-10 flex flex-col items-center w-full lg:relative lg:pt-[10rem] lg:mt-28">
      {/* Call to Action Banner (the "first box") */}
      <motion.div
        ref = {ref}
        variants={ctaBoxVariants}
        initial="hidden"
        // whileInView="visible"
        // viewport={{ amount: 0.2 }}
        animate = {isInview ? "visible" : "hidden"}
        className="w-11/12 max-w-7xl mx-auto bg-gradient-to-r from-[#0059FF] to-[#0CB7FA] rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col items-center text-center sm:flex-row sm:text-left sm:justify-between sm:gap-8 md:flex md:flex-col md:items-center md:gap-10 lg:flex lg:flex-col lg:items-start lg:gap-10 mt-20 md:mt-24 lg:absolute lg:bottom-[40rem] z-10"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-[#FFFFFF] font-inter font-semibold leading-tight tracking-tight mb-6 sm:mb-0 max-w-2xl lg:max-w-[90%]">
          Ready to see what's really happening on your sites?
        </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 sm:px-7 sm:py-4 text-[#0059FF] text-base sm:text-lg lg:text-xl leading-[100%] font-sfpro font-semibold bg-white rounded-full whitespace-nowrap">
            Talk to Expert
          </button>
          <span className="px-6 py-3 sm:px-8 sm:py-4 border border-white text-base sm:text-lg lg:text-xl leading-[100%] text-[#FFFFFF] font-sfpro font-bold rounded-full whitespace-nowrap" onClick={()=>setOpen((prev)=>!prev)}>
            Get a quote
            {open && (<QuoteModal onClose={()=>setOpen(false)} />)}
          </span>
        </div>
      </motion.div>

      {/* Main Dark Footer Content */}
      {/* This element's top padding and negative margin align it with the CTA banner */}
      <div className="w-full bg-[#011539] flex flex-col justify-end gap-9 pb-10 pt-20 lg:pt-[20rem] sm:pt-24 md:pt-32 -mt-10 sm:-mt-12 md:-mt-16">
        {/* These components would also need their own responsiveness adjustments inside their files */}
        <FooterList />
        <MidFooter />
        <LowerFooter />
      </div>
    </div>
  );
};

export default Footer;
