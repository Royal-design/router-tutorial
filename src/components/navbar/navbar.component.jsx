import React, { useState } from "react";
import "./navbar.style.scss";
import { Logo } from "../logo/logo.component";
import { NavbarList } from "../navbar-list/navbar-list.component";
import { Collapse } from "../collapse/collapse.component";

export const Navbar = () => {
  const [collapse, setcollapse] = useState(false);
  const handleClick = () => {
    setcollapse(!collapse);
  };
  return (
    <nav className="navbar">
      <Logo />
      <NavbarList open={collapse} />
      <Collapse handleClick={handleClick} collapse={collapse} />
    </nav>
  );
};
