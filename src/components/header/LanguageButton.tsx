import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { Language, useLanguage } from "@/store/langStore";
import { useTranslation } from "react-i18next";

const LanguageButton = () => {
  const { lang, changeLanguage } = useLanguage((state) => state);
  const { i18n } = useTranslation();

  const updateLanguage = (lang: Language) => {
    changeLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-0 focus:outline-none">
        <div className="px-1 py-0.5 border border-black dark:border-sky-300 rounded dark:text-sky-300 text-sm ml-4">
          {lang.toUpperCase()}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300">
        <DropdownMenuItem onClick={() => updateLanguage("tr")}>
          <span className="ml-2">Türkçe</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateLanguage("en")}>
          <span className="ml-2">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageButton;
