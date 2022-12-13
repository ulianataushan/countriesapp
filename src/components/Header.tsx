import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Countries App</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/favorites"}>
        <button>Favorites</button>
      </Link>
    </header>
  );
};
