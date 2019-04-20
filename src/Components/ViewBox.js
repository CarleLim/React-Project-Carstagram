import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 13.7rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin-bottom: 0.8rem;
`;

const Nav = styled.div`
  display: flex;
  margin-top: 0.8rem;
`;

const Title = styled.div`
  height: 1.2rem;
  width: 13rem;
  font-weight: 500;
  color: #999;
  font-size: 0.75rem;
  line-height: 1.12rem;
`;

const All = styled.div`
  font-size: 0.75rem;
  line-height: 0.87rem;
  font-weight: 600;s
`;

const ViewBox = ({ title }) => (
    <Container>
        <Nav>
            <Title>{title}</Title>
            <All>모두보기</All>
        </Nav>
    </Container>
);

export default ViewBox;