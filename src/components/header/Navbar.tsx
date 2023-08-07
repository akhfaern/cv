import React from "react";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";

const Navbar = () => {
  return (
    <div className="flex ml-auto items-center">
      <LanguageButton /> <ThemeButton />
    </div>
  );
};

export default Navbar;
