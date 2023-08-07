import React from "react";
import ExperienceSection, { IExperience } from "./ExperienceSection";
import { useQuery } from "@tanstack/react-query";
import { getExperiences } from "../../lib/api";

const Experiences = () => {
  const { isLoading, isError, data } = useQuery({ queryKey: ["experiences"], queryFn: getExperiences });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return data.map((exp: IExperience, index: number) => (
    <ExperienceSection
      achivementList={exp.achivementList}
      companyName={exp.companyName}
      dateRange={exp.dateRange}
      jobDescription={exp.jobDescription}
      jobTitle={exp.jobTitle}
      jobType={exp.jobType}
      techStack={exp.techStack}
      key={`experience-section-${index}`}
    />
  ));
};

export default Experiences;
