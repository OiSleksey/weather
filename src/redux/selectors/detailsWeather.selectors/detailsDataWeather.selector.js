import { getDataRequiredHourSelector } from '../hoursOfDay.selectors/weatherHoursOfDay.selector';

//Сейчас идет проверка по массиву частей дня. при появлении часов нужно будет обращаться к другому массиву
const getIndexSelectedHour = arraySelectedDay => {
  for (let i = 0; i < arraySelectedDay.length; i++) {
    if (arraySelectedDay[i]) {
      return i;
    }
  }
};

export const weatherCodeSelector = state => {
  if (!state.weatherData.weatherCode || !state.partWeather.selectedPartDay)
    return null;
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  return weatherData.weatherCode;
};

export const weatherTemperatureNowSelector = state => {
  if (!state.weatherData.temperature) return null;
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  return Math.ceil(weatherData.temperature);
};

export const weatherRelativeHumiditySelector = state => {
  if (!state.weatherData.relativeHumidity) return null;
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  return weatherData.relativeHumidity;
};

export const weatherWindSpeedSelector = state => {
  if (!state.weatherData.windSpeed) return null;
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  const windSpeed = Math.round(weatherData.windSpeed / 3.6);
  return windSpeed;
};

export const weatherWindDirectionSelector = state => {
  if (!state.weatherData.windDirection) return null;
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  const windDirection = weatherData.windDirection;
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
  const selectedHour = getIndexSelectedHour(state.partWeather.selectedPartDay);
  const weatherData = getDataRequiredHourSelector(state, selectedHour);
  const pressure = Math.round(weatherData.pressure / 1.3);
  return pressure;
};
