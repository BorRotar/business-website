import { Fragment } from 'react';
import 'tw-elements';




const Accordion = () => {
    return (
      <Fragment>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item bg-white border border-gray-200 bg-gradient-to-r from-sky-200 to-indigo">
    <h2 className="accordion-header mb-0" id="headingOne">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none bg-gradient-to-r from-emerald-100 to-indigo
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
        aria-controls="collapseOne">
        <strong>Cilj</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      Ustvariti svoj projekt kot spletno stran ali aplikacijo z uporabo React.  </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200 bg-gradient-to-r from-sky-200 to-indigo">
    <h2 className="accordion-header mb-0" id="headingTwo">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none bg-gradient-to-r from-emerald-100 to-indigo
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
        aria-controls="collapseTwo">
        <strong>Tehnologije</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">

      React, JS, HTML in CSS</div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200  bg-gradient-to-r from-sky-200 to-indigo">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none bg-gradient-to-r from-emerald-100 to-indigo
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
        aria-controls="collapseThree">
        <strong>Druga znanja</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
     Italijanščina, angleščina, japonščina</div>
    </div>
  </div>
</div>
 <div>
 <p className="text-gray-600/25 text-sm">Website created by <a target="_blank" rel="noopener noreferrer" href="https://github.com/BorRotar">Bor Rotar</a></p>
</div>
</Fragment>
    )
}

export default Accordion