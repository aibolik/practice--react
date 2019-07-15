import React from 'react';
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { getTime } from '../../utils';

const convertForecastToChartData = forecast => {
  return forecast.map(weather => ({
    name: getTime(weather.dt),
    temp: Math.floor(weather.main.temp),
  }));
}

const Chart = ({ forecast }) => {
  const data = convertForecastToChartData(forecast);
  return (
    <AreaChart data={data} width={500} height={100}>
      <XAxis dataKey="name" interval="preserveStartEnd" />
      <Tooltip />
      <Area type="monotone" dataKey="temp" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>
  )
};



export default Chart;