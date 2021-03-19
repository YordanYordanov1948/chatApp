import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <AppText>Hello</AppText>
    </Container>
  );
}

export default App;

const Container = styled.div``;

const AppText = styled.h1`
  text-align: center;
`;
