import {
  getArrayTemperatureDay,
  getArrayWeatherCodeDay,
} from './dataDayOfWeek';

const getIndexSelectedDay = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return i;
  }
};

const getArrayHour = (state, indexSelectedDay) => {
  const temperatureArraySecectedDay = getArrayTemperatureDay(
    state,
    indexSelectedDay
  ).map(value => Math.round(value));
  const weatherCodeArraySelectedDay = getArrayWeatherCodeDay(
    state,
    indexSelectedDay
  );

  const convertedWeatherCodeArraySelectedDay = weatherCodeArraySelectedDay.map(
    value => {
      if (value === 2 || value === 3) return '2-3';
      if (value === 45 || value === 48) return '45-48';
      return value + '';
    }
  );
  const weatherDataSelectedDay = {
    temperature: temperatureArraySecectedDay,
    weatherCode: convertedWeatherCodeArraySelectedDay,
  };
  return weatherDataSelectedDay;
};
export const getTemperatureWeatherCodeHoursOfRequiredDay = state => {
  const arraySelectedWeekDay = state.weekWeather.selectedWeekday;
  const indexSelectedDay = getIndexSelectedDay(arraySelectedWeekDay);
  const weatherDataSelectedDay = getArrayHour(state, indexSelectedDay);
  return weatherDataSelectedDay;
};
