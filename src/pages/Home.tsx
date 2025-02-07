import React from "react";
import { Link } from "react-router-dom";

import {
  bgPatternHero,
  homeHero,
  homeAppDesign,
  homeGraphicDesign,
  homeWebDesignLarge,
  homeWebDesignSmall,
  homeAppDesignTablet,
  homeGraphicDesignTablet,
  homeWebDesignTablet,
  homeAppDesignMobile,
  homeGraphicDesignMobile,
  homeWebDesignMobile,
  illustrationFriendly,
  illustrationPassionate,
  illustrationResourceful,
  bgSmallCircle,
} from "../assets";

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

const getBackgroundImageAppDesign = () => {
  if (window.innerWidth < 768) {
    return homeAppDesignTablet;
  } else if (window.innerWidth < 600) {
    return homeAppDesignMobile;
  } else {
    return homeAppDesign;
  }
};

const getBackgroundImageGraphicDesign = () => {
  if (window.innerWidth < 768) {
    return homeGraphicDesignTablet;
  } else if (window.innerWidth < 600) {
    return homeGraphicDesignMobile;
  } else {
    return homeGraphicDesign;
  }
};

const Home = () => {
  const [backgroundImageWebDesign, setBackgroundImageWebDesign] =
    React.useState<string>(getBackgroundImageWebDesign());
  const [backgroundImageAppDesign, setBackgroundImageAppDesign] =
    React.useState<string>(getBackgroundImageAppDesign());
  const [backgroundImageGraphicDesign, setBackgroundImageGraphicDesign] =
    React.useState<string>(getBackgroundImageGraphicDesign());

  React.useEffect(() => {
    const updateBackgroundImages = () => {
      setBackgroundImageWebDesign(getBackgroundImageWebDesign());
      setBackgroundImageAppDesign(getBackgroundImageAppDesign());
      setBackgroundImageGraphicDesign(getBackgroundImageGraphicDesign());
    };

    window.addEventListener("resize", updateBackgroundImages);
    updateBackgroundImages(); // Initial check

    return () => window.removeEventListener("resize", updateBackgroundImages);
  }, []);

  return (
    <div className="flex flex-col gap-[60px] h-auto max-sm:gap-[120px] relative z-30">

      {/* Hero */}
      <section className="w-full xl:h-[640px] lg:h-[620px] md:h-[900px] max-sm:h-[843px] bg-primary-Peach rounded-[15px] relative z-10 overflow-hidden flex items-center justify-center max-sm:rounded-none">
        <img
          src={bgPatternHero}
          alt="Background Call to Action"
          className="absolute z-0 lg:h-full lg:top-0 lg:right-0 md:w-auto md:-right-32 max-sm:h-auto max-sm:w-full max-sm:left-40  max-sm:object-cover block max-sm:hidden"
        />
        <div className="absolute left-0 w-[640px] h-[640px] rounded-full bg-gradient-to-r from-[#5d020200] to-[#5d02027a] max-sm:block hidden"></div>
        <div className="flex max-sm:flex-col justify-between items-start w-full z-10 h-full xl:px-[95px] lg:flex-row lg:mt-[139px] md:py-[60px] md:flex-col md:px-[58px] max-sm:px-6 max-sm:py-[80px] max-sm:gap-6">
          <div className="flex flex-col text-white lg:w-[65%] md:w-full relative z-10 lg:text-left lg:items-start md:text-center  md:items-center md:pb-[69px] max-sm:gap-8 max-sm:items-center max-sm:text-center">
            <h1 className="text-5xl max-sm:text-[32px] font-medium">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="text-base mt-4 leading-normal mb-10 max-sm:mb-0">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="w-[152px] h-[56px] bg-primary-White text-primary-Black z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach hover:text-white ">
              Learn More
            </button>
          </div>
          <div className="lg:w-[284px] md:w-full md:flex md:justify-center mas-sm: flex max-sm:justify-center max-sm:w-full ">
            <img src={homeHero} alt="Home Hero" className="lg:w-full h-auto " />
          </div>
        </div>
      </section>

      {/* Web Design, App Design, Graphic Design */}
      <section className="w-full grid lg:h-[640px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-[30px]  md:grid-cols-1 md:grid-rows-3 md:gap-6 max-sm:grid-cols-1 max-sm:grid-rows-3 max-sm:gap-6 max-sm:px-6">
        {/* Web Design */}
        <Link
          to="/website_design"
          className="w-auto rounded-[15px] lg:h-auto flex flex-col items-center justify-center text-center font-medium text-primary-White cursor-pointer lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 lg:py-[40px] lg:px-[40px] md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 md:py-[40px] md:px-[40px] md:h-[200px] max-sm:h-[250px] max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-1 max-sm:row-span-1 max-sm:py-[40px] max-sm:px-[40px] relative overflow-hidden group"
          style={{
            backgroundImage: `url(${backgroundImageWebDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
           <div className="absolute inset-0 bg-primary-Black opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary-Peach opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="text-[40px] relative z-10">WEB DESIGN</h2>
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

        {/* App Design */}
        <Link
          to="/app_design"
          className="w-auto rounded-[15px] lg:h-auto flex flex-col items-center justify-center text-center font-medium text-primary-White cursor-pointer lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:py-[40px] lg:px-[40px] md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 md:py-[40px] md:px-[40px] md:h-[200px] max-sm:h-[250px] max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-2 max-sm:row-span-1 max-sm:py-[40px] max-sm:px-[40px] relative overflow-hidden group"
          style={{
            backgroundImage: `url(${backgroundImageAppDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="absolute inset-0 bg-primary-Black opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary-Peach opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
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

        {/* Graphic Design */}
        <Link
          to={"/graphic_design"}
          className="w-auto rounded-[15px] lg:h-auto flex flex-col items-center justify-center text-center font-medium text-primary-White cursor-pointer lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-1 lg:py-[40px] lg:px-[40px] md:col-start-1 md:col-span-1 md:row-start-3 md:row-span-1 md:py-[40px] md:px-[40px] md:h-[200px] max-sm:h-[250px] max-sm:col-start-1 max-sm:col-span-1 max-sm:row-start-3 max-sm:row-span-1 max-sm:py-[40px] max-sm:px-[40px] relative overflow-hidden group"
          style={{
            backgroundImage: `url(${backgroundImageGraphicDesign})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="absolute inset-0 bg-primary-Black opacity-75 group-hover:opacity-0 transition-opacity duration-300"></div>
          <div className="absolute inset-0 bg-primary-Peach opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <h2 className="text-[40px] relative z-10">GRAPHIC DESIGN</h2>
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

      {/* Values */}
      <section className="w-full max-sm:px-6">
        <div className="flex w-full gap-8 lg:flex-row md:flex-col max-sm:flex-col justify-between h-auto max-sm:gap-[80px]">
          <div className="flex items-center  lg:w-[350px] lg:flex-col md:flex-row md:w-full  max-sm:w-full max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationPassionate}
                alt="Illustration Passionate"
                className="w-full h-auto"
              />
            </div>

            <div className=" flex flex-col gap-8 lg:text-center md:text-left max-sm:text-center w-2/3">
              <h3 className="text-[20px] uppercase font-medium tracking-wider">
                Passionate
              </h3>
              <p className="text-base font-normal">
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-12 lg:w-[350px] lg:flex-col md:flex-row md:w-full max-sm:w-full max-sm:flex-col">
            <div className="lg:w-[202px]md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full -rotate-90"
              />
              <img
                src={illustrationResourceful}
                alt="Illustration Resourceful"
                className="w-[202px] h-auto"
              />
            </div>
            <div className=" flex flex-col gap-8 lg:text-center md:text-left max-sm:text-center">
              <h3 className="text-[20px] uppercase font-medium tracking-wider">
                Resourceful
              </h3>
              <p className="text-base font-normal">
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-12 lg:w-[350px] lg:flex-col md:flex-row md:w-full max-sm:w-full max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full rotate-90"
              />
              <img
                src={illustrationFriendly}
                alt="Illustration Resourceful"
                className="w-[202px] h-auto"
              />
            </div>
            <div className=" flex flex-col gap-8 lg:text-center md:text-left max-sm:text-center">
              <h3 className="text-[20px] uppercase font-medium tracking-wider">
                Friendly
              </h3>
              <p className="text-base font-normal">
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
