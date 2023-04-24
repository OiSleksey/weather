import * as dataDetails from '../dataWeather/dataDetails';
import { getTemperatureWeatherCodeHoursOfRequiredDay } from '../dataWeather/dataHoursOfDay';
// getArrayTemperatureRequiredDay(state)

export const getWeatherDataSelector = state => {
  if (
    !state.weekWeather ||
    !state.weatherData ||
    !state.weatherData.temperature ||
    !state.toggleTimes.stateToggle
  )
    return null;
  const weatherDataHours = getTemperatureWeatherCodeHoursOfRequiredDay(state);
  return weatherDataHours;
};
