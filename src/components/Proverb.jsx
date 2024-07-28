import React from "react";

function Proverb() {
  return (
    <div
      name="proverb"
      className="text-primary w-full h-screen pb-20 relative"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-center font-bold">Proverb</p>

          <p className="py-6 text-center text-lg font-semibold">
            <i>
              "What I heard I forget, What I see I remember, What I do I
              understand".
            </i>{" "}
            - Confucius.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Proverb;
