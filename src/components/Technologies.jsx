import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import git from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import { motion } from "framer-motion";

const Technologies = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },

    {
      id: 6,
      src: git,
      title: "Github",
    },
    {
      id: 7,
      src: firebase,
      title: "Firebase",
    },
  ];

  return (
    <div
      name="technologies"
      className="w-full max-h-screen pt-20 pb-20 text-primary"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full md:px-8">
        <div>
          <p className="text-5xl text-primary font-bold text-center">
            Technologies
          </p>
          <p className="py-6 text-center text-lg">
            These are the technologies I've worked with my projects
          </p>
        </div>

        <motion.div
          className="w-full grid grid-cols-2 gap-1 text-center pt-20 pb-20 px-2 sm:grid-cols-3 sm:px-4 md:px-6 lg:px-8 xl:px-16 cursor-pointer"
          animate={{}}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md duration-200 hover:scale-105 py-2 rounded-lg ${src}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
