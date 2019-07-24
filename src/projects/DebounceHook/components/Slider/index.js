import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import useDebounce from '../../../../hooks/useDebounce';

const Wrapper = styled.div`
  position: relative;
  padding: 14px 0;
  width: 300px;
`;

const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;

    ::-webkit-slider-runnable-track,
    ::-ms-fill-upper,
    ::-ms-fill-lower {
      background: #dbd8f2;
    }

    ::-webkit-slider-thumb {
      background: #B1E1FF;
    }

    ::-moz-range-thumb {
      background: #B1E1FF;
    }

    ::-ms-thumb {
      background: #B1E1FF;
    }
  }

  ::-ms-track {  
    /* Hides the slider so custom styles can be added */
    background: transparent; 
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  }

  ::-webkit-slider-thumb {
    border: 2px solid #49B1EC;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: #ffffff;
    transition: all .3s;
    cursor: pointer;
  }

  ::-moz-range-thumb {
    border: 2px solid #49B1EC;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: #ffffff;
    transition: all .3s;
    cursor: pointer;
  }

  ::-ms-thumb {
    border: 2px solid #49B1EC;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: #ffffff;
    transition: all .3s;
    cursor: pointer;
  }

  ::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #E8E7F0;
  }

  ::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #E8E7F0;
  }

  ::-ms-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    background: #E8E7F0;
  }

  ::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }

  ::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
`;

const Slider = ({ onChange }) => {
  const [value, setValue] = useState('80');
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <Wrapper>
      <Input type="range" min={0} max={100} value={value} onChange={e => setValue(e.target.value)} />
    </Wrapper>
  );
};

Slider.propTypes = {
  onChange: T.func.isRequired,
};

export default Slider;