import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Option = styled.div`
  display: inline-block;
  padding: 4px 8px;
  background-color: #f5f5f5;
  border: 1px solid rgba(0,0,0,0.1);
  color: #222;
  cursor: pointer;

  &:not(:first-child) {
    border-left: none;
  }

  &:hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
  }

  ${props => props.active && `
    background-color: #e2e2e2;
  `} 
`;

const ChartSwitcher = ({ chart, setActiveChart }) => {

  return (
    <Wrapper>
      <Option active={chart === 'temperature'} onClick={() => setActiveChart('temperature')}>Temperature</Option>
      <Option active={chart === 'humidity'} onClick={() => setActiveChart('humidity')}>Humidity</Option>
      <Option active={chart === 'wind'} onClick={() => setActiveChart('wind')}>Wind</Option>
    </Wrapper>
  )
}

ChartSwitcher.propTypes = {
  chart: T.string,
  setActiveChart: T.func,
};

export default ChartSwitcher;