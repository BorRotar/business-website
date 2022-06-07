import React, { Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";
import Cropped from "../../assets/images/CroppedSpace.jpg";
import BackgroundLines  from "../../assets/images/diagonal-lines.svg"
import Profile  from "../../assets/images/profile.jpg"


const Contact = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rfpu89s",
        "template_r9362sc",
        form.current,
        "Am-qtnqXH6IAnbHiG"
      )
      .then(
        () => {
          alert("Sporočilo je bilo uspešno poslano!");
          window.location.reload(false);
        },
        () => {
          alert("Prišlo je do napake, prosim poskusite ponovno");
        }
      );
  };
  return (
    <Fragment>
      <div className="bg-gradient-to-r from-sky-400 to-indigo-500s">
      <div className="relative top-64 flex justify-center w-100">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-2/3 xl:w-1/3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group mb-6">
              <input
                type="text"
                name="from_name"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                name="from_email"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
            </div>
            <div className="form-group mb-6" >
              <select
                name="from_subject"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option defaultValue>{props.onOption}</option>
                <option value="1">Svetovanje ISO Standard</option>
                <option value="2">Sistemi odpadkov</option>
                <option value="3">Izobraževanje</option>
                <option value="4">Drugo</option>
              </select>
            </div>
            <div className="form-group mb-6">
              <textarea
                name="message"
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none
      "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send"
              className="
      w-full
      px-6
      py-2.5
      bg-emerald-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-emerald-700 hover:shadow-lg
      focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-emerald-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="relative top-64 md:left-4 xl:left-96 flex w-full justify-center w-100">
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 w-96 bg-gradient-to-r from-sky-500 to-indigo-200">
          <img
            className="w-24 h-24 rounded-full"
            src={Profile}
            alt=""
            width="384"
            height="512"
          />
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg">Dr. Rok Rotar</p>
              <p className="text-lg">Univ.dipl.kem.</p>
              <p className="text-lg">Ljubljana, Slovenija</p>
              <p className="text-lg">+386 51 371 676</p>
            </blockquote>
           
          </div>
        </figure>
        <div className="absolute bottom-0 left-0 mx-2 xl:-left-96 ">
      <p className="text-gray-600/25 text-sm">Website created by <a target="_blank" rel="noopener noreferrer" href="https://github.com/BorRotar">Bor Rotar</a></p>
    </div>
      </div>
      </div>
    </Fragment>
  );
};

export default Contact;
