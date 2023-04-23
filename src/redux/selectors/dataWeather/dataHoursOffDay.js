import {
  getArrayTemperatureDay,
  getArrayWeatherCodeDay,
} from './dataDayOfWeek';

const getIndexSelectedDay = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return i;
  }
};
export const getArrayTemperatureRequiredDay = state => {
  const arraySelectedWeekDay = state.weekWeather.selectedWeekday;
  const indexeSelectedDay = getIndexSelectedDay(arraySelectedWeekDay);
  const temperatureArraySecectedDay = getArrayTemperatureDay(
    state,
    indexeSelectedDay
  );
  const weatherCodeArraySelectedDay = getArrayWeatherCodeDay(
    state,
    indexeSelectedDay
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
