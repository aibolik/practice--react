import React from 'react';
import styled from 'styled-components';

import WindInfo from '../WindInfo';

const Wrapper = styled.div`
  display: flex;
`;

const Chart = ({ forecast }) => {
  
  return (
    <Wrapper>
      {forecast.map(({ wind = {}, dt }) => 
        <WindInfo speed={wind.speed} deg={wind.deg} dt={dt} />)}
    </Wrapper>
  )
};



export default Chart;