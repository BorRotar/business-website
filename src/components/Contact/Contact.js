import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rfpu89s', 'template_r9362sc', form.current, 'Am-qtnqXH6IAnbHiG')
      .then(() => {
          alert("Message sent successfully!");
          window.location.reload(false)
      }, () => {
          alert("Something went wrong, please try again");
      });
    }
    return (
      <div className="relative top-96 flex justify-center w-full">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md w-1/3">
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-group mb-6">
      <input type="text" name='from_name' className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput7"
        placeholder="Name" />
    </div>
    <div className="form-group mb-6">
      <input type="email" name='from_email' className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput8"
        placeholder="Email address" />
    </div>
    <div className="form-group mb-6">
      <textarea
      name='message'
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
    <button type="submit" value="Send" className="
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
      ease-in-out">Send</button>
  </form>
</div>
</div>
    )
}

export default Contact