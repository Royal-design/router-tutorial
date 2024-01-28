import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.style.scss";

export const Breadcrumb = () => {
  const location = useLocation();
  console.log(location);
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .map((crumbs) => {
      currentLink += `/${crumbs}`;
      return (
        <div className="crumbs" key={crumbs}>
          <Link to={currentLink}>{crumbs}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
};
