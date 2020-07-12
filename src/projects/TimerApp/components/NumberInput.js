import React, { useCallback } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 102px;
  font-weight: 100;
  color: white;
  width: 120px;
  text-align: right;
`;

const NumberInput = ({ value, setValue }) => {
  const handleChange = useCallback((e) => {
    let value = e.target.value;

    value = value.replace(/\D/g,'');
    value = value.slice(0, 2);

    setValue(value);
  }, [setValue]);

  return (
    <Input placeholder="00" type="text" value={value} onChange={handleChange} />
  );
}

export default NumberInput;