import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: ${({ isLodingSplashClosed }) => (isLodingSplashClosed ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
`;


const LodingSplash = ({ isLodingSplashClosed }) => (
    <Container isLodingSplashClosed={isLodingSplashClosed}>
        <img src="https://webat.net/wp-content/uploads/2018/12/css-loading-spinners.gif" alt="" />
    </Container>
);

export default LodingSplash;