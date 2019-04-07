import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fafafa;
  padding-top: 3rem;
`;

const Main = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PhoneImg = styled.img`
    width: 25.25rem;
`;

const Card = styled.div`
  height: 38.5rem;
  width: 25.25rem;
  display: flex;
  flex-direction: column;
`;

const LoginCard = styled.form`
  height: 22rem;
  width: 21.8rem;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin-top: 2rem;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const LoginCardTitle = styled.img`
  height: 4rem;
  width: 11rem;;
  margin-bottom: 0.5rem;
`;

const LoginIdInput = styled.input`
  height: 2.3rem;
  width: 16.7rem;
  boxs-sizing: border-box;
  border: 1px solid #efefef;
  outline-color: #e6e6e6;
  font-size: 0.75rem;
  padding: 0.5rem;
`;

const LoginPassword = styled.div`
  height: 2.3rem;
  width: 16.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  boxs-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #efefef;  
`;

class Login extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Main>
          <PhoneImg src="/images/LoginPhoneImg.png" />
          <Card>
            <LoginCard>
              <LoginCardTitle src="/images/Title.png" />
              <LoginIdInput placeholder="이메일을 입력해 주세요." />
              <LoginPassword>
                하이
              </LoginPassword>
            </LoginCard>
          </Card>
        </Main>
      </Container>
    );
  }
}

export default Login;
