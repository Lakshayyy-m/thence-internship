import heroLady from "../assets/images/heroLady.svg";
import sparkle from "../assets/images/sparkle.svg";
import rocket from "../assets/images/rocket.svg";
import Carousel from "./Carousel";
import rightArrow from "../assets/images/rightArrow.svg";

const HomeHero = () => {
  return (
    <div className="flex flex-col w-full gap-36 pb-44 max-md:scale-75 max-sm:scale-50 ">
      <div className="w-full flex flex-col items-center">
        <p className="covered-by-your-grace-regular text-[#2DA950] text-3xl">
          Success stories
        </p>
        <p className="font-bold text-5xl text-center">
          Every success journey
          <br /> we&apos;ve encountered.
        </p>
      </div>
      <div className="flex w-full max-lg:flex-col max-lg:gap-24">
        <div className=" basis-[50%] flex justify-end pe-4 ">
          <div className="relative">
            <img
              src={heroLady}
              alt=""
              className="rounded-[60px] "
              width="520px"
            />
            <div className="absolute top-28 -left-32 hover:scale-105 hover:cursor-pointer transition-transform">
              <div className="bg-white flex flex-col justify-center p-5 w-64 shadow-hug h-44 relative rounded-3xl">
                <p className="text-5xl font-extrabold switzer">40%</p>
                <p className="text-[#828282] text-sm">
                  Achieved reduction in project execution time by optimising
                  team availability
                </p>
                <img
                  src={sparkle}
                  alt="sparkle"
                  className="absolute -top-7 -left-6 scale-75"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-14 hover:scale-105 hover:cursor-pointer transition-transform">
              <div className="bg-[#002E18] flex flex-col justify-center gap-4 p-5 w-64 shadow-hug h-44 relative rounded-3xl">
                <p className="text-5xl font-bold switzer text-white">
                  $0.5 <span className="text-sm text-[#828282]">MILLION</span>
                </p>
                <p className="text-[#828282] text-sm">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>
            <div className="bg-white flex py-3 px-6 items-center h-20 w-52 shadow-hug rounded-full gap-2 absolute bottom-9 -left-12 hover:scale-105 hover:cursor-pointer transition-transform">
              <div className="bg-[#DDEFE0] rounded-full p-2">
                <img src={rocket} alt="rocket" />
              </div>
              <div>
                <p className="font-extrabold text-lg">10 DAYS</p>
                <p className="text-xs text-[#828282]">Staff Deployment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around max-md:gap-16 items-center basis-[50%] pb-3">
          <Carousel />
          <div className="w-[400px]">
            <button className="bg-dark-1 flex gap-5 justify-center items-center py-6 px-8 text-white rounded-full hover:bg-dark-2">
              Explore more <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
