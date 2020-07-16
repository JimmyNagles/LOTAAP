import React from "react";
import { Container } from "react-materialize";
import Background from "../Components/Background/Background";
import SecondBackground from "../Components/Background/SecondBackground";
import SlideImg from "../Components/Slide/SlideImg";
import MySlider from "../Components/Slide/MySlider";

function Home() {
  return (
    <div>
      <Container className="red"></Container>

      <Background></Background>

      <SecondBackground>
        <h2 className="white-text ">Why Veganism </h2>
      </SecondBackground>
      <Container>
        <MySlider></MySlider>
      </Container>
      <SecondBackground>
        <h2 className="white-text">How the Meat industry brainswashed you </h2>
      </SecondBackground>

      <Container>
        <SlideImg></SlideImg>
      </Container>
      <SecondBackground>
        <h2 className="white-text">
          How Animal Agriculture affects Climate Change{" "}
        </h2>
      </SecondBackground>
      <Container>
        <SlideImg></SlideImg>
      </Container>
      <SecondBackground>
        <h2 className="white-text">About Us </h2>
      </SecondBackground>
    </div>
  );
}

export default Home;
