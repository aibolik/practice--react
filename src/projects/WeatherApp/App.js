import React, { useState, useContext } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import useFetchWeather from './hooks/useFetchWeather'; 

import BasicInfo from './components/BasicInfo';
import ChartSwitcher from './components/ChartSwitcher';
import TemperatureChart from './components/Charts/TemperatureChart';
import HumidityChart from './components/Charts/HumidityChart';
import WindChart from './components/Charts/WindChart';

import { getDate } from './utils';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

  body {
    font-family: 'Merriweather Sans', sans-serif;
    color: #878787;
  }
`;

const Wrapper = styled.div`
  border: 1px solid #dfe1e5;
  border-radius: 8px;
  width: 500px;
  height: 500px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

export const UnitsContext = React.createContext('metric');

function App() {
  const [units, setUnits] = useState('metric');
  const [activeChart, setActiveChart] = useState('temperature');

  const [{ isLoading, forecast }] = useFetchWeather();

  if (isLoading) {
    return null;
  }

  let date = getDate(forecast.list[0].dt);
  let todaysForecast = forecast.list.filter(weather => date === getDate(weather.dt));

  const renderChart = () => {
    switch (activeChart) {
      case 'temperature':
        return <TemperatureChart forecast={todaysForecast} />
      case 'humidity':
        return <HumidityChart forecast={todaysForecast} />
      case 'wind':
        return <WindChart forecast={todaysForecast} />
      default:
        return null;
    }
  }

  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <UnitsContext.Provider value={{
          units,
          setUnits,
        }}>
          <BasicInfo weather={forecast.list[0]} />
          <ChartSwitcher chart={activeChart} setActiveChart={setActiveChart} />
          {renderChart()}
        </UnitsContext.Provider>
      </Wrapper>
    </div>
  );
}

export default App;
