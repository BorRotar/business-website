import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="relative h-62 w-62">
    <div className="flex absolute inset-x-0 top-40 left-40 h-16">
      <span className="text-2xl rounded-full border-3 relative grid grid-cols-2 divide-x bg-emerald-400 shadow-xl font-mono">
        <button className="shadow-sm px-8">
          <Link to="/">Vision</Link>
        </button>
        <button className="shadow-sm px-8">
          <Link to="/about">About</Link>
        </button>
      </span>
    </div>
    </div>
  );
};

export default Navbar;

// horizontal items
