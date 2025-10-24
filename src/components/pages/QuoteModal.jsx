import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const QuoteModal = ({ onClose }) => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phonenumber: "",
    product: "",
    postContent: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({
      username: "",
      email: "",
      phonenumber: "",
      product: "",
      postContent: "",
    })
    console.log(inputs)
  }
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 sm:px-6 z-50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl h-[35rem] bg-white rounded-2xl overflow-hidden flex flex-col items-center gap-6 shadow-xl animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="w-full bg-[#F4F4F2] py-4 px-6 flex justify-between items-center">
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#212529] font-montserrat font-medium text-center">
            Get a Custom Quote
          </h1>
          <RxCross1
            onClick={onClose}
            className="cursor-pointer text-lg sm:text-xl text-black hover:text-[#cb202d] transition-colors"
          />
        </div>

        {/* Form */}
        <div className="w-full flex justify-center sm:pb-6 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 font-montserrat text-base text-[#212529]"
          >
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb202d]"
            />
            <input
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb202d]"
            />
            <input
              type="tel "
              name="phonenumber"
              value={inputs.phonenumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb202d]"
            />
            <input
              type="text"
              name="product"
              value={inputs.product}
              onChange={handleChange}
              placeholder="Enter Interested Product"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cb202d]"
            />
            <textarea
              name="postContent"
              value={inputs.postContent}
              onChange={handleChange}
              placeholder="Enter your Message"
              rows="4"
              className="border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#cb202d]"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#2763E5] via-[#0059FF] to-[#2087F4] text-white py-3 rounded-xl mt-2 transition-colors"
            >
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
