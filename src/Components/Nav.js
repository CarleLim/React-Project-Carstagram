import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 4.75rem;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
    background: #fff;
    border: 1px solid #e6e6e6;
`;

const Bar = styled.div`
    width: 60.7rem;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    flex: 2;
`;

const TitleImg = styled.img`
    width: 10rem;
    cursor: pointer;
`;

const Search = styled.input`
    flex: 1.1;
    background: #fafafa;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #262626;
    outline: 0;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    padding: 0.3rem 0.2rem;
    cursor: text;
`;

const Menu = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
`;

const MenuBox = styled.div`
    width: 8.3rem;
    height: 1.8rem;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.img`
    width: 1.5rem;
    cursor: pointer;
`;

const Nav = ({ location: { pathname }, history, user }) => (
    (pathname.startsWith('/login') || pathname.startsWith('/signup'))
        ? null
        : (
            <Container>
                <Bar>
                    <Title><TitleImg src="/images/NavTitle.png" onClick={() => history.push('/')}/></Title>
                    <Search placeholder="검색"/>
                    <Menu>
                        <MenuBox>
                            <Button src="/images/NavCompass.png" />
                            <Button src="/images/NavHeart.png" />
                            <Button src="/images/NavProfile.png" onClick={() => history.push(`/profile?uid=${user.email.split('@')[0]}`)}/>
                        </MenuBox>
                    </Menu>
                </Bar>
            </Container>
        )
);

export default Nav