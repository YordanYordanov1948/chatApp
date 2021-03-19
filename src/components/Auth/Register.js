import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <TextRegister>Hello from register</TextRegister>
    </Container>
  );
};

export default Register;

const Container = styled.div``;

const TextRegister = styled.h1`
  text-align: center;
`;
