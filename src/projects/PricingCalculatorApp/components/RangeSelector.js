import React from 'react';
import styled, { css } from 'styled-components';

import { getPercentage, getCurrentPoints } from '../utils';

const thumbStyles = `
  cursor: pointer;
  border: 3px solid #270295;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #ffffff;
  margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  z-index: 100;
  position: relative;
`;

const trackStyles = css`
  width: 100%;
  height: 8px;
  cursor: pointer;
  border-radius: 3px;
  background: #EFEEF2;
`;

const Input = styled.input`

  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${thumbStyles};
  }

  ::-moz-range-thumb {
    ${thumbStyles};
  }

  ::-ms-thumb {
    ${thumbStyles};
  }

  ::-webkit-slider-runnable-track {
    ${trackStyles};
  }

  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;

    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 8px;

  border-radius: 3px;
  height: 8px;
  background: #270295;
`;

const ProgressText = styled.div`
  position: absolute;
  background: #270295;
  top: 40px;

  color: white;
  font-size: 14px;
  padding: 6px 18px;
  border-radius: 12px;
  transform: translateX(-50%);
  white-space: nowrap;

  font-weight: 600;
`;

const RangeSelector = ({ range, handleChange, min, max, step, points }) => {

  const percentage = getPercentage(range, min, max);
  const currentPoint = getCurrentPoints(points, range);

  return (
    <Wrapper>
      <label>
        <ProgressText style={{ left: `${percentage}%` }}>
          below {currentPoint} records
        </ProgressText>
        <ProgressBar style={{ width: `${percentage}%` }} />
        <Input 
          type="range"
          min={min}
          max={max}
          step={step}
          value={range}
          onChange={handleChange}
        />
      </label>
      
    </Wrapper>
  );
}

export default RangeSelector;