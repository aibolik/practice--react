import { useReducer, useEffect } from 'react';

const OWM_HOURLY_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=Berlin&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`;

const weatherFetchReducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        forecast: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      throw new Error('Not suppored action');
  }
};

export default function useFetchWeather() {
  const [state, dispatch] = useReducer(weatherFetchReducer, {
    forecast: {},
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchWeather = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(OWM_HOURLY_FORECAST);
        const payload = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload });
      } catch(error) {
        dispatch({ type: 'FETCH_ERROR', error })
      }
    }

    fetchWeather();
  }, []);

  return [state];
}