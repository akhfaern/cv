import React from "react";
import QRCode from "react-qr-code";

const NameSection = () => {
  return (
    <div className="mr-4 hidden md:flex items-center">
      <div className="border-4 border-sky-900 dark:border-sky-300 p-2">
        <QRCode value="https://avatars.githubusercontent.com/u/5367389?v=4" size={72} />
      </div>

      <div className="ml-2">
        <p className="text-2xl text-white">
          <span className="bg-sky-900 px-1 dark:bg-sky-300 dark:text-sky-900">MURAT CEM</span>{" "}
          <span className="bg-sky-900 px-1 dark:bg-sky-300 dark:text-sky-900">YALIN</span>
        </p>
        <p className="text-xl mt-4 dark:text-sky-300">Senior Software Developer</p>
        <p className="text-sky-900 text-sm font-semibold dark:text-sky-200">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default NameSection;
