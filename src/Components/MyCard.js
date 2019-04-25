import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 18.2rem;
    width: 18.2rem;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    margin-bottom: 1.1rem;
`;

const Img = styled.img`
    height: 18.2rem;
    width: 18.2rem;
`;

class MyCard extends Component {

  render() {
    const { data } = this.props;
    const imgUrl = data ? data[1].imgUrl : null;

      return (
      <Container imgUrl={imgUrl}>
        <Img src={imgUrl} />
      </Container>
      );
  }
}

export default MyCard;