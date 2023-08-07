import { create } from "zustand";

export type Language = "tr" | "en";

interface LanguageState {
  lang: Language;
  changeLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageState>()((set) => ({
  lang: "en",
  changeLanguage: (lang: Language) => set(() => ({ lang })),
}));
