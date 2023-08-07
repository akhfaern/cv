import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header = ({ children }: Props) => {
  return <header className="relative z-50 w-full border-b p-8">{children}</header>;
};

export default Header;
