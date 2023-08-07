import React from "react";
import Rate from "./Rate";
import { useTranslation } from "react-i18next";

interface Props {
  skillName: string;
  rate: number;
}

const Skill = ({ skillName, rate }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      <span className="font-semibold text-md dark:text-white">{t(skillName)}</span>
      <Rate knowledge={rate} />
    </div>
  );
};

export default Skill;
