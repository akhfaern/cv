import React from "react";

export interface IExperience {
  dateRange: string;
  jobTitle: string;
  jobDescription: string;
  companyName: string;
  jobType: string;
  achivementList: string[];
  techStack: string[];
}

const ExperienceSection = ({
  dateRange,
  jobTitle,
  jobDescription,
  companyName,
  jobType,
  achivementList,
  techStack,
}: IExperience) => {
  return (
    <div className="flex mt-2">
      <div className="flex w-52 flex-start justify-center">
        <p className="font-semibold text-md text-gray-400">{dateRange}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-xl text-sky-900">{jobTitle}</p>
            <p className="text-md text-gray-600">{jobDescription}</p>
          </div>
          <div>
            <p className="font-semibold text-md text-black">
              {companyName} | {jobType}
            </p>
          </div>
        </div>
        <ul className="list-disc">
          {achivementList.map((achivement, index) => (
            <li key={`achivement-${index}`}>{achivement}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <p className="text-xs text-sky-600 min-w-fit">Tech Stack</p>
          <ul className="list-none">
            {techStack.map((tech, index) => (
              <li key={`tech-${index}`} className="float-left ml-2 bg-gray-300 text-gray-600 px-2 mt-2 text-sm">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
