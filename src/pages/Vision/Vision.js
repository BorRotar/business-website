import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Green from "../../assets/images/GreenEnergy.png";

const Vision = (props) => {
  const [value, setValue] = useState("Please choose an  option");

  return (
    <Fragment>
      <div className="absolute flex mb-4 top-96 left-4 right-4 gap-8">
        <div className="w-1/2 flex justify-center flex-wrap">
          <div className="w-2/3">
            <blockquote className="text-5xl font-semibold italic text-center text-slate-900">
              <span className="before:rounded-sm before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative inline-block">
                <span className="relative text-white animate-pulse 3s  ">
                  SUPER SUCCESSFUL BUSINESS
                </span>
              </span>
            </blockquote>

            <p className="card text-justify my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc mx-4 my-4">
              <li className=" text-2xl">
                <Link
                  onClick={() => setValue(props.onOption("cccccc"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-emerald-500 hover:text-emerald-600 transition duration-300 ease-in-out mb-4"
                >
                  Success link
                </Link>
              </li>
              <li className=" text-2xl">
                <Link
                  onClick={() => setValue(props.onOption("bbbbbb"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-emerald-400 hover:text-emerald-500 transition duration-300 ease-in-out mb-4"
                >
                  Success link
                </Link>
              </li>
              <li className=" text-2xl">
                <Link
                  onClick={() => setValue(props.onOption("aaaaaaaa"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-emerald-300 hover:text-emerald-400 transition duration-300 ease-in-out mb-4"
                >
                  Success link
                </Link>
              </li>
            </ul>
            <div className="absolute bottom-2 left-0 -my-2">
              <p className="text-gray-600/25 text-sm">
                Website created by{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/BorRotar"
                >
                  Bor Rotar
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="w-3/5"
            // color: #67E8F9
            src={Green}
            alt="Recycle logo"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;
