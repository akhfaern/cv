import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className="flex mt-2">
      <div className="flex w-52 flex-start justify-center">
        <p className="font-semibold text-md text-gray-400 dark:text-gray-300">{dateRange}</p>
      </div>
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col">
            <p className="font-bold text-xl text-sky-900 dark:text-sky-300">{t(jobTitle)}</p>
            <p className="text-md text-gray-600 dark:text-gray-300">{t(jobDescription)}</p>
          </div>
          <div>
            <p className="font-semibold text-md text-black dark:text-white">
              {t(companyName)} | {t(jobType)}
            </p>
          </div>
        </div>
        <ul className="list-disc dark:text-white">
          {achivementList.map((achivement, index) => (
            <li key={`achivement-${index}`}>{t(achivement)}</li>
          ))}
        </ul>
        <div className="flex items-center">
          <p className="text-xs text-sky-600 dark:text-sky-200 min-w-fit">{t("Tech Stack")}</p>
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
