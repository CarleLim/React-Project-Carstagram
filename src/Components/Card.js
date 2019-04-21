import React, { Component } from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import 'moment/locale/ko';

import { db } from '../lib/firebase';

const Container = styled.div`
    backgroud: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    margin-bottom: 4rem;
`;

const Title = styled.div`
    height: 3.75rem;
    display: flex;
    align-items: center;
`;

const ProfileImg = styled.img`
    height: 1.9rem;
    width: 1.9rem;
    margin-left: 1rem;
`;

const UserName = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    margin-left: 0.6rem;
    cursor: pointer;
`;

const Img = styled.img`
    width: 38.5rem;
`;

const CommentsBox = styled.div`
    margin: 0.5rem 1rem;
    font-size: 0.75rem;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonSmallBox = styled.div`
    width: 6.5rem;
    display: flex;
    justify-content: space-between;
`;

const ButtonImg = styled.img`
    height: 1.8rem;
    width: 1.5rem;
    cursor: pointer;
`

const LikesCount = styled.div`
    font-size: 0.85rem;
    font-weight: 600;
    margin: 0.5rem 0rem;
`;

const PostData = styled.div`
    display: flex;
    align-items: center;
`;

const PostUserName = styled.div`
    font-size: 0.85rem;
    font-weight: 600;
    margin-right: 0.5rem;
`;

const Comments = styled.div`
    font-size: 0.85rem;
    color: #999
`;

const PostDataTime = styled.div`
    font-size: 0.65rem;
    color: #999
`;


const PostComment = styled.form`
    height: 3.5rem;
    border-top: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
`;

const PostCommentInput = styled.input`
    width: 34.5rem;
    border: 0;
    outline: 0;
    color: #262626;
    font-size: 0.87rem;
    margin-left: 1rem;
`;

class Card extends Component {
    inputRef = React.createRef();

    isLike = () => {
        const { data, user} = this.props;
        const username = user.email.split('@')[0];
        const dataKey = data[0];
        const likesData = data[1].likes ? Object.entries(data[1].likes) : null;

        if (!likesData) {
            db.ref(`/data/${dataKey}/likes`).push(username);
        } else if (likesData.find(e => e[1] === username)) {
            const removeData = likesData.find(e => e[1] === username)[0];
            db.ref(`/data/${dataKey}/likes/${removeData}`).remove();
        } else {
            db.ref(`/data/${dataKey}/likes`).push(username);
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        const { data, user } = this.props;
        const dataKey = data[0];
        const input = this.inputRef.current;
        
        if (input.value && input.value.length > 0) {
            db.ref(`/data/${dataKey}/replies`).push({
                user: user.email.split('@')[0],
                userId: user.email,
                replies: input.value,
            });
            input.value = '';
        }
    };

  render() {
      const { user, data, history } = this.props;
      const repliesData = data[1].replies ? Object.entries(data[1].replies) : null;;
      const likesData = data[1].likes ? Object.entries(data[1].likes) : null;
      const likeUser = likesData ? likesData.find(e => e[1] === user.email.split('@')[0]) : null;

      return (
      <Container>
          <Title>
            <ProfileImg src="/images/MainProfileImg.png" />
            <UserName onClick={() => history.push(`/profile?uid=${data[1].user.name}`)}>
              {data[1].user.name}
            </UserName>
          </Title>
          {data[1].imgUrl ? <Img src={data[1].imgUrl} /> : null}
          <CommentsBox>
            <ButtonBox>
              <ButtonSmallBox>
                <ButtonImg src={likeUser ? "images/CardColorHeart.PNG" : "images/CardHeart.png"} onClick={() => this.isLike()}/>
                <ButtonImg src="images/CardComments.png"/>
                <ButtonImg src="images/CardShare.png"/>
              </ButtonSmallBox>
              <ButtonImg src="images/CardBookmark.png"/>
            </ButtonBox>
            <LikesCount>좋아요 {likesData ? likesData.length : '0'}개</LikesCount>
            <PostData>
                <PostUserName>{data[1].user.name}</PostUserName> {data[1].text}
            </PostData>
            {repliesData ? repliesData.map(e => (
                <p>
                    <b>{e[1].user}</b> {e[1].replies}
                </p>
            )) : null }
            <PostDataTime>{moment(data[1].createdAt).fromNow()}</PostDataTime>
          </CommentsBox>
          <PostComment onSubmit={this.submitHandler}>
              <PostCommentInput ref={this.inputRef} placeholder="댓글달기..." />
          </PostComment>
      </Container>
      );
  }
}

export default Card;