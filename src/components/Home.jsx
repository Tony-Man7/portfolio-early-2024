import React, { useEffect } from "react";
import heroImg from "../assets/me2.jpg";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="home"
      className="w-full min-h-screen flex items-center justify-center relative "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center justify-center h-full px-4 sm:px-8">
        <div data-aos="fade-right" className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold text-primary">
            I'm a Front-end Developer
          </h2>
          <p className="text-primary text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl py-4 max-w-md">
            Dedicated and passionate about crafting beautiful and responsive
            user interfaces. My goal is to deliver exceptional user experiences
            and work efficiently within project parameters.
          </p>
          <div>
            <Link
              to="projects"
              smooth
              duration={800}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-full cursor-pointer bg-secondary duration-200 hover:scale-105 "
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="mt-4 sm:mt-0 flex justify-center">
          <img
            src={heroImg}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 sm:w-full shadow-md shadow-black-900 cursor-pointer duration-200 hover:scale-105 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;