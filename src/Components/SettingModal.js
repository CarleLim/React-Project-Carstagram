import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: ${({ isSettingModalClosed }) => (isSettingModalClosed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    height: 21rem;
    width: 25rem;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
`;

const TopButton = styled.button`
    flex: 1;
    width: 100%;
    background: transparent;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: none;
    cursor: pointer
`;

const Button = styled.button`
    flex: 1;
    width: 100%;
    background: transparent;
    border-bottom: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid #efefef;
    cursor: pointer
`;

const SettingModal = ({ isSettingModalClosed, isSettingModalSwitch }) => (
    <Container isSettingModalClosed={isSettingModalClosed}>
        <Modal>
            <TopButton>비밀번호 변경</TopButton>
            <Button>네임 태그</Button>
            <Button>허가된 앱</Button>
            <Button>알림</Button>
            <Button>공개범위 및 보안</Button>
            <Button>로그아웃</Button>
            <Button onClick={() => isSettingModalSwitch()}>취소</Button>
        </Modal>
    </Container>
);

export default SettingModal;