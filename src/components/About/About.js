import { useState } from "react";
import Sakura from "../../assets/images/SakuraContrast.jpg";
import Projects, { fifthProject, fourthProject, secondProject, thirdProject } from "./Projects";

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

  const [fifthHover, setFifthHover] = useState(null);
  const onFifthHover = () => {
    setFifthHover(true);
  };
  const onFifthLeave = () => {
    setFifthHover(false);
  };

  return (
    <div className="relative top-80 left-5 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 resize-none">
        <div className="relative top-0 left-0" onMouseEnter={onFirstHover} onMouseLeave={onFirstLeave}>
          {firstHover ? <div className="">{<Projects />}</div> : <img src={Sakura} alt="" />}
        </div>
        <div className="col-start-3 max-w-md">
          <div className="position-absolute" onMouseEnter={onSeocndHover} onMouseLeave={onSecondLeave}>
            {secondHover ? <div className="w-30">{secondProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div>
          <div onMouseEnter={onThirdHover} onMouseLeave={onThirdLeave}>
            {thirdHover ? <div className="w-30">{thirdProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div>
          <div onMouseEnter={onFourthHover} onMouseLeave={onFourthLeave}>
            {fourthHover ? <div className="max-w-prose">{fourthProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div className="row-start-1 col-start-2 col-span-2 max-h-8 resize-none">
          <div className="position-absolute" onMouseEnter={onFifthHover} onMouseLeave={onFifthLeave}>
            {fifthHover ? <div className="">{fifthProject}</div> : <img className="" src={Sakura} alt="" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
