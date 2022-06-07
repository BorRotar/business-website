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
        <strong>ISO 9001</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      <strong>ISO 9001</strong> je mednarodni standard za vodenje kakovosti; primeren je za vse organizacije iz različnih gospodarskih sektorjev in dejavnosti. ISO 9001 temelji na osmih načelih vodenja kakovosti, ki so bistvena za dobro poslovno prakso.
        </div>
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
        <strong>ISO 14001</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">

      <strong>ISO 14001</strong> je mednarodni standard za sisteme ravnanja z okoljem, ki zajema obvladovanje okoljskih vidikov proizvodne ali storitvene dejavnosti.

Standard ISO 14001 je eno od najpomembnejših orodij, ki ga uporabljajo organizacije po celem svetu, da bi odgovorile na izzive, ki jih njihove dejavnosti predstavljajo za okolje. Cilj standarda je ohranjanje okolja in primernih življenjskih pogojev za nadaljnje generacije. Obsega izpolnjevanje zakonskih zahtev, učinkovito izkoriščanje virov, ter preprečevanje onesnaževanja okolja. 
      </div>
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
        <strong>Ravnanje z odpadki</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
      data-bs-parent="#accordionExample">
      <div className="accordion-body py-4 px-5">
      
      Ravnanje z nevarnimi odpadki vsebuje postopke fizikalne in kemijske obdelave, toplotne, biološke obdelave ali katerekoli druge ustrezne metode ravnanja z nevarnimi odpadki, vključeno je tudi odlaganje nevarnih odpadkov (odlagališča nevarnih odpadkov, shranjevanje v zabojnike, podzemno trajno odlaganje oziroma katerokoli drugo metodo odlaganja). 
      </div>
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