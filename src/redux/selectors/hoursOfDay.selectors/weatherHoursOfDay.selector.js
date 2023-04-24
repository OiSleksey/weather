import * as dataDetails from '../dataWeather/dataDetails';
import { getTemperatureWeatherCodeHoursOfRequiredDay } from '../dataWeather/dataHoursOfDay';

export const getWeatherDataSelector = state => {
  if (
    !state.weekWeather ||
    !state.weatherData ||
    !state.weatherData.temperature ||
    !state.weatherData.weatherCode ||
    !state.toggleTimes.stateToggle
  )
    return null;
  const weatherDataHours = getTemperatureWeatherCodeHoursOfRequiredDay(state);
  return weatherDataHours;
};
