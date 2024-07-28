import React from "react";
import game from "../portfolio/p3.png";
import todo from "../portfolio/p2.png";
import weather from "../portfolio/p1.png";
import AOS from "aos";
import "aos/dist/aos.css";

class Projects extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    const portfolios = [
      {
        id: 1,
        title: "Weathering with you",
        link: "https://antman-anya.github.io/weather-app/",
        src: weather,
      },
      {
        id: 2,
        title: "Todo List",
        link: "https://antman-anya.github.io/todo-list/",
        src: todo,
      },
      {
        id: 3,
        title: "Memory Game",
        link: "#!",
        src: game,
      },
    ];

    return (
      <div
        name="projects"
        className="bg-[#FEFEFE] w-full md:h-screen text-primary pt-20 pb-20 relative"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-5xl text-center font-bold">Projects</p>
            <p className="py-6 text-center text-lg">
              Check out some of my projects here!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-0">
            {portfolios.map(({ id, title, src, link, description }) => (
              <div key={id} className="shadow-md shadow-lg rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-56 w-full"
                />
                <p className="m-auto text-center mt-5 font-bold ">
                  {title} {description ? description : null}
                </p>
                <div className="m-auto text-center mt-5 duration-200 hover:scale-105 ">
                  <a
                    className="text-white px-6 py-2 mt-5 items-center rounded-full cursor-pointer bg-secondary"
                    href={link}
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
