import {
  bgPatternTwoCircles,
  bgPatternDesignMobile,
} from "../assets";
import Maps from "../components/Maps";

const Locations = () => {

  return (
    <div className="flex flex-col items-center justify-center lg:gap-[160px] md:gap-[120px] max-sm:gap-[40px] ">
      {/* Canada */}
      <section
        className="w-full flex flex-col gap-[30px] z-10 lg:flex-row lg:h-[326px] md:h-[632px] max-sm:gap-0  max-sm:h-[715px]  max-sm:rounded-none"
        id="canada"
      >
        {/* Canada desktop Information*/}
        <div className=" relative flex-col gap-6 justify-center items-start w-[70%] rounded-[15px] bg-primary-LightPink h-auto py-[5%] px-[8%] lg:flex hidden z-10">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[85%] h-auto absolute z-0 bottom-0 left-0"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach ">
            Canada
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start">
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">
                Designo Central Office
              </h2>
              <p>
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>

        {/* Canada Map */}
        <div className="rounded-[15px] w-full lg:h-full lg:w-[30%] md:h-[326px] max-sm:h-[320px] max-sm:rounded-none object-cover z-10">
          <Maps location="canada"/>
        </div>

        {/* Canada mobile & Tablet Information */}
        <div className=" relative flex-col gap-6 justify-center items-start w-full rounded-[15px] bg-primary-LightPink  py-[5%] px-[8%] flex lg:hidden md:h-[326px] max-sm:h-[394px] max-sm:rounded-none max-sm:items-center max-sm:px-6 max-sm:py-[80px] z-10 overflow-hidden">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[75%] h-auto absolute z-0 bottom-0 left-0 block max-sm:hidden"
          />
          <img
            src={bgPatternDesignMobile}
            alt="background Pattern"
            className="h-[584px] w-[584px] absolute z-0 top-0 right-0 hidden rotate-180 max-sm:block object-contain overflow-hidden opacity-35"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach max-sm:text-[32px]">
            Canada
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start max-sm:flex-col max-sm:text-center max-sm:gap-6">
            <div className="w-[50%] h-full flex-col justify-between ">
              <h2 className="font-bold leading-loose">
                Designo Central Office
              </h2>
              <p>
                3886 Wellington Street
                <br />
                Toronto, Ontario M9C 3J5
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
      </section>

      {/* Australia */}
      <section
        className="w-full flex flex-col gap-[30px] z-10 lg:flex-row lg:h-[326px] md:h-[632px] max-sm:gap-0  max-sm:h-[715px]  max-sm:rounded-none"
        id="australia"
      >
        {/* Australia Map */}
        <div className="rounded-[15px] w-full lg:h-full lg:w-[30%] md:h-[326px] max-sm:h-[320px]  max-sm:rounded-none object-cover z-10 ">
          <Maps location="australia" />
        </div>

        {/* Australia desktop Information*/}
        <div className=" relative flex-col gap-6 justify-center items-start w-[70%] rounded-[15px] bg-primary-LightPink h-auto py-[5%] px-[8%] lg:flex hidden z-10">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[85%] h-auto absolute z-0 bottom-0 left-0"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach ">
            Australia
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start">
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Designo AU Office</h2>
              <p>
                19 Balonne Street
                <br />
                New South Wales 2443
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
        {/* Australia mobile & Tablet Information */}
        <div className=" relative flex-col gap-6 justify-center items-start w-full rounded-[15px] bg-primary-LightPink  py-[5%] px-[8%] flex lg:hidden md:h-[326px] max-sm:h-[394px] max-sm:rounded-none max-sm:items-center max-sm:px-6 max-sm:py-[80px] z-10 overflow-hidden">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[75%] h-auto absolute z-0 bottom-0 left-0 block max-sm:hidden"
          />
          <img
            src={bgPatternDesignMobile}
            alt="background Pattern"
            className="h-[584px] w-[584px] absolute z-0 top-0 right-0 hidden rotate-180 max-sm:block object-contain overflow-hidden opacity-35"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach max-sm:text-[32px]">
            Australia
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start max-sm:flex-col max-sm:text-center max-sm:gap-6">
            <div className="w-[50%] h-full flex-col justify-between ">
              <h2 className="font-bold leading-loose">Designo AU Office</h2>
              <p>
                19 Balonne Street
                <br />
                New South Wales 2443
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
      </section>

      {/* United Kingdom */}
      <section
        className="w-full flex flex-col gap-[30px] z-10 lg:flex-row lg:h-[326px] md:h-[632px] max-sm:gap-0  max-sm:h-[715px]  max-sm:rounded-none"
        id="united-kingdom"
      >
        {/* United Kingdom desktop Information*/}
        <div className=" relative flex-col gap-6 justify-center items-start w-[70%] rounded-[15px] bg-primary-LightPink h-auto py-[5%] px-[8%] lg:flex hidden z-10">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[85%] h-auto absolute z-0 bottom-0 left-0"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach ">
            United Kingdom
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start">
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Designo UK Office</h2>
              <p>
                13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>

        {/* United Kingdom Map */}
        <div className="rounded-[15px] w-full lg:h-full lg:w-[30%] md:h-[326px] max-sm:h-[320px]  max-sm:rounded-none object-cover z-10 ">
          <Maps location="united-kingdom" />
        </div>

        {/* United Kingdom mobile & Tablet Information */}
        <div className=" relative flex-col gap-6 justify-center items-start w-full rounded-[15px] bg-primary-LightPink  py-[5%] px-[8%] flex lg:hidden md:h-[326px] max-sm:h-[394px] max-sm:rounded-none max-sm:items-center max-sm:px-6 max-sm:py-[80px] z-10 overflow-hidden">
          <img
            src={bgPatternTwoCircles}
            alt="background Pattern"
            className="w-[75%] h-auto absolute z-0 bottom-0 left-0 block max-sm:hidden"
          />
          <img
            src={bgPatternDesignMobile}
            alt="background Pattern"
            className="h-[584px] w-[584px] absolute z-0 top-0 right-0 hidden rotate-180 max-sm:block object-contain overflow-hidden opacity-35"
          />
          <h1 className="text-[40px] font-medium text-primary-Peach max-sm:text-[32px]">
            United Kingdom
          </h1>
          <div className="flex flex-row items-center justify-center gap-8 w-full h-full text-primary-Black text-start max-sm:flex-col max-sm:text-center max-sm:gap-6">
            <div className="w-[50%] h-full flex-col justify-between ">
              <h2 className="font-bold leading-loose">Designo UK Office</h2>
              <p>
                13 Colorado Way
                <br />
                Rhyd-y-fro SA8 9GA
              </p>
            </div>
            <div className="w-[50%] h-full flex-col justify-between">
              <h2 className="font-bold leading-loose">Contact</h2>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
