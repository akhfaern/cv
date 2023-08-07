import React from "react";
import Skill from "./Skill";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  skills: {
    [key: string]: number;
  };
}

const SkillSection = ({ title, skills }: Props) => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex items-center">
        <ArrowRight className="h-4 w-4 dark:text-sky-100" />
        <p className="font-bold text-xl text-sky-900 ml-2 dark:text-sky-300">{title}</p>
      </div>
      {Object.keys(skills).map((skill, index) => (
        <Skill skillName={skill} rate={skills[skill]} key={`skill-${index}`} />
      ))}
    </div>
  );
};

export default SkillSection;
