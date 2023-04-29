// import * as dataParOfDay from '../dataWeather/dataPartsOfDay';
import { getArrayTemperatureWeatherCodePartsOfRequiredDay } from '../dataWeather/dataPartsOfDay';

export const getWeatherDataSelector = state => {
  if (
    !state.weekWeather ||
    !state.weatherData ||
    !state.weatherData.temperature ||
    !state.weatherData.weatherCode ||
    state.isUI.stateToggle
  )
    return null;
  const weatherDataHours =
    getArrayTemperatureWeatherCodePartsOfRequiredDay(state);
  return weatherDataHours;
};
