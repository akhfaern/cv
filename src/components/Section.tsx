import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  title: string;
  className?: string;
  children: ReactNode;
};

const Section = ({ title, className, children }: Props) => {
  return (
    <div className={cn("flex flex-col min-w-full", className)}>
      <div className="flex min-w-full items-center">
        <div className="bg-sky-900 text-white font-semibold text-xs rounded-lg p-2">{title}</div>
        <hr className="border-t border-dotted border-sky-900 dark:border-sky-300 ml-2 flex-grow" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
