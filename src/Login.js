import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background: #fafafa;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-between;
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
  height: 2rem;
  width: 15.7rem;
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

const PasswordInput = styled.input`
  height: 1.3rem;
  width: 10rem;
  border: 0rem;
  outline-color: #e6e6e6;
  font-size: 0.75rem;
  padding: 0.5rem;
`;

const PasswordHiddenButton = styled.input`
  height: 2.1rem;
  width: 6.8rem;
  font-size: 14px;
  font-weight: 600;
  background: #fafafa;
  border: 0;
  cursor: pointer;
`;

const LoginButton = styled.input`
  width: 17rem;
  font-size: 0.87rem;
  font-weight: 600;
  line-height: 1.1rem;
  background: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  padding: 0.32rem 0.58rem;
  margin-top: 0.5reml;
  cursor: pointer;
`;

const Or = styled.div`
  width: 17.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const OrEmpty = styled.div`
  height: 0.05rem;
  width: 7rem;
  background: #e6e6e6;
`;

const OrTitle = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #999;
`;

const Facebook = styled.div`
  height: 1.2rem;
  width: 17.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

const FacebookImg = styled.img`
  height: 1.2rem;
  width: 1.2rem;
  margin-right: 0.3rem;
`;

const FacebookLogin = styled.div`
  font-size: 0.85rme;
  font-weight: 600;
  color: #385185;
`;

const ForgetPassword = styled.div`
  width: 17.5rem;
  font-size: 0.75rem;
  color: #385185;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const SignUpCard = styled.div`
  height: 4rem;
  width: 21.8rem;
  background: #fff;
  border: 1px solid #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
`;

const SignUp = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: #999;
`;

const SignUpButton = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: #385185;
  margin-left: 0.3rem;
  cursor: pointer;
`;

const DownloadCard = styled.div`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Download = styled.div`
  height: 4rem;
  font-size: 0.85rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownloadButton = styled.img`
  width: 20rem;
`;

const Footer = styled.div`
  height: 6.5rem;
  width: 52rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 300;
`;

const Since = styled.div`
  font-size: 0.75rem;
  font-weight: 300;
  color: #999;
`;

class Login extends Component {
  state = {
    isPasswordHidden: true,
  }

  changeType = () => {
    const { isPasswordHidden } = this.state;
    this.setState({ isPasswordHidden: !isPasswordHidden });
  }

  render() {
    const { history } = this.props;
    const { isPasswordHidden } = this.state;
    return (
      <Container>
        <Main>
          <PhoneImg src="/images/LoginPhoneImg.png" />
          <Card>
            <LoginCard>
              <LoginCardTitle src="/images/Title.png" />
              <LoginIdInput placeholder="이메일을 입력해 주세요." />
              <LoginPassword>
                <PasswordInput placeholder="비밀번호" type={isPasswordHidden ? 'password' : 'text'} />
                <PasswordHiddenButton type="button" onClick={() => this.changeType()} value={`비밀번호 ${isPasswordHidden ? '표시' : '숨기기'}`} />
              </LoginPassword>
              <LoginButton type="button" value="로그인" />
              <Or>
                <OrEmpty />
                <OrTitle>또는</OrTitle>
                <OrEmpty />
              </Or>
              <Facebook>
                <FacebookImg src="/images/facebook.png" />
                <FacebookLogin>Facebook으로 로그인</FacebookLogin>
              </Facebook>
              <ForgetPassword>비밀번호를 잊으셨나요?</ForgetPassword>
            </LoginCard>
            <SignUpCard>
              <SignUp>계정이 없으신가요?</SignUp>
              <SignUpButton onClick={() => history.push('/signup')}>가입하기</SignUpButton>
            </SignUpCard>
            <DownloadCard>
              <Download>앱을 다운로드하세요.</Download>
              <DownloadButton src="/images/download.png" />
            </DownloadCard>
          </Card>
        </Main>
        <Footer>CARTAGRAM 정보 <Since>2019 CARTAGRAM</Since> </Footer>
      </Container>
    );
  }
}

export default Login;
