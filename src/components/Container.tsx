import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container flex items-center m-auto p-2 max-w-screen-lg mt-2">{children}</div>;
};

export default Container;
