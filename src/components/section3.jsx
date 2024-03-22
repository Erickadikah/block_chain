import React, { useState } from "react";
import Image from "next/image";
// import Testimonial from "./testimonial";
import SoftwareRequestForm from "./SoftwareRequestForm";
import { IoCloseCircle } from "react-icons/io5";

const features = [
  {
    id: 1,
    title: "Thrift Savings Plan (TSP) Calculator",
    imageUrl: "/images/re.jpg",
    description: " Dreaming of big goals but struggling to save? Our thrift savings feature helps you turn those dreams into reality. Just like putting coins in a jar, our platform enables you to save collectively with friends towards common goals. Whether it's a vacation, a new gadget, or a rainy day fund, watch your savings grow together and achieve your dreams faster."

  },
  {
    id: 2,
    title: "Share Bills, Share Joy",
    description:
      " Ever had trouble keeping track of shared expenses with friends? Our expense sharing feature simplifies this process by allowing you to split bills seamlessly. Whether it's dining out, travel expenses, or household bills, easily divide costs among your group and eliminate the hassle of chasing payments.",
    imageUrl: "/images/calk.jpg",
  },
  {
    id: 3,
    title: "Nurturing Financial Growth",
    description: "Your financial growth matters to us. With our platform, you're not just sharing expenses and saving money – you're nurturing your financial future. Just like nurturing a plant, our services help you cultivate healthy financial habits, foster community support, and watch your wealth grow over time. Together, let's cultivate a brighter financial future for everyone.",
    imageUrl: "/images/gr.jpg",
  },
];

const Section3 = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F8]"
      id="features"
    >
      <div className="container mx-auto lg:px-8 px-4 mb-10">
        <h1 className="lg:text-4xl text-2xl md:text-5xl font-extrabold text-gray-900 leading-tight lg:text-center mb-4 lg:mb-8">
        Sign up now and embark on a journey <br />
        towards financial empowerment!
        </h1>
        <p className="lg:text-lg text-sm text-gray-700 lg:text-center mb-4 lg:mb-10 max-w-screen-md mx-auto">
          Our digital marketing agency offers a variety of services to help
          businesses establish a strong online presence.
        </p>
        <div className="flex gap-6 lg:gap-8 lg:justify-center lg:mb-6">
                <button 
                className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-sm bg-blue-500 text-white hover:bg-blue-600 hover:shadow-2xl focus:outline-none rounded-full shadow-xl"
                onClick={toggleForm}
                >
                  Contact Us
                </button>
                <button className="px-3 lg:px-14 lg:py-3 py-2 lg:text-md text-sm border border-blue-500 text-blue-500 hover:shadow-2xl hover:bg-blue-600 hover:text-white focus:outline-none rounded-full shadow-xl">
                  Connect to metamask
                </button>
              </div>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center lg:gap-16 gap-4 lg:mt-20 mt-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-4">
                {feature.title}
              </h1>
              <p className="text-sm lg:text-lg text-gray-700 mb-4 lg:mt-10">
                {feature.description}
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src={feature.imageUrl}
                alt="feature-image"
                className="object-cover object-center rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
            
          </div>
        ))}
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
      {/**/}
    </div>
  );
};

export default Section3;
