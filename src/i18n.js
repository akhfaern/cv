import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dict from "./dict.tr.json";

const resources = {
  tr: {
    translation: {
      "SKILLS, TOOLS & PLATFORMS": "BECERİLER, ARAÇLAR & PLATFORMLAR",
      EXPERIENCES: "İŞ DENEYİMİ",
      REFERENCES: "REFERANSLAR",
      CERTIFICATES: "SERTİFİKALAR",
      EDUCATION: "EĞİTİM",
      "Programming Languages": "Programlama Dilleri",
      Databases: "Veritabanları",
      "Project Management": "Proje Yonetimi",
      "Methodologies and Techniques": "Metodolojiler ve Teknikler",
      "Frameworks & Libraries": "Frameworkler ve Kütüphaneler",
      "Development tools": "Geliştirme Araçları",
      Others: "Diğer",
      "Tech Stack": "Teknoloji Listesi",
      ...dict,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
