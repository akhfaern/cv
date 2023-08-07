import React from "react";
import { RateDot } from "./RateDot";

type Props = {
  knowledge: number;
};

const Rate = ({ knowledge }: Props) => {
  const getDots = (knowledge: number) => {
    return [...new Array(5)].map((_, index) => {
      const variant = index < knowledge ? "filled" : "default";
      return <RateDot variant={variant} key={`dot-${index}`} />;
    });
  };

  return <div className="flex">{getDots(knowledge)}</div>;
};

export default Rate;
