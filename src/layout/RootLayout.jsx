import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar.component";
import { Breadcrumb } from "../components/Breadcrumb";

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
