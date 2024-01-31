import React from "react";
import Disclaimer from "./Disclaimer";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="font-poppins">
      <Disclaimer />
      <Navbar />
      <div className="relative z-0">
        <img
          src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-10/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg"
          alt=""
          className="w-full h-screen object-cover"
        />
        <div className="px-8  absolute z-50 top-[550px] sm:px-[64px] sm:top-[600px] text-white text-2xl flex flex-col gap-1">
          <p className="text-black font-semibold sm:text-white">
            Elevate Your Style{" "}
          </p>
          <p className="text-black font-semibold sm:text-white">
            Timeless Fashion, Sustainable
          </p>
          <p className="text-black font-semibold sm:text-white">Choices</p>
          <button className="mt-3 bg-white font-semibold  text-black  rounded-sm text-sm w-[116px] h-[42px] px-[18px] py-[11px]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-[1440px] sm:h-[724px]">
        <div className="mx-[32px] mt-[32px] text-black-900 flex flex-col flex-wrap">
          <p>
            Elevate your lifestyle with a more intelligent, superior wardrobe
          </p>
          <p>Our range is crafted sustainably with longevity in mind</p>
        </div>
        <div className="px-[32px] mt-[70px] gap-4 sm:mt-[35px] grid grid-cols-1 sm:grid-cols-3">
          <div className="relative">
            <img
              src="https://images.herzindagi.info/image/2022/May/fashion-items-to-keep.jpg"
              alt=""
              className="w-full h-[343px] sm:w-[432px] sm:h-[532px] object-cover "
              
            />
            <p className="absolute top-[275px] left-4 sm:top-[475px] sm:left-5 text-white">New Arrival</p>
          </div>
          <div className="relative">
            <img
              src="https://www.color-meanings.com/wp-content/uploads/2022/08/Sage-Green-and-Tan-1024x683.jpeg"
              alt=""
              className="w-full h-[343px] sm:w-[432px] sm:h-[532px] object-cover"
            />
            <p className="absolute top-[275px] left-4 sm:top-[475px] sm:left-5 text-white">The Casual Edit</p>
          </div>
          <div className="relative">
            <img
              src="https://stylishsplash.com/cdn/shop/products/2557561020942.jpg?v=1634627912"
              alt=""
              className="w-full h-[343px] sm:w-[432px] sm:h-[532px] object-cover"
            />
            <p className="absolute top-[275px] left-4 sm:top-[475px] sm:left-5 text-white">Best-Sellers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
