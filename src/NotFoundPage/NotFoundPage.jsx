import { Link } from "react-router-dom";
export const NotFoundPage = () => {
  return (
    <div>
      <p>page not found</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        voluptatem. Et veritatis quos labore dicta quod reiciendis. Consectetur
        tempora magnam ea voluptatibus dolor recusandae, sint possimus sit
        explicabo nostrum in.
      </p>
      <p>
        go to <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
