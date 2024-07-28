import React, { useState } from 'react';
import Work from './Work';
import Education from './Education';


const Qualification = () => {
  const [active, setActive] = useState('work');

  const switchTo = (tab) => {
    setActive(tab);
  };

  return (
    <div className="m-center pt-20 pb-20 relative">
      <div className="qualification text-center mt-10">
        <p className="text-5xl text-primary font-bold">Qualification</p>
        <p className="py-6 text-primary text-lg">My Personal Journey</p>
      </div>
      <div className="qualification-details qualification-tab flex flex-col mt-20">
        <div className="flex justify-center">
          <div className={`work-tab tabs w-1/4 text-center ${active === 'work' ? 'active' : ''}`}>
            <h2
              className="text-lg cursor-pointer underline underline-offset-1 font-extrabold text-primary hover:text-secondary"
              onClick={() => switchTo('work')}
            >
              Work
            </h2>
          </div>
          <div className={`education-tab tabs w-1/4 text-center ${active === 'education' ? 'active' : ''}`}>
            <h2
              className="text-lg cursor-pointer underline underline-offset-1 font-extrabold text-primary hover:text-secondary"
              onClick={() => switchTo('education')}
            >
              Education
            </h2>
          </div>
        </div>
        <div className="tabs-content">
          {active === 'work' ? <Work /> : <Education />}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
