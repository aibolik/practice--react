import React from 'react';
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { getTime } from '../../utils';

const convertForecastToChartData = forecast => {
  return forecast.map(weather => ({
    name: getTime(weather.dt),
    humidity: Math.floor(weather.main.humidity),
  }));
}

const Chart = ({ forecast }) => {
  const data = convertForecastToChartData(forecast);
  return (
    <BarChart data={data} width={500} height={100} >
      <XAxis dataKey="name" interval="preserveStartEnd" />
      <Tooltip />
      <Bar dataKey="humidity" fill="#8884d8" />
    </BarChart>
  )
};



export default Chart;