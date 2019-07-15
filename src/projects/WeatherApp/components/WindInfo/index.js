import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Wind } from '../../assets/wind_unselected.svg';

import { getTime } from '../../utils';

const Wrapper = styled.div`
  width: 72px;
  text-align: center;
`;

const Direction = styled.div`
  transform: scale(0.7) rotate(${props => props.deg}deg);
`;

const Speed = styled.p`
  font-size: 14px;
  color: black;
`;

const Time = styled.p`
  font-size: 12px;
`;

const WindInfo = ({ speed, dt, deg }) => {
  return (
    <Wrapper>
      <Speed>{Math.round(speed)} km/h</Speed>
      <Direction deg={deg}>
        <Wind />
      </Direction>
      <Time>{getTime(dt)}</Time>
    </Wrapper>
  )
}

export default WindInfo;