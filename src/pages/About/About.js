import { Fragment, useState } from "react";

import Accordion from "../../components/Accordion/Accordion";
import Html from "../../assets/images/html.png";
import Css from "../../assets/images/css.png";
import Js from "../../assets/images/js.png";
import React from "../../assets/images/react.png";

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
      <div className="bg-gradient-to-r from-sky-400 to-indigo">
      <div className="mx-4">
        <div className="relative top-64 grid grid-cols-2 gap-4 xl:grid-cols-4  xl:gap-8 w-full">
          <div
            className="outline hover:outline-2 rounded-md md:text-clip grow-0 h-64 bg-gradient-to-r from-sky-200 to-indigo"
            onMouseEnter={onFirstHover}
            onMouseLeave={onFirstLeave}
          >
            {firstHover ? (
              <div className="mx-4 my-2 xl:overflow-hidden">{<Projects />}</div>
            ) : (
              <img className="mx-auto h-full justify-center" src={Html} alt="" />
            )}
          </div>
          <div className="outline hover:outline-2 rounded-md md:text-clip grow-0 h-64 bg-gradient-to-r from-sky-200 to-indigo"
            onMouseEnter={onSecondHover} onMouseLeave={onSecondLeave}>
              {secondHover ? (
                <div className="mx-4 my-2 xl:overflow-hidden">
                  {secondProject}
                </div>
              ) : (
                <img className="mx-auto h-full" src={Css} alt="" />
              )}
          
          </div>
          <div className="outline hover:outline-2 rounded-md col-start-1 col-end-2 xl:col-start-3 xl:col-end-4 h-64 bg-gradient-to-r from-sky-200 to-indigo" onMouseEnter={onThirdHover} onMouseLeave={onThirdLeave}>
              {thirdHover ? (
                <div className="mx-4 my-2 h-48">{thirdProject}</div>
              ) : (
                <img className="mx-auto h-full" src={Js} alt="" />
              )}
          </div>
          <div className="outline hover:outline-2 rounded-md h-64 bg-gradient-to-r from-sky-100 to-indigo" onMouseEnter={onFourthHover} onMouseLeave={onFourthLeave}>
              {fourthHover ? (
                <div className="mx-4 my-2 h-48">{fourthProject}</div>
              ) : (
                <img className="mx-auto h-full" src={React} alt="" />
              )}
          </div>
          <div className="relative col-start-1 col-end-5 h-48">
            <Accordion />
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default About;
