import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar-item.style.scss";

export const NavbarItem = ({ item, route }) => {
  return (
    <li className="navbar-item">
      <NavLink to={route} className="navbar-link">
        {item}
      </NavLink>
    </li>
  );
};
