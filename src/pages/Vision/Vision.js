import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Sakura from "../../assets/images/SakuraContrast.jpg";

const Vision = (props) => {
  const [value, setValue] = useState("Please choose an  option");

  return (
    <Fragment>
      <div className="absolute flex mb-4 top-64 left-4 right-4 gap-8 bg-gradient-to-r from-sky-300 to-indigo">
        <div className="w-1/2 flex justify-center flex-wrap">
          <div className="w-4/5">
            <blockquote className="text-5xl font-semibold italic text-center text-slate-900">
              <span className="before:rounded-sm before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-emerald-500 relative inline-block">
                <span className="relative text-white">
                  Moja predstavitvena stran
                </span>
              </span>
            </blockquote>

            <p className="card my-5 text-justify my-4 opacity-70">
              
             Moje ime je Bor Rotar. Zelo rad se učim novih tehnologij in postavljam svoje projekte. Vedno me razveseli ko dosežen želen rezultat pri neki kodi in ta ne pokvari vseh ostalih elementov :D
              
              <h1 className="italic underline decoration-emerald-400 my-2">Spodaj lahko izbereš kateri element bo izpolnjen v kontaktnem obrazcu</h1>
            </p>
            <ul className="mx-4 my-4">
            <Link
                  onClick={() => setValue(props.onOption("HTML heroj"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-sky-500 hover:text-emerald-600 transition duration-300 ease-in-out mb-4"
                >
              <li className=" text-2xl bg-emerald-100 opacity-60 rounded-sm">
             
                  HTML heroj
                  </li>
                </Link>
                <Link
                  onClick={() => setValue(props.onOption("JS legenda"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-sky-600 hover:text-emerald-500 transition duration-300 ease-in-out mb-4"
                >
              <li className=" text-2xl bg-emerald-200 opacity-60 rounded-sm">
              
                  JS legenda
                  </li>
                </Link>
                <Link
                  onClick={() => setValue(props.onOption("React navdušenec"))}
                  to="/contact"
                  className="transition ease-in-out delay-150 text-sky-700 hover:text-emerald-400 transition duration-300 ease-in-out mb-4"
                >
              <li className=" text-2xl bg-emerald-300 opacity-60 rounded-sm">
               
                  React navdušenec
                  </li>
                </Link>
              
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
            src={Sakura}
            alt="Recycle logo"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Vision;
