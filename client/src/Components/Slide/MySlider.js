import React from "react";
import { Slider, Slide, Caption } from "react-materialize";
import Hen from "./Photos/Hen.jpg";
import Pig from "./Photos/Pig.jpg";
import Chicken from "./Photos/Chicken.jpg";
const MySlider = () => {
  return (
    <div>
      <Slider
        fullscreen={false}
        options={{
          duration: 500,
          height: 400,
          indicators: true,
          interval: 6000,
        }}
      >
        <Slide image={<img src={Hen}></img>}>
          <Caption placement="center">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img src={Pig}></img>}>
          <Caption placement="left">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide image={<img src={Chicken}></img>}>
          <Caption placement="right">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
        <Slide
          image={<img alt="" src="https://lorempixel.com/580/250/nature/4" />}
        >
          <Caption placement="center">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </Caption>
        </Slide>
      </Slider>
    </div>
  );
};

export default MySlider;
