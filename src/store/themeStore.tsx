import { create } from "zustand";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeState>()((set) => ({
  theme: "light",
  changeTheme: (theme: Theme) => set(() => ({ theme })),
}));
