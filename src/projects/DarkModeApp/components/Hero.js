import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 64px;
`;

const Wrapper = styled.div`
  padding: 0 40px;
`;

const Hero = () => {


  return (
    <Wrapper>
      <Title>
        Using Themes with React and styled-components
      </Title>
    </Wrapper>
  );
}

export default Hero;