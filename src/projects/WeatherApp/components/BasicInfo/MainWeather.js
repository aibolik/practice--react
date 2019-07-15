import React, { useContext } from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import { renderTemp } from '../../utils';

import { UnitsContext } from '../../App';

const Wrapper = styled.div`
  display: flex;
`;

const Temperature = styled.span`
  color: black;
  font-size: 64px;
  line-height: 1;
`;

const Unit = styled.a`
  ${props => props.as === 'span' && 'color: black'};
  text-decoration: none;

  &:visited {
    color: blue;
  }
`;

const MainWeather = ({ temperature, weatherData }) => {
  const { units, setUnits } = useContext(UnitsContext);

  const onUnitClick = (unit) => {
    setUnits(unit);
  };

  return (
    <Wrapper>
      <img width="64" height="64" src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} />
      <Temperature>{renderTemp(temperature, units)}</Temperature>
      <Unit href="#" as={units === 'metric' ? 'span' : 'a'} onClick={() => onUnitClick('metric')}>&#176;C</Unit>
      {' | '}
      <Unit href="#" as={units === 'imperial' ? 'span' : 'a'} onClick={() => onUnitClick('imperial')}>&#176;F</Unit>
    </Wrapper>
  )
};

MainWeather.propTypes = {
  temperature: T.number,
  weatherData: T.object,
};

export default MainWeather;