import React from "react";
import SkillSection from "./SkillSection";
import { useQuery } from "@tanstack/react-query";
import { getSkills } from "../../lib/api";

const Skills = () => {
  const { isLoading, isError, data } = useQuery({ queryKey: ["skills"], queryFn: getSkills });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  const skillSections = Object.keys(data);

  const getSkillList = (section: string): { [key: string]: number } => {
    return data[section];
  };

  return (
    <div className="columns-2 gap-4">
      {skillSections.map((section: string, index: number) => (
        <SkillSection title={section} key={`skill-section-${index}`} skills={getSkillList(section)} />
      ))}
    </div>
  );
};

export default Skills;
