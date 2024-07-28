import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="my-64 mx-auto w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
    >
      <h5 className="text-4xl text-primary font-bold text-center">
        Project in mind?
      </h5>
      <p className="py-6 text-primary text-center text-lg">
        Feel free to approach. My inbox is always open, Whether you have a
        question or just want to say hi
      </p>
      <div className="flex justify-center">
        <button onClick={() => window.location = 'mailto:manansala.anthony23@gmail.com'}
          type="button"
          className="rounded-2xl bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium text-white duration-200 hover:scale-105"
        >
          Say Hi
        </button>
      </div>
    </div>
  );
};

export default Contact;