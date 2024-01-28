import { Link, useRouteError } from "react-router-dom";

export const CareerError = () => {
  const error = useRouteError();
  return (
    <div className="bg-blue-900 text-white text-5xl m-auto text-center w-[30rem]">
      <p>{error.message}</p>
      <Link to="/" className="text-2xl">
        Back to Homepage
      </Link>
    </div>
  );
};
