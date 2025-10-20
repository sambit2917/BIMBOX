import React from "react";

const FooterList = () => {
  const footerData = [
    {
      title: "Products",
      items: ["BIMBOX Capture", "Site Coordination", "Fast BIM Conversion"],
    },
    {
      title: "Solutions",
      items: ["Owners", "Contractors", "Trades"],
    },
    {
      title: "Company",
      items: ["About", "Careers", "Partners"],
    },
    {
      title: "Resources",
      items: ["FAQs", "Support", "Contact us"],
    },
    {
      title: "Legals",
      items: ["Privacy policy", "Terms and condition", "Refund policy"],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-y-8 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 sm:grid-cols-3 lg:grid-cols-5 text-center">
      {footerData.map((section, index) => (
        <div key={index} className="flex flex-col gap-3 sm:gap-4">
          <h3 className="text-lg sm:text-xl lg:text-start text-[#fff] font-sfpro font-medium leading-tight mb-2">
            {section.title}
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm lg:text-start font-sfpro font-normal leading-normal tracking-normal text-[#FFFFFF]">
            {section.items.map((item, i) => (
              <li key={i} className="hover:cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterList;
