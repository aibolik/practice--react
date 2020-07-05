import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import Button from './Button';

import { SYMBOLS } from '../constants';
import { infixToPostfix, evaluatePostfix } from '../utils/math-operations';

const Wrapper = styled.div`
  max-width: 500px;
  padding-top: 100px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Notation = styled.input`
  color: rgba(255, 255, 255, 0.72);
  background: none;
  border: none;
  outline: none;
  font-size: 28px;
  text-align: right;
  width: 100%;
  margin-bottom: 24px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, .21);
  margin-bottom: 24px;
`;

const Result = styled.div`
  color: #FFF;
  font-size: 48px;
  text-align: right;
  margin-bottom: 32px;
`;

const Calculator = () => {
  const [notation, setNotation] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = useCallback((s) => {
    switch (s) {
      case 'del':
        setNotation(notation.slice(0, -1));
        break;
      case 'clear':
        setNotation('');
        break;
      default:
        setNotation(`${notation}${s}`);
    }    
  }, [notation]);

  useEffect(() => {
    const postfixNotation = infixToPostfix(notation);
    const result = evaluatePostfix(postfixNotation);
    console.log('infix', notation);

    if (!Number.isNaN(result) && typeof result === 'number') {
      setResult(result);
    }

    if (!notation) {
      setResult(0);
    }

  }, [notation]);

  return (
    <Wrapper>
      <Notation type="text" readOnly value={notation} />
      <Divider />
      <Result>{result}</Result>
      {SYMBOLS.map((row, i) => (
        <Row key={i}>
          {row.map(s => (
            <Button key={s} onClick={() => handleButtonClick(s)}>
              {s}
            </Button>
          ))}
        </Row>
      ))}
    </Wrapper>
  );
}

export default Calculator;