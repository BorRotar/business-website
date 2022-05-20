import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <Fragment>
    <div className="relative h-62 w-62 rounded-full">
      <div className="flex absolute inset-x-0 h-16 top-40  flex justify-center">
        <span className="bg-2xl text-3xl rounded-full border-3 relative grid grid-cols-3 divide-x bg-emerald-400 shadow-xl font-mono">
          <button className="shadow-sm px-8 rounded-full  hover:bg-emerald-200">
            <Link to="/">Vision</Link>
          </button>
          <button className="shadow-sm px-8  hover:bg-emerald-200">
            <Link to="/about">About</Link>
          </button>
          <button className="shadow-sm px-8 rounded-tr-br  hover:bg-emerald-200 hover:rounded-full">
            <Link to="/contact">Contact</Link>
          </button>
        </span>
      </div>
    </div>
  
    </Fragment>
  );
};

export default Navbar;

// horizontal items
