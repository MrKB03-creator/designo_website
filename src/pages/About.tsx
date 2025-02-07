import {
  bgSmallCircle,
  illustrationAustralia,
  illustrationCanada,
  illustrationUnitedKingdom,
  desktopImageAboutHero,
  desktopimageAboutWorld,
  desktopimageRealDeal,
  bgPattternAboutDesktop,
  tabletImageAboutHero,
  tabletimageAboutWorld,
  tabletimageRealDeal,
  mobileImageAboutHero,
  mobileimageAboutWorld,
  mobileimageRealDeal,
  bgPatternThreeCircles,
} from "../assets";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const getImageHero = (width: number) => {
  if (width >= 1024) {
    return desktopImageAboutHero;
  } else if (width >= 768) {
    return tabletImageAboutHero;
  } else {
    return mobileImageAboutHero;
  }
};

const getImageWorld = (width: number) => {
  if (width >= 1024) {
    return desktopimageAboutWorld;
  } else if (width >= 768) {
    return tabletimageAboutWorld;
  } else {
    return mobileimageAboutWorld;
  }
};

const getRealDeal = (width: number) => {
  if (width >= 1024) {
    return desktopimageRealDeal;
  } else if (width >= 768) {
    return tabletimageRealDeal;
  } else {
    return mobileimageRealDeal;
  }
};

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:gap-[160px] md:gap-[120px] max-sm:gap-0">
      {/* About Us */}
      <section className="w-full flex  rounded-[15px] bg-primary-Peach z-10 lg:flex-row lg:h-[480px] lg:justify-between md:h-[632px] flex-col max-sm:h-[715px]  max-sm:rounded-none relative overflow-hidden">
        <img
          src={bgPattternAboutDesktop}
          alt="background Pattern"
          className="w-[640px] h-[640px] absolute z-0 bottom-0 lg:left-0 md:right-1/4 max-sm:w-[292px] max-sm:h-[292px] max-sm:right-0 max-sm:bottom-1/4"
        />
        <div className=" text-primary-White flex-col flex items-center justify-center gap-8 w-[60%] h-full lg:block md:hidden max-sm:hidden z-10">
          <div className="py-[20%] px-[95px] w-auto">
            <h1 className="text-[48px] font-medium ">About Us</h1>
            <p>
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
        </div>
        <img
          src={getImageHero(windowWidth)}
          alt="Hero"
          className="lg:rounded-r-[15px] lg:h-full lg:w-[40%] md:w-full h-[320px] md:rounded-t-[15px] max-sm:rounded-none object-fill z-10"
        />
        <div className="w-auto h-full text-primary-White flex-col justify-between text-center  md:py-[58px] md:px-[64px] flex max-sm:py-[80px] max-sm:px-6 max-sm:block lg:hidden z-10">
          <h1 className="text-[48px] font-medium ">About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </section>

      {/* World Class Talent */}
      <section className="w-full flex  rounded-[15px] bg-primary-LightPink z-10 lg:flex-row lg:h-[640px] lg:justify-between md:h-[736px] flex-col max-sm:h-auto  max-sm:rounded-none relative overflow-hidden">
        <img
          src={bgPatternThreeCircles}
          alt="background Pattern"
          className="w-[584px] h-[584px] absolute z-0 bottom-0 left-1/4 lg:left-1/4 md:right-1/4 max-sm:left-0 max-sm:bottom-0 "
        />
        <img
          src={getImageWorld(windowWidth)}
          alt="Hero"
          className="lg:rounded-l-[15px] lg:rounded-t-none lg:h-full lg:w-[40%] md:w-full h-[320px] md:rounded-t-[15px] max-sm:rounded-none object-cover z-10"
        />
        <div className="w-auto h-full text-primary-Black gap-8 flex-col justify-between lg:text-pretty lg:py-[15%] lg:px-[10%]
        text-center md:py-[59px] md:px-[68px] flex max-sm:py-[80px] max-sm:px-6  z-10">
          <h1 className="text-[40px] font-medium text-primary-Peach">
            World-class talent
          </h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. 
          </p>
          <p>
            Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="w-full max-sm:px-6 max-sm:py-[120px] z-10">
        <div className="flex w-full lg:gap-[30px] lg:flex-row md:gap-[80px] md:flex-col max-sm:flex-col max-sm:gap-[48px] justify-between h-auto ">
          {/* Canada */}
          <div className="flex items-center justify-center w-full lg:gap-[48px] lg:flex-col md:flex-col md:gap-[80px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationCanada}
                alt="Canada"
                className="w-full h-auto"
              />
            </div>

            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-full mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                Canada
              </h3>
              <Link
                to={"/locations#canada"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"
                onClick={() => window.scrollTo(0, 0)}
              >
                See Location
              </Link>
            </div>
          </div>

          {/* Australia */}
          <div className="flex items-center justify-center  w-full lg:gap-[48px] lg:flex-col md:gap-[80px] md:flex-col max-sm:gap-[48px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationAustralia}
                alt="Australia"
                className="w-full h-auto"
              />
            </div>
            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-2/3 mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                Australia
              </h3>
              <Link
                to={"/locations#australia"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"
                onClick={() => window.scrollTo(0, 0)}
              >
                See Location
              </Link>
            </div>
          </div>

          {/* United Kingdom */}
          <div className="w-full flex items-center justify-center lg:gap-[48px] lg:flex-col md:flex-col md:gap-[80px] max-sm:gap-[48px] max-sm:flex-col">
            <div className="lg:w-[202px] md:w-1/3 max-sm:w-[202px] h-auto relative">
              <img
                src={bgSmallCircle}
                alt="Small Circle"
                className="absolute inset-0 w-full h-full"
              />
              <img
                src={illustrationUnitedKingdom}
                alt="United Kingdom"
                className="w-full h-auto"
              />
            </div>

            <div className=" flex flex-col items-center gap-8 lg:text-center md:text-left max-sm:text-center w-full mt-[48px]">
              <h3 className="text-[20px] font-medium uppercase tracking-[5px]">
                United Kingdom
              </h3>
              <Link
                to={"/locations#unitedKingdom"}
                className=" flex items-center justify-center w-[152px] h-[56px] bg-primary-Peach text-primary-White z-10 rounded-lg uppercase text-[15px] font-medium hover:bg-secondary-LightPeach"
                onClick={() => window.scrollTo(0, 0)}
              >
                See Location
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Deal */}
      <section className="w-full flex  rounded-[15px] bg-primary-LightPink z-10 lg:flex-row lg:h-[640px] lg:justify-between md:h-[736px] flex-col max-sm:h-auto  max-sm:rounded-none relative overflow-hidden">
      <div className="w-auto h-full text-primary-Black gap-8 flex-col justify-between lg:text-pretty lg:py-[15%] lg:px-[10%] text-center md:py-[59px] md:px-[68px] max-sm:py-[80px] max-sm:px-6 z-10 hidden lg:block">
          <h1 className="text-[40px] font-medium text-primary-Peach">
            World-class talent
          </h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. 
          </p>
          <p>
            Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
        </div>
        <img
          src={bgPatternThreeCircles}
          alt="background Pattern"
          className="w-[584px] h-[584px] absolute z-0 bottom-0 left-1/4 lg:left-1/4 md:right-1/4 max-sm:left-0 max-sm:bottom-0 "
        />
        <img
          src={getRealDeal(windowWidth)}
          alt="Hero"
          className="lg:rounded-r-[15px] lg:rounded-t-none lg:h-full lg:w-[40%] md:w-full h-[320px] md:rounded-t-[15px] max-sm:rounded-none object-cover z-10"
        />
        <div className="w-auto h-full text-primary-Black gap-8 flex-col justify-between lg:text-pretty lg:py-[15%] lg:px-[10%] text-center md:py-[59px] max-sm:flex md:px-[68px] max-sm:py-[80px] max-sm:px-6  z-10 block lg:hidden">
          <h1 className="text-[40px] font-medium text-primary-Peach">
            World-class talent
          </h1>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. 
          </p>
          <p>
            Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
