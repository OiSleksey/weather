import { getArrayTemperatureRequiredDay } from '../dataWeather/dataHoursOffDay';
// getArrayTemperatureRequiredDay(state)

export const getWeatherDataSelector = state => {
  if (!state.weatherData || !state.weekWeather) return null;
  const weatherDataHours = getArrayTemperatureRequiredDay(state);
  return weatherDataHours;
};
