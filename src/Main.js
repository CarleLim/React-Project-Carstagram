import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fafafa;
  padding-top: 3rem;
`;

class Main extends Component {
  state = {}

  render() {
    return (
      <Container>
        Carstagram
      </Container>
    );
  }
}

export default Main;
