import React, { Component } from 'react';
import styled from 'styled-components';

import * as moment from 'moment';
import 'moment/locale/ko';


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
    font-size: 0.75rem;
`;

const Title = styled.div`
    height: 4.5rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
`;

const ProfileImg = styled.img`
  height: 2.3rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
`;

const UserName = styled.div`
  font-size: 0.83rem;
  line-height: 1.2rem;
  font-weight: 600;
  margin-right: 0.3rem;
`;

const FollowButton = styled.input`
    border: 0;
    background: 0;
    font-size: 0.83rem;
    line-height: 1.2rem;
    font-weight: 600;
    color: ${({ isFollowing }) => (isFollowing ? 'black' : '#3897f0')};
`;

const TextBox = styled.div`
    font-size: 0.83rem;
    line-height: 1.2rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const Text = styled.div`
    font-size: 0.83rem;
    line-height: 1.2rem;
    font-weight: 400;
`;

const Wrap = styled.div`
    display: flex;
    align-items: center;
`

const CreatedAt = styled.div`
    color: #999;
`

const RepliesBox = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

class PostModal extends Component {

    isFollow = (uid, isFollowing) => {
        const { data, user } = this.props;

        console.log(data)
    }
    
    render () {
        const { isPostModalClosed, isPostModalSwitch, data, history, user } = this.props;
        const params = new URLSearchParams(history.location.search);
        const uid = params.get('uid');
        const isFollowing = (uid !== user.email.split('@')[0] && data[1].user.follower) ? Object.values(data[1].user.follower).find(e => e === user.email) : null;
        const repliesData = data[1].replies ? Object.entries(data[1].replies) : null;;

        return (
            <Container isPostModalClosed={isPostModalClosed}>
            {console.log(data[1].text)}
                <Img src={data[1].imgUrl}/>
                <PostData>
                    <Title>
                        <ProfileImg src="/images/MainProfileImg.png" />
                        <UserName>{data[1].user.name}</UserName>
                        {uid !== user.email.split('@')[0] ?
                            <FollowButton
                                value={isFollowing ? '팔로잉' : '팔로우'}
                                type='button'
                                isFollowing={isFollowing}
                                onClick={(uid, isFollowing) => this.isFollow(uid, isFollowing)}
                            />
                        : null}
                    </Title>
                    <TextBox>
                        <ProfileImg src="/images/MainProfileImg.png" />
                        <Wrap>
                        <UserName>{data[1].user.name}</UserName><Text>{data[1].text}</Text>
                        </Wrap>
                        <CreatedAt>{moment(data[1].createdAt).fromNow()}</CreatedAt>
                    </TextBox>
                    {repliesData ? repliesData.map(e => (
                        <RepliesBox>
                            <ProfileImg src="/images/MainProfileImg.png" />
                            <UserName>{e[1].user}</UserName>{e[1].replies}
                        </RepliesBox>
                    )) : null }
                </PostData>
            </Container>      
        );
    }
}

export default PostModal;
