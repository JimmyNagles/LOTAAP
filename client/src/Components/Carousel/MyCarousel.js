import React from "react";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
          />
          <p className="legend">Episode 1</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
          />
          <p className="legend">Episode 2</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
          />
          <p className="legend">Episode 3</p>
        </div>

        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
          />
          <p className="legend">Episode 4</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
          />
          <p className="legend">Episode 4</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg"
          />
          <p className="legend">Episode 4</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
