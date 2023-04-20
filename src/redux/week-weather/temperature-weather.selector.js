const chooseTemperatureForDay = (state, first, last) => {
  const allTemperature = state.weatherData.temperature.hourly.temperature_2m;
  const allTemperatureSelectedDay = allTemperature.slice(first, last);
  const sortTemperature = allTemperatureSelectedDay
    .slice()
    .sort((a, b) => a - b);
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

const chooseWeatherCodeForDay = (state, first, last) => {
  const allWeatherCode = state.weatherData.weatherCode.hourly.weathercode;
  // console.log(allWeatherCode);
  const allWeatherCodeSelectedDay = allWeatherCode.slice(first, last);
  const sortrdWeatherCode = allWeatherCodeSelectedDay
    .slice()
    .sort((a, b) => a - b);

  let weatherCode = sortrdWeatherCode[[allWeatherCodeSelectedDay.length - 1]];
  if (weatherCode === 2 || weatherCode === 3) weatherCode = '2-3';
  if (weatherCode === 45 || weatherCode === 48) weatherCode = '45-48';
  return weatherCode;
};

export const firstDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const firstDayTemperature = chooseTemperatureForDay(state, 0, 24);
  const firstDayWeatherCode = chooseWeatherCodeForDay(state, 0, 24);
  const firstDayData = {
    ...firstDayTemperature,
    weatherCode: firstDayWeatherCode,
  };
  return firstDayData;
};
export const secondDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const secondDayTemperature = chooseTemperatureForDay(state, 25, 48);
  const secondDayWeatherCode = chooseWeatherCodeForDay(state, 25, 48);
  const secondDayData = {
    ...secondDayTemperature,
    weatherCode: secondDayWeatherCode,
  };
  return secondDayData;
};
export const thirdDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const thirdDayTemperature = chooseTemperatureForDay(state, 49, 72);
  const thirdDayWeatherCode = chooseWeatherCodeForDay(state, 49, 72);
  const thirdDayData = {
    ...thirdDayTemperature,
    weatherCode: thirdDayWeatherCode,
  };
  return thirdDayData;
};
export const fourthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const fourthDayTemperature = chooseTemperatureForDay(state, 73, 96);
  const fourthDayWeatherCode = chooseWeatherCodeForDay(state, 73, 96);
  const fourthDayData = {
    ...fourthDayTemperature,
    weatherCode: fourthDayWeatherCode,
  };
  return fourthDayData;
};
export const fifthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const fifthDayTemperature = chooseTemperatureForDay(state, 97, 120);
  const fifthDayWeatherCode = chooseWeatherCodeForDay(state, 97, 120);
  const fifthDayData = {
    ...fifthDayTemperature,
    weatherCode: fifthDayWeatherCode,
  };
  return fifthDayData;
};
export const sixthDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const sixthDayTemperature = chooseTemperatureForDay(state, 121, 144);
  const sixthDayWeatherCode = chooseWeatherCodeForDay(state, 121, 144);
  const sixthDayData = {
    ...sixthDayTemperature,
    weatherCode: sixthDayWeatherCode,
  };
  return sixthDayData;
};
export const seventhDayDataWeatherSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const seventhDayTemperature = chooseTemperatureForDay(state, 145, 168);
  const seventhDayWeatherCode = chooseWeatherCodeForDay(state, 145, 168);
  const seventhDayData = {
    ...seventhDayTemperature,
    weatherCode: seventhDayWeatherCode,
  };
  return seventhDayData;
};
