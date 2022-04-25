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
    <div className="grow-0 relative top-80 grid grid-cols-4 gap-4">
     
        <div  onMouseEnter={onFirstHover} onMouseLeave={onFirstLeave}>
          {firstHover ? <div className="">{<Projects />}</div> : <img src={Sakura} alt="" />}
        </div>
        <div >
          <div className="" onMouseEnter={onSeocndHover} onMouseLeave={onSecondLeave}>
            {secondHover ? <div className="">{secondProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div className="overflow-hidden">
          <div onMouseEnter={onThirdHover} onMouseLeave={onThirdLeave}>
            {thirdHover ? <div className="">{thirdProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>
        <div>
          <div onMouseEnter={onFourthHover} onMouseLeave={onFourthLeave}>
            {fourthHover ? <div className="">{fourthProject}</div> : <img src={Sakura} alt="" />}
          </div>
        </div>

      </div>

  );
};

export default About;
