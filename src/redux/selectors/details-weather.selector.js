import { getDataWeatherHour } from './selected-weekday-hour.selector';

export const weatherCodeSelector = state => {
  if (!state.weatherData.weatherCode || !state.weekWeather.selectedWeekday)
    return null;
  const weatherCodeArray = state.weatherData.weatherCode.hourly.weathercode;
  let weatherCode = getDataWeatherHour(state, weatherCodeArray);
  if (weatherCode === 2 || weatherCode === 3) weatherCode = '2-3';
  if (weatherCode === 45 || weatherCode === 48) weatherCode = '45-48';
  if (weatherCode === 96 || weatherCode === 99) weatherCode = '96-99';
  return weatherCode + '';
};

export const weatherTemperatureNowSelector = state => {
  if (!state.weatherData.temperature) return null;
  const temperatureArray = state.weatherData.temperature.hourly.temperature_2m;
  const temperature = Math.round(getDataWeatherHour(state, temperatureArray));
  return temperature;
};

export const weatherRelativeHumaditySelector = state => {
  if (!state.weatherData.relativeHumadity) return null;
  const relativeHumadityArray =
    state.weatherData.relativeHumadity.hourly.relativehumidity_2m;
  const relativeHumadity = getDataWeatherHour(state, relativeHumadityArray);
  return relativeHumadity;
};

export const weatherWindSpeedSelector = state => {
  if (!state.weatherData.windSpeed) return null;
  const windSppedArray = state.weatherData.windSpeed.hourly.windspeed_10m;
  const windSpeed = Math.round(getDataWeatherHour(state, windSppedArray) / 3.6);
  console.log(state.weatherData.windSpeed);
  return windSpeed;
};

export const weatherWindDirectionSelector = state => {
  if (!state.weatherData.windDirection) return null;
  const windDirectionArray =
    state.weatherData.windDirection.hourly.winddirection_10m;
  const windDirection = getDataWeatherHour(state, windDirectionArray);
  const directionData = {};
  if (23 <= windDirection && windDirection <= 68) {
    directionData.number = 6;
    directionData.name = 'South-West';
  }
  if (69 <= windDirection && windDirection <= 113) {
    directionData.number = 7;
    directionData.name = 'West';
  }
  if (114 <= windDirection && windDirection <= 158) {
    directionData.number = 8;
    directionData.name = 'North-West';
  }
  if (159 <= windDirection && windDirection <= 203) {
    directionData.number = 1;
    directionData.name = 'North';
  }
  if (204 <= windDirection && windDirection <= 248) {
    directionData.number = 2;
    directionData.name = 'North-East';
  }
  if (249 <= windDirection && windDirection <= 293) {
    directionData.number = 3;
    directionData.name = 'East';
  }
  if (294 <= windDirection && windDirection <= 338) {
    directionData.number = 4;
    directionData.name = 'South-East';
  }
  if (
    (0 <= windDirection && windDirection <= 22) ||
    (339 <= windDirection && windDirection <= 360)
  ) {
    directionData.number = 5;
    directionData.name = 'South';
  }
  return directionData;
};

export const weatherPressureSelector = state => {
  if (!state.weatherData.pressure) return null;
  const pressureArray = state.weatherData.pressure.hourly.pressure_msl;
  const pressure = Math.round(getDataWeatherHour(state, pressureArray) / 1.3);
  return pressure;
};
