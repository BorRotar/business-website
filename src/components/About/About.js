import { Fragment, useState } from "react";
import Sakura from "../../assets/images/SakuraContrast.jpg";
import Carousel from "../Carousel/Carousel";
import Projects, { fourthProject, secondProject, thirdProject } from "./Projects";

const About = () => {
  const [firstHover, setFirstHover] = useState(null);
  const onFirstHover = () => {
    setFirstHover(true);
  };
  const onFirstLeave = () => {
    setFirstHover(false);
  };
  const [secondHover, setSecondHover] = useState(null);
  const onSeocndHover = () => {
    setSecondHover(true);
  };
  const onSecondLeave = () => {
    setSecondHover(false);
  };

  const [thirdHover, setThirdHover] = useState(null);
  const onThirdHover = () => {
    setThirdHover(true);
  };
  const onThirdLeave = () => {
    setThirdHover(false);
  };

  const [fourthHover, setFourthHover] = useState(null);
  const onFourthHover = () => {
    setFourthHover(true);
  };
  const onFourthLeave = () => {
    setFourthHover(false);
  };

  return (
    <Fragment>
    <div className="grow-0 mx-8 relative top-80 grid grid-cols-4 gap-8">
     
        <div className="outline hover:outline-2 rounded-md" onMouseEnter={onFirstHover} onMouseLeave={onFirstLeave}>
          {firstHover ? <div className="mx-4 my-2">{<Projects />}</div> : <img src={Sakura} alt="" />}
        </div>
        <div className="outline hover:outline-2 rounded-md">
          <div  onMouseEnter={onSeocndHover} onMouseLeave={onSecondLeave}>
            {secondHover ? <div  className="mx-4 my-2">{secondProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div className="outline hover:outline-2 rounded-md">
          <div onMouseEnter={onThirdHover} onMouseLeave={onThirdLeave}>
            {thirdHover ? <div className="mx-4 my-2">{thirdProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div className="outline hover:outline-2 rounded-md">
          <div onMouseEnter={onFourthHover} onMouseLeave={onFourthLeave}>
            {fourthHover ? <div className="mx-4 my-2">{fourthProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
      </div>
      <div className="relative top-96 left-96 container flex justify-end">
      <Carousel/>
      
      </div>
      
      </Fragment>
  );
};

export default About;
