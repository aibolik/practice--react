import React from 'react';
import styled from 'styled-components';

import SpinnerGif from '../../assets/gifs/octocat-spinner-128.gif';

const Wrapper = styled.div`
  padding: 16px;
  margin: auto;
  text-align: center;
`;

const Spinner = () => (
  <Wrapper>
    <img width="48" height="48" src={SpinnerGif} />
  </Wrapper>
);

export default Spinner;