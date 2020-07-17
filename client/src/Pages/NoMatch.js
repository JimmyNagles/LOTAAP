import React from "react";
import { Container, Row, Col } from "react-materialize";
import MySlider from "../Components/Slide/MySlider";
import MyCarousel from "../Components/Carousel/MyCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function NoMatch() {
  return (
    <Container>
      <MyCarousel></MyCarousel>
    </Container>
  );
}

export default NoMatch;
