import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => (
    <Container>
        <h1>Loading...</h1>
    </Container>
)