import React from 'react';

const ProgressJourney = () => {
  return (
    <div className="progress-journey flex justify-center mt-10 transition-all">
      <ul className="journey-description flex flex-col w-96 text-right ">
        <li className="pr-10">
          <h2 className="text-lg text-primary">
           Front-End Developer - Freecodecamp.org
          </h2>
          <span className="text-sm f-gray">April 2023</span>
        </li>
        <li></li>
      </ul>
      <ul className="journey flex flex-col w-0.5 items-center bg-secondary rounded-full">
        <li></li>
        <li></li>
      </ul>
      <ul className="journey-description flex flex-col w-96">
        <li></li>
        <li className="pl-10">
          <h2 className="text-lg text-primary">
            Associate in Computer Technology - Mabalacat City College - Pampanga
          </h2>
          <span className="text-sm f-gray">2018 – 2020</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressJourney;
