import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 4;
    display: ${({ isPostModalClosed }) => (isPostModalClosed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    height: 40rem;
`;

const PostData = styled.div`
    height: 40rem;
    width: 20rem;
    background: #fafafa;
`;

const Title = styled.div`
    height: 4.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
`;

const ProfileImg = styled.img`
  height: 2.8rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const UserName = styled.div`
  font-size: 0.87rem;
  line-height: 1.2rem;
  font-weight: 600;
`;

class PostModal extends Component {

    render () {
        const { isPostModalClosed, isPostModalSwitch, data } = this.props;
        return (
            <Container isPostModalClosed={isPostModalClosed}>
            {console.log(data[1].user.name)}
                <Img src={data[1].imgUrl}/>
                <PostData>
                    <Title>
                        <ProfileImg src="/images/MainProfileImg.png" />
                        <UserName>{data[1].user.name}</UserName>
                    </Title>
                </PostData>
            </Container>      
        );
    }
}

export default PostModal;
