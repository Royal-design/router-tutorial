import { useLoaderData } from "react-router-dom";

export const CareerDetails = () => {
  const career = useLoaderData();
  // console.log(career);

  return (
    <div>
      <h2>Career detail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
        laboriosam, tempore, quasi consectetur qui in voluptatibus error quae
        assumenda praesentium voluptas eligendi nostrum, aut corrupti.
        Repudiandae, molestiae. Laborum, voluptas modi!
      </div>
    </div>
  );
};

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  console.log(params);
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) throw Error("Career not found");

  return res.json();
};
