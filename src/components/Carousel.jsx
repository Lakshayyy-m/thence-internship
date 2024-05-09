import { useState } from "react";
import { cn } from "../../lib/utils";

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const data = [
    "Enhance fortune 50 company's insights teams research capabilities",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing.",
  ];

  // const translateClass = `-translate-x-[${currIndex * 100}%]`;

  return (
    <div className="w-full flex flex-col justify-center items-center gap-14">
      <div className="w-[400px] flex gap-0 flex-nowrap overflow-hidden ">
        {data.map((val, index) => (
          <p
            key={index}
            className={cn(
              "font-semibold text-4xl min-w-[400px] transition-transform",
              `-translate-x-[${currIndex * 100}%]`
            )}
          >
            {val}
          </p>
        ))}
      </div>
      <div className="flex gap-2 w-[400px] justify-start">
        {data.map((val, index) => (
          <div
            key={index}
            className={cn("h-[9px] w-[9px] rounded-full", {
              "bg-green-600": index === currIndex,
              "bg-[#E4E3E3] hover:bg-[#CAD0CB] hover:cursor-pointer":
                index !== currIndex,
            })}
            onClick={() => {
              setCurrIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
