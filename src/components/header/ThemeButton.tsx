import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu";
import { Sun, MoonStar } from "lucide-react";
import { useTheme } from "@/store/themeStore";

const ThemeButton = () => {
  const { theme, changeTheme } = useTheme((state) => state);

  return (
    <div className="ml-4">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-0 focus:outline-none">
          {theme === "light" ? (
            <Sun className="h-4 w-4 dark:text-sky-200" />
          ) : (
            <MoonStar className="h-4 w-4 dark:text-sky-200" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="dark:bg-slate-800 dark:ring-0 dark:highlight-white/5 dark:text-slate-300">
          <DropdownMenuItem onClick={() => changeTheme("light")}>
            <Sun className="h-4 w-4" /> <span className="ml-2">Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeTheme("dark")}>
            <MoonStar className="h-4 w-4" /> <span className="ml-2">Dark</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeButton;
