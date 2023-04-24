import * as dataDetails from '../dataWeather/dataDetails';

//Сейчас идет проверка по массиву частей дня. при появлении часов нужно будет обращаться к другому массиву
const getIndexSelectedHour = (arraySelectedHour, stateToggle) => {
  let hour = null;
  for (let i = 0; i < arraySelectedHour.length; i++) {
    if (arraySelectedHour[i]) {
      hour = i;
    }
  }
  if (!stateToggle) {
    const partDayTimes = [3, 9, 15, 21];
    return partDayTimes[hour];
  }
  return hour;
};

const getSelectedHour = state => {
  const stateToggle = state.toggleTimes.stateToggle;
  const selectedHour = stateToggle
    ? getIndexSelectedHour(state.hourWeather.selectedHour, stateToggle)
    : getIndexSelectedHour(state.partWeather.selectedPart, stateToggle);
  return selectedHour;
};

export const weatherCodeSelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.weatherCode ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const weatherCode = dataDetails.getWeatherCode(state, selectedHour);
  return weatherCode;
};

export const weatherTemperatureSelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.temperature ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const temperature = dataDetails.getTemperature(state, selectedHour);
  return Math.ceil(temperature);
};

export const weatherRelativeHumiditySelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.relativeHumidity ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const relativeHumidity = dataDetails.getRelativeHumidity(state, selectedHour);
  return relativeHumidity;
};

export const weatherWindSpeedSelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.windSpeed ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const windSpeed = dataDetails.getWindSpeed(state, selectedHour);
  return Math.round(windSpeed / 3.6);
};

export const weatherWindDirectionSelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.windDirection ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const windDirection = dataDetails.getWindDirection(state, selectedHour);
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
  if (
    !state.weatherData ||
    !state.weatherData.pressure ||
    !state.partWeather.selectedPart ||
    !state.hourWeather.selectedHour
  )
    return null;
  const selectedHour = getSelectedHour(state);
  const pressure = dataDetails.getPressure(state, selectedHour);
  return Math.round(pressure / 1.3);
};
