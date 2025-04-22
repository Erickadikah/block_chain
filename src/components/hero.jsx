/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Image from "next/image";
import Partners from "./partners";
import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="lg:h-[95vh] h-[85vh] sm:h-[40vh]  relative bg-[#F3F5F8]" id="hero">
      <div className="">
        <div className="absolute top-0 left-0 w-full h-full lg:p-20 p-10">
          <div className="flex flex-row justify-center item-center md:flex-row items-center gap-4 lg:py-10 py-10">
            <div className="md:w-2/3 lg:mb-8 md:mb-10 lg:mt-10 mt-10">
              <h1 className="text-4xl md:text-8xl font-bold text-blue-500 leading-tight mb-6">
                Where ideas find their <span className="text-gray-900">
                  voice.
                </span>
              </h1>
              <p className="text-sm lg:text-2xl text-gray-900 mb-6">
                Your daily dose of insight, creativity, and connection — designed to make you think deeper,
                feel more, and connect better.{" "}
              </p>
              <div className="flex lg:gap-6 gap-10">
                <ScrollLink
                  className="flex gap-4 px-3 cursor-pointer lg:px-14 lg:py-3 py-2 lg:text-lg text-sm bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded-full shadow-2xl"
                  to="features"
                  smooth={true}
                  duration={300}
                >
                  Get Started
                  <GoArrowDown className="text-lg lg:text-lg lg:mt-2 text-white animate-bounce" />
                </ScrollLink>


                {/* <button
                  onClick={toggleForm}
                  className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-sm border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:outline-none rounded-full shadow-2xl"
                >
                  Sign Up
                </button> */}
              </div>
            </div>
            {/* <div className="md:w-1/2 overflow-hidden rounded-full bg-blue-400 shadow-4xl">
              <Image
                src="/images/tech.png"
                alt="hero-image"
                className=" md:block object-cover object-center"
                width={1000}
                height={200}
              />
            </div> */}
          </div>
        </div>
      </div>
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 flex items-center justify-center">
          <div className="relative z-30">
            <SoftwareRequestForm />
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-white hover:text-gray-300 mb-12"
            >
              <IoCloseCircle className="w-8 h-8 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

