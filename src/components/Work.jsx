import React from 'react';

const ProgressJourney = () => {
  return (
    <div className="progress-journey flex justify-center mt-10 transition-all">
      <ul className="journey-description flex flex-col w-96 text-right">
        <li className="pr-10 relative" data-aos="fade-right" data-aos-duration="500">
          <h2 className="text-lg text-primary">Document Clerk at SVI</h2>
          <span className="text-sm f-gray">April - May 2022</span>
        </li>
        <li></li>
      </ul>
      <ul className="journey flex flex-col w-0.5 items-center bg-secondary rounded-full ">
        <li></li>
        <li></li>
      </ul>
      <ul className="journey-description flex flex-col w-96">
        <li></li>
        <li className="pl-10" data-aos="fade-left" data-aos-duration="500">
          <h2 className="text-lg text-primary">
           Lights & Sound System at Magalang
          </h2>
          <span className="text-sm f-gray">On Call</span>
        </li>
      </ul>
    </div>
  );
};

export default ProgressJourney;
