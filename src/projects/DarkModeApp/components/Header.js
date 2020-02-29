import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  background-color: ${props => props.theme.colors.headerBg};

`;

const Header = ({ children }) => {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Header;