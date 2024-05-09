import { useState } from "react";
import plus from "../assets/images/plus.svg";
import minus from "../assets/images/minus.svg";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

const data = [
  [
    "Do you offer freelancers?",
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  ],
  [
    "What’s the guarantee that I will be satisfied with the hired talent?",
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  ],
  [
    "Can I hire multiple talents at once?",
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  ],
  [
    "Why should I not go to an agency directly?",
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  ],
  [
    "Who can help me pick a right skillset and duration for me?",
    "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
  ],
];

const Accordian = () => {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-10 w-full py-32 px-14 ">
      {data.map((val, index) => (
        <motion.div key={index} className="flex flex-col w-full" layout>
          <div
            className="flex justify-between w-full cursor-pointer"
            onClick={() => {
              currIndex === index ? setCurrIndex(null) : setCurrIndex(index);
            }}
          >
            <p className="font-semibold text-lg">{val[0]}</p>
            <img
              src={currIndex === index ? minus : plus}
              alt="accordian-control"
            />
          </div>
          <motion.p
            className={cn(
              "text-[#617275] text-sm leading-6",
              `${currIndex === index ? "block" : "hidden"}`
            )}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          >
            {val[1]}
          </motion.p>
          <hr
            className={cn(
              "h-[2px] bg-[#D7D7D7] mt-3",
              `${index === data.length - 1 ? "hidden" : "block"}`
            )}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Accordian;
