import React from "react";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  link: string;
  text: string;
};

const HeaderLink = ({ Icon, link, text }: Props) => {
  return (
    <a href={link} title={text} className="text-xs flex items-center gap-1.5 py-1 text-sky-900 dark:text-sky-300">
      <Icon className="w-4 h-4" /> {text}
    </a>
  );
};

export default HeaderLink;
