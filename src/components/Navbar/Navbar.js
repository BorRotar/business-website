import { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <Fragment>
    <div className="relative h-62 w-62 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <div className="flex absolute inset-x-0 h-16 top-24  flex justify-center">
        <span className="bg-2xl text-3xl rounded-full border-3 relative grid grid-cols-3 divide-x bg-emerald-400 opacity-90 shadow-xl font-mono">
        <Link to="/" className=" flex justify-center px-8 rounded-l-full  hover:bg-emerald-200">
            <p className="my-4">Vision</p>
          </Link>
          <Link to="/about" className="flex justify-center hover:bg-emerald-200">
            <p className="my-4">About</p></Link>
            <Link to="/contact" className="flex justify-center px-8 rounded-r-full  hover:bg-emerald-200 ">
            <p className="my-4">Contact</p></Link>
          
        </span>
      </div>
    </div>
  
    </Fragment>
  );
};

export default Navbar;

// horizontal items
