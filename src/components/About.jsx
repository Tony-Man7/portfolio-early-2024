import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import meImg from "../assets/me6.jpg";

class About extends React.Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section
        name="about"
        className="w-full px-4 pt-20 pb-20 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20 py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      >
        <p className="text-5xl text-primary font-bold text-center mb-12">
          About
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="mb-12 flex items-center"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            <div className="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-8 text-3xl font-bold text-primary">
                Hi, This is Anthony
              </h2>
              <p className="mb-8 pb-2 text-primary lg:pb-0 ">
                Frontend developer with madly in love in coding, working in web
                technologies and design, delivering quality work.
              </p>
              <div className="mb-8 flex flex-col md:flex-row md:justify-around">
                <p className="mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#FF773D"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Adaptability
                </p>
                <p className="mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#FF773D"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Curiosity
                </p>
                <p className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="#FF773D"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Consistency
                </p>
              </div>
              <p className="mb-0 text-primary">
                My interest in Computer Programming started way back in 2018
                when I accidentally pressed the F12 button and saw the HTML and
                CSS elements on the browser. Fast-forward to today, I am now a
                Frontend Developer, continually improving and gaining more
                experience.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={meImg}
              className="drop-shadow-2xl rounded-lg shadow-lg dark:shadow-black/20 w-9/12 "
              alt="image"
              data-aos="zoom-in-left"
              data-aos-duration="700"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
