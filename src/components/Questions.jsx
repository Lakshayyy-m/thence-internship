import union from "../assets/images/Union.png";
import Accordian from "./Accordian";

const Questions = () => {
  return (
    <div className="flex justify-center items-center p-8 mb-8">
      <div className="bg-[#E8EEE7] rounded-3xl flex w-full max-md:flex-col">
        <div className="flex flex-col h-fit basis-[50%]">
          <div className="p-28 w-full max-md:p-14">
            <p className="covered-by-your-grace-regular text-2xl text-[#9E9D9D]">
              What&apos;s on your mind
            </p>
            <p className="text-6xl font-semibold">Ask Questions</p>
          </div>
          <div className="max-md:hidden">
            <img src={union} alt="union" className="w-[477px] h-[514px]" />
          </div>
        </div>
        <div className="basis-[50%]">
          <Accordian />
        </div>
      </div>
    </div>
  );
};

export default Questions;
