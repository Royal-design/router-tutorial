import { NavLink, Outlet } from "react-router-dom";
import "./help.style.scss";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h1>Help Section</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis modi
        mollitia molestias, incidunt eos sint. Ratione dolore itaque eaque quod
        dolores voluptatem eligendi minima esse! Reprehenderit nam nobis quod
        ipsam.
      </p>
      <nav>
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">CONTACT</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
