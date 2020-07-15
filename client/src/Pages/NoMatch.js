import React from "react";
import { Container, Row, Col } from "react-materialize";
function NoMatch() {
  return (
    <Container>
      <h1>404 Page Not Found</h1>
      <h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </Container>
  );
}

export default NoMatch;
