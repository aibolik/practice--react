export const getFormattedTime = dt => {
  const d = new Date(dt * 1000);
  const weekDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(d);

  return `${weekDay} ${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`;
}

export const getDate = dt => {
  let d = new Date(dt * 1000);
  return `${d.getDate()}/${d.getMonth()}`;
}

export const getTime = dt => {
  let d = new Date(dt * 1000);
  return `${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`
}

export const celsiusToFahrenheit = deg => {
  return deg * 9/5 + 32;
}

export const renderTemp = (temp, units) => {
  if (units === 'metric') {
    return Math.round(temp);
  }
  return Math.round(celsiusToFahrenheit(temp));
}

export const renderWind = (speed, units) => {
  if (units === 'metric') {
    return `${Math.round(speed)} km/h`;
  }
  return `${Math.round(speed * 0.621371)} mph`;
}