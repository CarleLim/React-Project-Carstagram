import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Components/Card';
import ViewBox from './Components/ViewBox';

const Container = styled.div`
  width: 935px;
  margin: 0 auto;
  background: #fafafa;
  padding-top: 8.5rem;
  display: flex;
`;

const CardContainer = styled.div`
  flex: 1.9;
  padding-top: 0.5rem;
`;

const SideContainer = styled.div`
  flex: 1;
  margin-left: 1.5rem;
`;

const Profile = styled.div`
  height: 3.1rem;
  display: flex;
  margin-left: 0.2rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const ProfileImg = styled.img`
  height: 3.1rem;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.8rem;
`;

const UserName = styled.div`
  font-size: 0.87rem;
  line-height: 1.2rem;
  font-weight: 600;
`;

const UserId = styled.div`
  font-size: 0.75rem;
  line-height: 0.87rem;
  color: #999;
`;

class Main extends Component {
  state = {}

  render() {
    const { user, data, history } = this.props;
    return (
      <Container>
        <CardContainer>
          {(Object.entries(data).reverse()).map((e, i) => (
            <Card key={i} history={history} user={user} data={e} />
          ))}
        </CardContainer>
        <SideContainer>
          <Profile onClick={() => history.push(`/profile?uid=${user.email.split('@')[0]}`)} >
            <ProfileImg src="/images/MainProfileImg.png" />
            <User>
              <UserName>{user ? user.email.split('@')[0]: null}</UserName>
              <UserId>{user ? user.email: null}</UserId>
            </User>
          </Profile>
          <ViewBox title="스토리" />
          <ViewBox title="회원님을 위한 추천" />
        </SideContainer>
      </Container>
    );
  }
}

export default Main;
