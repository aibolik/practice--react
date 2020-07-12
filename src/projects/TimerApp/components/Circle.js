import React from 'react';
import styled from 'styled-components';

const Base = styled.svg`
  position: absolute;
  width: 100%;
  top: 90px;
  transform: rotate(-90deg);
`;

const Container = styled.g`
  fill: none;
  stroke: none;
`;

const FullCircle = styled.circle`
  stroke: #184e80;
  stroke-width: 6px;
`;

const Elapsed = styled.circle`
  stroke-width: 6px;
  stroke-linecap: round;
  transition: stroke-dasharray 1s;

  stroke: ${props => props.percentage > 0 ? `#FFF` : 'none'};
  stroke-dasharray: ${props => props.strokeDasharray};
`;

const Circle = ({ percentage = 0 }) => {

  const perimeter = 2 * Math.PI * 45;
  const elapsedLength = percentage * perimeter;

  return (
    <Base viewBox="0 0 100 100">
      <Container>
        <FullCircle cx="50" cy="50" r="45" />
        <Elapsed cx="50" cy="50" r="45" percentage={percentage} strokeDasharray={`${elapsedLength} ${perimeter}`} />
      </Container>
    </Base>
  );
}

export default Circle;