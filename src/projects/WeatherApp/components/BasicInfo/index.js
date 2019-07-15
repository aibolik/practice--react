import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';

import MainWeather from './MainWeather';
import AdditionalData from './AdditionalData';

import { getFormattedTime } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BasicInfo = ({ weather }) => {
  const { dt, main: { temp, humidity }, weather: [ weatherData ], wind = {}, rain = {} } = weather;

  return (
    <Wrapper>
      <div>
        <h1>Berlin</h1>
        <div>{getFormattedTime(dt)}</div>
        <div>{weatherData.main}</div>
        <MainWeather temperature={temp} weatherData={weatherData} />
      </div>
      <AdditionalData humidity={humidity} wind={wind.speed} rain={rain['3h']} />
    </Wrapper>
  );
};

BasicInfo.propTypes = {
  weather: T.object,
};

export default BasicInfo;