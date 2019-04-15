import React, { Component } from 'react';
import styled from 'styled-components';

import { auth } from './lib/firebase';

const Container = styled.div`
    padding-top: 1rem;
    background: #fafafa;
    margin: 0 auto;
    width: 935px;
`;

const Main = styled.div`
    display: flex;
    justify-contents: center;
    align-items: center;
    flex-direction: column;
`;


const Card = styled.form`
    height: 32rem;
    width: 21.8rem;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const CardTitle = styled.img`
    height: 5rem;
    width: 11rem;
`;

const FacebookLogin = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 17rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
    background: #3897f0;
    border: 1px; solid #38987f0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 0.4rem;
    cursor: pointer;
`;

const FacebookImg = styled.img`
    height: 1.2rme;
    width: 1.4rem;
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

const Email = styled.input`
    height: 2.3rem;
    width: 16.7rem;
    font-size: 0.75rem;
    border: 1px solid #efefef;
    border-radius: 3px;
    box-sizing: border-box;
    outline-color:#e6e6e6;
    padding: 0.5rem;
`;

const PasswordBox = styled.div`
    height: 2.3rem;
    width: 16.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #efefef;
    border-radius: 3px;
`;

const Password = styled.input`
    height: 1.1rem;
    width: 10rem;
    border: 0;
    outline-color: #e6e6e6;
    font-size: 0.75rem;
    padding: 0.5rem;
`;

const ConfirmPassword = styled.input`
    height: 1.1rem;
    width: 10rem;
    border: 0;
    outline-color: #e6e6e6;
    font-size: 0.75rem;
    padding: 0.5rem;
`;

const PasswordButton = styled.input`
    height: 2.1rem;
    width: 6.8rem;
    font-size: 0.85rem;
    font-weight: 600;
    background: #fafafa;
    border: 0;
    cursor: pointer;
`;

const SignUpButton = styled.input`
    width: 17rem;
    font-size: 0.85rem;
    font-weight: 600;
    background: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    color: #fff;
    padding: 0.4rem;
`;

const LoginBox = styled.div`
    height: 4.5rem;
    width: 21.87rem;
    font-size: 0.85rem;
    color: #262626;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.7rem;
`;

const LoginButton = styled.input`
    font-size: 0.85rem;
    font-weight: 600;
    color:#3897f0;
    border: 0;
    outline-color: #e6e6e6;
    background: #fff;
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
  width: 58rem;
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

class SignUp extends Component {
    emailRef = React.createRef();

    passwordRef = React.createRef();

    confirmPasswordRef = React.createRef();

    state = {
        isPasswordHidden: true,
        isComfirmPasswordHidden: true,
    }
    
    passwordChangeType = () => {
        const { isPasswordHidden } = this.state;
        this.setState({ isPasswordHidden: !isPasswordHidden });
    }

    confirmPasswordchangeType2 = () => {
        const { isComfirmPasswordHidden } = this.state;
        this.setState({ isComfirmPasswordHidden: !isComfirmPasswordHidden });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        const confirmPassword = this.confirmPasswordRef.current.value;
        if (password !== confirmPassword) {
            return window.alert('비밀번호가 일치하지 않습니다.');
        }
        return auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                window.alert('회원가입이 완료되었습니다.');
                history.push('/login');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { history } = this.props;
        const { isPasswordHidden, isComfirmPasswordHidden } = this.state;
        return (
            <Container>
            {console.log(history)}
                <Main>
                    <Card onSubmit={this.handleSubmit}>
                        <CardTitle src="images/Title.png" />
                        <FacebookLogin><FacebookImg src="/images/facebookSignup.png" />facebook으로 로그인</FacebookLogin>
                        <Or>
                            <OrEmpty />
                            <OrTitle>또는</OrTitle>
                            <OrEmpty />
                        </Or>
                        <Email placeholder="이메일을 입력해주세요." ref={this.emailRef}/>
                        <PasswordBox>
                            <Password placeholder="비밀번호" type={isPasswordHidden ? 'password' : 'text'} ref={this.passwordRef}/>
                            <PasswordButton type="button" value={`비밀번호 ${isPasswordHidden ? '표시' : '숨기기'}` } onClick={() => this.passwordChangeType()} />
                        </PasswordBox>
                        <PasswordBox>
                            <ConfirmPassword placeholder="비밀번호" type={isComfirmPasswordHidden ? 'password' : 'text'} ref={this.confirmPasswordRef}/>
                            <PasswordButton type="button" value={`비밀번호 ${isComfirmPasswordHidden ? '표시' : '숨기기'}`}  onClick={() => this.confirmPasswordchangeType2()}/>
                        </PasswordBox>
                        <SignUpButton type="submit" value="가입" />
                    </Card>
                    <LoginBox>계정이 있으신가요?<LoginButton type="submit" value="로그인" onClick={() => history.push('/login')}/></LoginBox>
                    <DownloadCard>
                        <Download>앱을 다운로드하세요.</Download>
                        <DownloadButton src="/images/download.png" />
                    </DownloadCard>
                </Main>
                <Footer>CARTAGRAM 정보 <Since>2019 CARTAGRAM</Since> </Footer>
            </Container>
        );
    }
}

export default SignUp;
