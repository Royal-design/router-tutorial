import { useState } from "react";
import { Navigate } from "react-router-dom";

export const About = () => {
  const [user, setUser] = useState("Oluwaseun");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  const handleClick = () => {
    setUser(null);
  };
  return (
    <div className="">
      <h1>this is about page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam unde at
        velit quos ea sint repellendus temporibus, architecto dolores non
        blanditiis voluptatibus soluta esse magnam rerum voluptates, ipsam nemo
        laudantium!
      </p>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
