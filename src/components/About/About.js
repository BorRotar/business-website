import { useState } from "react";
import Sakura from "../../assets/images/SakuraContrast.jpg";

const About = () => {
 const [hover, setHover] = useState(null)
 const onHover = () => {
   setHover(true);
 };
 const onLeave = () => {
  setHover(false);
};
const [hhover, setHhover] = useState(null)
const onHhover = () => {
  setHhover(true);
};
const onLleave = () => {
 setHhover(false);
};

  return (
    <div className="relative top-80 left-5 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
 <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div onMouseEnter={onHover}
      onMouseLeave={onLeave}
  >
    {hover ? 'Visible text' : 
    <img src={Sakura} alt="" />}
  </div>
  <div className="col-start-3">
  <div onMouseEnter={onHhover}
      onMouseLeave={onLleave}
  >
    {hhover ? 'Visible text' : 
    <img src={Sakura} alt="" />}
  </div>
  </div>
  <div>
    <img src={Sakura} alt=""/>
  </div>
  <div>
    <img src={Sakura} alt=""/>
  </div>
  <div className="row-start-1 col-start-2 col-span-2">
    <img src={Sakura} alt=""/>
  </div>
</div>
</div>
  );
};

export default About;
