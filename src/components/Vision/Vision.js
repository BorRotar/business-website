import Sakura from "../../assets/images/SakuraContrast.jpg";

const Vision = () => {
  return (
    <div className="absolute flex mb-4 top-80 left-4 right-4 gap-8">
      <div className="w-1/2 flex justify-center flex-wrap">
        <h1 className="card text-justify w-96">Extremely successfull business</h1>
        <p className="card text-justify w-96 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="w-1/2">
        <img
          className=" rounded-full mx-auto"
          src={Sakura}
          alt="Beautiful sakura trees"
        />
      </div>
    </div>
  );
};

export default Vision;
