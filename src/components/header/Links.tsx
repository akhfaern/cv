import React from "react";
import HeaderLink from "./HeaderLink";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

const links = [
  { icon: Linkedin, link: "https://www.linkedin.com/in/murat-cem-yalin/", text: "/murat-cem-yalin" },
  { icon: Github, link: "https://github.com/akhfaern", text: "/akhfaern" },
  { icon: Mail, link: "mailto:muratcem@gmail.com", text: "muratcem@gmail.com" },
  { icon: Phone, link: "tel:+90 507", text: "+90 507" },
];

const Links = () => {
  return (
    <div className="ml-auto">
      {links.map((link, index) => (
        <HeaderLink Icon={link.icon} link={link.link} text={link.text} key={`header-link-${index}`} />
      ))}
    </div>
  );
};

export default Links;
