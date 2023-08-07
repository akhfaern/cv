import React from "react";
import Rate from "./Rate";

interface Props {
  skillName: string;
  rate: number;
}

const Skill = ({ skillName, rate }: Props) => {
  return (
    <div className="flex justify-between">
      <span className="font-semibold text-md dark:text-white">{skillName}</span>
      <Rate knowledge={rate} />
    </div>
  );
};

export default Skill;
