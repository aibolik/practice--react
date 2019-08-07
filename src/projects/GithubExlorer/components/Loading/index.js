import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Loading = ({ color = '#adceb0' }) => {
  return (
    <Wrapper>
      <ReactLoading type='balls' color={color} />
    </Wrapper>
  );
};

export default Loading;