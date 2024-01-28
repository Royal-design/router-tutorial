import React from "react";
import "./navbar-list.style.scss";
import { NavbarItem } from "../navbaritem/navbar-item.component";
export const NavbarList = ({ open }) => {
  const data = [
    {
      item: "home",
      id: 1,
      route: "/"
    },
    {
      item: "about",
      id: 2,
      route: "about"
    },
    {
      item: "help",
      id: 3,
      route: "help"
    },
    {
      item: "careers",
      id: 4,
      route: "careers"
    }
  ];
  return (
    <ul className={open ? "navbar-list" : "navbar-close"}>
      {data.map(({ item, id, route }) => (
        <NavbarItem route={route} key={id} item={item} />
      ))}
    </ul>
  );
};
