import React, { useState, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import NumberInput from './NumberInput';
import Button from './Button';
import Circle from './Circle';

const Wrapper = styled.div`
  width: 400px;
  padding-top: 200px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  color: #747474;
  z-index: 1;
`;

const Timer = () => {
  const interval = useRef(null);
  const [timerStart, setTimerStart] = useState(null);
  const [timerEnd, setTimerEnd] = useState(null);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const resetTimer = useCallback(() => {
    setTimerStart(null);
    setTimerEnd(null);
    setTimerRunning(false);
    setMinutes('');
    setSeconds('');
    setPercentage(0);
    clearInterval(interval.current);
  }, []);

  const updateValues = useCallback((timerStart, timerEnd) => {
    const timeLeft = timerEnd - new Date();
    const minutes = Math.floor(timeLeft / 1000 / 60);
    const seconds = Math.ceil((timeLeft - minutes * 60 * 1000) / 1000);

    if (timeLeft < 0) {
      resetTimer();
      return;
    }

    setPercentage(
      (timeLeft) / (timerEnd - timerStart)
    );
    setMinutes(String(minutes));
    setSeconds(String(seconds));
  }, [resetTimer]);

  const [percentage, setPercentage] = useState(0);

  const handleStartReset = useCallback(() => {
    if (isTimerRunning) {
      resetTimer();
      return;
    }

    const m = Number.isNaN(parseInt(minutes, 10)) ? 0 : parseInt(minutes, 10);
    const s = Number.isNaN(parseInt(seconds, 10)) ? 0 : parseInt(seconds, 10);
    const timerInSeconds = m * 60 + s;

    if (timerInSeconds === 0) {
      return;
    }

    const timerUntil = new Date(Date.now() + timerInSeconds * 1000);

    setTimerStart(new Date());
    setTimerEnd(timerUntil);
    setTimerRunning(true);
  }, [minutes, seconds, isTimerRunning, resetTimer]);

  useEffect(() => {
    if (timerEnd) {
      updateValues(timerStart, timerEnd);
      interval.current = setInterval(() => {
        updateValues(timerStart, timerEnd);
      }, 1000);
    }
    
    return () => {
      clearInterval(interval.current);
    }

  }, [timerStart, timerEnd, updateValues]);

  return (
    <Wrapper>
      <Circle percentage={percentage} />
      <TimeWrapper>
        <NumberInput value={minutes} setValue={setMinutes} />
        <span>m</span>
        <NumberInput value={seconds} setValue={setSeconds} />
        <span>s</span>
      </TimeWrapper>
      <Button onClick={handleStartReset}>
        {isTimerRunning ? 'Stop' : 'Start'}
      </Button>
    </Wrapper>
  );
}

export default Timer;