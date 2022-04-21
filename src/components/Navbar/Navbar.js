import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed flex-column top-60 left-60 shadow-sm bg-emerald-400 w-100">
      <span className="basis-1/2 relative shadow-xl font-mono">
        <button>
          <Link to="/">Vision</Link>
        </button>
        <button className="basis-1/2 relative shadow-xl">
          <Link to="/about">About</Link>
        </button>
      </span>
    </div>
  );
};

export default Navbar;

// horizontal items
