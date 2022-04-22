import { Fragment } from "react";
import Sakura from "../../assets/images/SakuraContrast.jpg";

const Vision = () => {
  return (
      <Fragment>
    <div className="container w-96 absolute  top-80 left-20">
      <p className="card text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <div className="container absolute bottom-64 left-60">
    <img className="w-96 rounded-full mx-auto" src={Sakura} alt='Beautiful sakura trees'/>
    </div>
    </Fragment>
  );
};

export default Vision;
