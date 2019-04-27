import React, { Component } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';


const Container = styled.div`
    height: 18.2rem;
    width: 18.2rem;
    position: relative ;
    z-index: -2;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    margin-bottom: 1.1rem;

    &:hover {
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
      }
    }
`;

const Img = styled.img`
    height: 18.2rem;
    width: 18.2rem;
`;

class MyCard extends Component {
  state ={
    isPostModalClosed: true,
  }

  isPostModalSwitch = () => {
    const { isPostModalClosed } = this.state;
    this.setState({ isPostModalClosed: !isPostModalClosed });
  }

  render() {
    const { isPostModalClosed } = this.state;
    const { data, user, history } = this.props;

      return (
      <Container onClick={() => this.isPostModalSwitch()} isPostModalClosed={isPostModalClosed}>
      <PostModal isPostModalClosed={isPostModalClosed} isPostModalSwitch={this.isPostModalSwitch} data={data} user={user} history={history}/>
        <Img src={data[1].imgUrl} />
      </Container>
      );
  }
}

export default MyCard;