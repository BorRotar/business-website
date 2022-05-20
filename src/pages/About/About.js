import { Fragment, useState } from "react";
import Sakura from "../../assets/images/SakuraContrast.jpg";
import Accordion from "../../components/Accordion/Accordion";

import Projects, {
  fourthProject,
  secondProject,
  thirdProject,
} from "./Projects";

const About = () => {
  const [firstHover, setFirstHover] = useState(null);
  const onFirstHover = () => {
    setFirstHover(true);
  };
  const onFirstLeave = () => {
    setFirstHover(false);
  };
  const [secondHover, setSecondHover] = useState(null);
  const onSecondHover = () => {
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
      <div className="mx-4">
        <div className="relative top-80 grid grid-cols-2 gap-4 xl:grid-cols-4  xl:gap-8 w-full">
          <div
            className="outline hover:outline-2 rounded-md md:text-clip grow-0 h-64"
            onMouseEnter={onFirstHover}
            onMouseLeave={onFirstLeave}
          >
            {firstHover ? (
              <div className="mx-4 my-2 xl:overflow-hidden">{<Projects />}</div>
            ) : (
              <img className="h-full" src={Sakura} alt="" />
            )}
          </div>
          <div className="outline hover:outline-2 rounded-md md:text-clip grow-0 h-64"
            onMouseEnter={onSecondHover} onMouseLeave={onSecondLeave}>
              {secondHover ? (
                <div className="mx-4 my-2 xl:overflow-hidden">
                  {secondProject}
                </div>
              ) : (
                <img className="h-full" src={Sakura} alt="" />
              )}
          
          </div>
          <div className="outline hover:outline-2 rounded-md col-start-1 col-end-2 xl:col-start-3 xl:col-end-4 h-64" onMouseEnter={onThirdHover} onMouseLeave={onThirdLeave}>
              {thirdHover ? (
                <div className="mx-4 my-2 h-48">{thirdProject}</div>
              ) : (
                <img className="h-full" src={Sakura} alt="" />
              )}
          </div>
          <div className="outline hover:outline-2 rounded-md h-64" onMouseEnter={onFourthHover} onMouseLeave={onFourthLeave}>
              {fourthHover ? (
                <div className="mx-4 my-2 h-48">{fourthProject}</div>
              ) : (
                <img className="h-full" src={Sakura} alt="" />
              )}
          </div>
          <div className="relative col-start-1 col-end-5 h-48">
            <Accordion />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
