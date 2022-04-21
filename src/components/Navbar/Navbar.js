import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="fixed flex-column top-60 left-60 w-100">
      <span className="rela tive shadow-xl font-mono">
        <button className="basis-1/2 shadow-sm bg-emerald-400 rounded-full border-2">
          <Link to="/">Vision</Link>
        </button>
        <button className="basis-1/2 shadow-sm bg-emerald-400 rounded-full border-2">
          <Link to="/about">About</Link>
        </button>
      </span>
    </div>
  );
};

export default Navbar;

// horizontal items
