import { IExperience } from "../components/experience/ExperienceSection";
import axios from "./axios";

export const getExperiences = (): Promise<IExperience[]> => {
  return axios.get("/data/experiences.json").then((res) => res.data);
};

export const getSkills = (): Promise<Record<string, Record<string, number>>> => {
  return axios.get("/data/skills.json").then((res) => res.data);
};
