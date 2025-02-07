import React from "react";
import { Link } from "react-router-dom";

import {
  homeWebDesignLarge,
  homeWebDesignSmall,
  homeWebDesignTablet,
  homeWebDesignMobile,
  homeAppDesign,
  homeAppDesignTablet,
  homeAppDesignMobile,
  bgPatternIntroWeb,
  bgSmallCircle,
  imageBoxedWater,
  imageChange,
  imageScience,
} from "../assets";

const getBackgroundImageAppDesign = () => {
  if (window.innerWidth < 768) {
    return homeAppDesignTablet;
  } else if (window.innerWidth < 600) {
    return homeAppDesignMobile;
  } else {
    return homeAppDesign;
  }
};

const getBackgroundImageWebDesign = () => {
  if (window.innerWidth < 1024) {
    return homeWebDesignSmall;
  }
  if (window.innerWidth < 768) {
    return homeWebDesignTablet;
  }
  if (window.innerWidth < 600) {
    return homeWebDesignMobile;
  } else {
    return homeWebDesignLarge;
  }
};

const Graphic_design = () => {
  const [backgroundImageAppDesign, setBackgroundImageAppDesign] =
    React.useState<string>(getBackgroundImageAppDesign());
  const [backgroundImageWebDesign, setBackgroundImageGraphicDesign] =
    React.useState<string>(getBackgroundImageWebDesign());

  React.useEffect(() => {
    const updateBackgroundImages = () => {
      setBackgroundImageAppDesign(getBackgroundImageAppDesign());
      setBackgroundImageGraphicDesign(getBackgroundImageWebDesign());
    };

    window.addEventListener("resize", updateBackgroundImages);
    updateBackgroundImages(); // Initial check

    return () => window.removeEventListener("resize", updateBackgroundImages);
  }, []);

  return (
    <div className="flex flex-col  h-auto relative z-30 lg:gap-[160px] md:gap-[120px] max-sm:gap-[96px] ">
      {/* Header */}
      <div className="flex flex-col items-center text-center text-primary-White bg-primary-Peach z-10 h-[252px] rounded-[15px] gap-6 py-[64px] w-full lg:px-[190px] md:px-[100px] max-sm:px-[24px] relative max-sm:rounded-none">
        <img
          src={bgPatternIntroWeb}
          alt="bg Pattern Intro Web"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] z-0 block max-sm:hidden "
        />

        <img
          src={bgSmallCircle}
          alt="bg Pattern Intro Web"
          className="absolute top-0 right-0 h-5/6 -rotate-90 object-cover rounded-[15px] z-0 hidden max-sm:block "
        />

        <h1 className="text-[48px] font-medium max-sm:text-[32px] z-10">
          Graphic Design
        </h1>
        <p className="text-base max-sm:text-[15px] z-10">
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>

      {/*Website Design Portfolio*/}
      <div className="w-full h-auto grid gap-[30px] lg:grid-cols-3 lg:grid-rows-1 lg:gap-[30px] md:grid-cols-1 md:grid-rows-3 md:gap-6 max-sm:grid-cols-1 max-sm:grid-rows-3 max-sm:gap-6 max-sm:px-6">
        {/* Tim Brown */}
        <div className="flex w-full rounded-[15px] lg:flex-col lg:h-[478px] md:flex-row md:h-[310px] max-sm:flex-col max-sm:h-[478px] cursor-pointer bg-[#FDF3F0] text-primary-Peach hover:bg-primary-Peach shadow-lg transition-all duration-300 group-hover:text-primary-White group">
          <img
            src={imageChange}
            alt="Image Change"
            className=" lg:rounded-t-[15px] lg:h-[320px] lg:w-full  md:w-1/2 md:rounded-l-[15px] md:h-auto  max-sm:rounded-t-[15px] max-sm:h-[320px] max-sm:w-full "
          />
          <div className="w-full text-center p-8 flex flex-col items-center justify-center gap-4 ">
            <h2 className="uppercase font-medium text-[20px] tracking-[5px] group-hover:text-primary-White">
              TIM BROWN
            </h2>
            <p className="text-base font-regular text-primary-Black group-hover:text-primary-White">
              A book cover designed for Tim Brown’s new release, ‘Change’
            </p>
          </div>
        </div>
        {/* Boxed Water */}
        <div className="flex w-full rounded-[15px] lg:flex-col lg:h-[478px] md:flex-row md:h-[310px] max-sm:flex-col max-sm:h-[478px] cursor-pointer bg-[#FDF3F0] text-primary-Peach hover:bg-primary-Peach shadow-lg transition-all duration-300 group-hover:text-primary-White group">
          <img
            src={imageBoxedWater}
            alt="Image Boxed Water"
            className=" lg:rounded-t-[15px] lg:h-[320px] lg:w-full  md:w-1/2 md:rounded-l-[15px] md:h-auto  max-sm:rounded-t-[15px] max-sm:h-[320px] max-sm:w-full "
          />
          <div className="w-full text-center p-8 flex flex-col items-center justify-center gap-4 ">
            <h2 className="uppercase font-medium text-[20px] tracking-[5px] group-hover:text-primary-White">
              BOXED WATER
            </h2>
            <p className="text-base font-regular text-primary-Black group-hover:text-primary-White">
              A simple packaging concept made for Boxed Water
            </p>
          </div>
        </div>
        {/* Science */}
        <div className="flex w-full rounded-[15px] lg:flex-col lg:h-[478px] md:flex-row md:h-[310px] max-sm:flex-col max-sm:h-[478px] cursor-pointer bg-[#FDF3F0] text-primary-Peach hover:bg-primary-Peach shadow-lg transition-all duration-300 group-hover:text-primary-White group">
          <img
            src={imageScience}
            alt="Image Science"
            className=" lg:rounded-t-[15px] lg:h-[320px] lg:w-full  md:w-1/2 md:rounded-l-[15px] md:h-auto  max-sm:rounded-t-[15px] max-sm:h-[320px] max-sm:w-full "
          />
          <div className="w-full text-center p-8 flex flex-col items-center justify-center gap-4 ">
            <h2 className="uppercase font-medium text-[20px] tracking-[5px] group-hover:text-primary-White">
              SCIENCE
            </h2>
            <p className="text-base font-regular text-primary-Black group-hover:text-primary-White">
              A poster made in collaboration with the Federal Art Project
            </p>
          </div>
        </div>
      </div>

      {/*  App Design, Graphic Design */}
      <section className="w-full grid lg:h-[308px] lg:grid-cols-2 lg:grid-rows-1 lg:gap-[30px]  md:grid-cols-1 md:grid-rows-2 md:gap-6 max-sm:grid-cols-1 max-sm:grid-rows-2 max-sm:gap-6 max-sm:px-6">
        {/* App Design */}
        <Link
          to="/app_design"
          className="w-auto rounded-[15px] lg:h-auto flex flex-col items-center justify-center text-center font-medium text-primary-White cursor-pointer lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 lg:py-[40px] lg:px-[40px] md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 md:py-[40px] md:px-[40px] md:h-[200px] max-sm:h-[250px] max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-1 max-sm:row-span-1 max-sm:py-[40px] max-sm:px-[40px] relative overflow-hidden group"
          style={{
            backgroundImage: `url(${backgroundImageAppDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="absolute inset-0 bg-primary-Black opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary-Peach opacity-0 group-hover:opacity-50 transition-opacity duration-300 "></div>
          <h2 className="text-[40px] relative z-10"> APP DESIGN</h2>
          <div className="flex flex-row items-center gap-2 relative z-10">
            <p className="text-[15px]">VIEW PROJECTS</p>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>

        {/* Web Design */}
        <Link
          to={"/website_design"}
          className="w-auto rounded-[15px] lg:h-auto flex flex-col items-center text-center justify-center font-medium text-primary-White cursor-pointer lg:col-start-2 lg:col-span-1 lg:row-start-1 lg:row-span-1 lg:py-[40px] lg:px-[40px] md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 md:py-[40px] md:px-[40px] md:h-[200px] max-sm:h-[250px] max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-2 max-sm:row-span-1 max-sm:py-[40px] max-sm:px-[40px] relative overflow-hidden group"
          style={{
            backgroundImage: `url(${backgroundImageWebDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="absolute inset-0 bg-primary-Black opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary-Peach opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="text-[40px] relative z-10 uppercase">Web Design</h2>
          <div className="flex flex-row items-center gap-2 relative z-10">
            <p className="text-[15px]">VIEW PROJECTS</p>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Graphic_design;
