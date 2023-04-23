import * as dataDayOfWeek from '../dataWeather/dataDayOfWeek';
export const firstDayallDataFirstDay = state => {
  if (
    !state.weatherData ||
    !state.weatherData.temperature ||
    !state.weatherData.weatherCode ||
    !state.weatherData.relativeHumidity ||
    !state.weatherData.pressure ||
    !state.weatherData.windSpeed ||
    !state.weatherData.windDirection
  )
    return null;
  // console.log(dataDayOfWeek.getArrayTemperatureDay(state, 0));
  // console.log(dataDayOfWeek.getArrayWeatherCodeDay(state, 0));

  // console.log(dataDayOfWeek.getArrayPressureDay(state, 0));
  // console.log(dataDayOfWeek.getArrayWindSpeedDay(state, 0));
  // console.log(dataDayOfWeek.getArrayWindDirectionDay(state, 0));
  // console.log(dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 0));
  // console.log(dataDayOfWeek.getArrayRelativeHumsdityDay(state, 0));
};

// console.log(dataDayOfWeek.getArrayTemperatureDay(state, 0));
// console.log(dataDayOfWeek.getArrayWeatherCodeDay(state, 0));
const getSortedArray = array => {
  const sortArray = array.slice().sort((a, b) => a - b);
  return sortArray;
};

const getMinMaxTemperatureOfDay = (state, numberDay) => {
  const arrayTemperatureRequiredDay = dataDayOfWeek.getArrayTemperatureDay(
    state,
    numberDay
  );
  const sortTemperature = getSortedArray(arrayTemperatureRequiredDay);
  const minTemperature = Math.round(sortTemperature[0]);
  const maxTemperature = Math.round(
    sortTemperature[sortTemperature.length - 1]
  );
  const dataTemperature = {
    minTemperature,
    maxTemperature,
  };
  return dataTemperature;
};

const getWeatherCodeOfDay = (state, numberDay) => {
  const arrayWeatherCodeRequiredDay = dataDayOfWeek.getArrayWeatherCodeDay(
    state,
    numberDay
  );
  const sortedWeatherCode = getSortedArray(arrayWeatherCodeRequiredDay);
  const convertedSortedWeatherCode = sortedWeatherCode.map(value => {
    if (value === 2 || value === 3) return '2-3';
    if (value === 45 || value === 48) return '45-48';
    return value + '';
  });
  const weatherCode =
    convertedSortedWeatherCode[[convertedSortedWeatherCode.length - 1]];
  return weatherCode;
};

export const firstDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;

  const firstDayTemperature = getMinMaxTemperatureOfDay(state, 0);
  const firstDayWeatherCode = getWeatherCodeOfDay(state, 0);
  const firstDayData = {
    ...firstDayTemperature,
    weatherCode: firstDayWeatherCode,
  };
  return firstDayData;
};
export const secondDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const secondDayTemperature = getMinMaxTemperatureOfDay(state, 1);
  const secondDayWeatherCode = getWeatherCodeOfDay(state, 1);
  const secondDayData = {
    ...secondDayTemperature,
    weatherCode: secondDayWeatherCode,
  };
  return secondDayData;
};
export const thirdDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const thirdDayTemperature = getMinMaxTemperatureOfDay(state, 2);
  const thirdDayWeatherCode = getWeatherCodeOfDay(state, 2);
  const thirdDayData = {
    ...thirdDayTemperature,
    weatherCode: thirdDayWeatherCode,
  };
  return thirdDayData;
};
export const fourthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const fourthDayTemperature = getMinMaxTemperatureOfDay(state, 3);
  const fourthDayWeatherCode = getWeatherCodeOfDay(state, 3);
  const fourthDayData = {
    ...fourthDayTemperature,
    weatherCode: fourthDayWeatherCode,
  };
  return fourthDayData;
};
export const fifthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const fifthDayTemperature = getMinMaxTemperatureOfDay(state, 4);
  const fifthDayWeatherCode = getWeatherCodeOfDay(state, 4);
  const fifthDayData = {
    ...fifthDayTemperature,
    weatherCode: fifthDayWeatherCode,
  };
  return fifthDayData;
};
export const sixthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const sixthDayTemperature = getMinMaxTemperatureOfDay(state, 5);
  const sixthDayWeatherCode = getWeatherCodeOfDay(state, 5);
  const sixthDayData = {
    ...sixthDayTemperature,
    weatherCode: sixthDayWeatherCode,
  };
  return sixthDayData;
};
export const seventhDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const seventhDayTemperature = getMinMaxTemperatureOfDay(state, 6);
  const seventhDayWeatherCode = getWeatherCodeOfDay(state, 6);
  const seventhDayData = {
    ...seventhDayTemperature,
    weatherCode: seventhDayWeatherCode,
  };
  return seventhDayData;
};
