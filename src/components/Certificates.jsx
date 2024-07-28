import React from "react";
import Slider from "react-slick";

import JS from "../assets/js-certificate.jpg";
import SD from "../assets/sd-certificate.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const callouts = [
  {
    name: "JavaScript Algorithm and Data Structure",
    imageSrc: JS,
    imageAlt: "JS-CERT",
  },
  {
    name: "Introduction of Software Development",
    imageSrc: SD,
    imageAlt: "SD-CERT",
  },
  {
    name: "Rigional Assembly in Information Technology",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "RAITE-CERT",
  },
];

export default function Certificates() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:max-w-none lg:py-20">
        <h2 className="text-2xl font-bold text-primary text-center">Certificates</h2>

        <div className="mt-6">
          <div className="mx-auto max-w-xl">
            <Slider {...settings}>
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative text-center">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-transparent drop-shadow-2xl sm:aspect-h-1 sm:aspect-w-2 md:aspect-h-1 md:aspect-w-1 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 cursor-pointer">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                      data-aos="fade-down"
                      data-aos-duration="800"
                    />
                  </div>

                  <p className="mt-6 text-base font-semibold text-gray-600">
                    {callout.name}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
