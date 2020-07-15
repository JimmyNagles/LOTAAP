import React from "react";
import { Container } from "react-materialize";
import Background from "../Components/Background/Background";
import SecondBackground from "../Components/Background/SecondBackground";

function Home() {
  return (
    <div>
      <Container className="red"></Container>

      <Background></Background>

      <SecondBackground>
        <h2 className="black-text ">2ND </h2>
      </SecondBackground>

      <SecondBackground>
        <h2 className="black-text">3RD </h2>
      </SecondBackground>
      <SecondBackground>
        <h2 className="black-text">4TH </h2>
      </SecondBackground>
    </div>
  );
}

export default Home;
