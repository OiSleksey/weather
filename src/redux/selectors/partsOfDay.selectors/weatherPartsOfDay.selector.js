import * as dataParOfDay from '../dataWeather/dataPartsOfDay';

// export const firstDayallDataFirstDay = state => {
//   if (
//     !state.weatherData ||
//     !state.weatherData.temperature ||
//     !state.weatherData.weatherCode ||
//     !state.weatherData.relativeHumidity ||
//     !state.weatherData.pressure ||
//     !state.weatherData.windSpeed ||
//     !state.weatherData.windDirection
//   )
//     return null;
//   console.log('start');
//   console.log(dataParOfDay.getTemperaturePartDay(state, 6, 3));
//   console.log(dataParOfDay.getWeatherCodePartDay(state, 0, 3));
//   console.log(dataParOfDay.getPressurePartDay(state, 6, 3));
//   console.log(dataParOfDay.getWindSpeedPartDay(state, 6, 3));
//   console.log(dataParOfDay.getWindDirectionPartDay(state, 6, 3));
//   console.log(dataParOfDay.getWindRelativeHumidityPartDay(state, 6, 3));
//   console.log(dataParOfDay.getDataDayMonthNameNumberPartDay(state, 6, 3));
// };

const getIndexSelectedDay = arraySelectedDay => {
  for (let i = 0; i < arraySelectedDay.length; i++) {
    if (arraySelectedDay[i]) {
      return i;
    }
  }
};

const convertedWeatherCode = numberWeatherCode => {
  let stringWeatherCode = numberWeatherCode;
  if (numberWeatherCode === 2 || numberWeatherCode === 3)
    stringWeatherCode = '2-3';
  if (numberWeatherCode === 45 || numberWeatherCode === 48)
    stringWeatherCode = '45-48';
  return stringWeatherCode + '';
};

export const nightTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const nightPartTemperature = dataParOfDay.getTemperaturePartDay(
    state,
    selectedDay,
    0
  );
  const nightPartWeatherCode = convertedWeatherCode(
    dataParOfDay.getWeatherCodePartDay(state, selectedDay, 0)
  );
  const nightPartWeather = {
    weatherCode: nightPartWeatherCode,
    temperature: nightPartTemperature,
  };
  return nightPartWeather;
};

export const morningTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const morningPartTemperature = dataParOfDay.getTemperaturePartDay(
    state,
    selectedDay,
    1
  );
  const morningPartWeatherCode = convertedWeatherCode(
    dataParOfDay.getWeatherCodePartDay(state, selectedDay, 1)
  );
  const morningPartWeather = {
    weatherCode: morningPartWeatherCode,
    temperature: morningPartTemperature,
  };
  return morningPartWeather;
};

export const dayTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const dayPartTemperature = dataParOfDay.getTemperaturePartDay(
    state,
    selectedDay,
    2
  );
  const dayPartWeatherCode = convertedWeatherCode(
    dataParOfDay.getWeatherCodePartDay(state, selectedDay, 2)
  );
  const dayPartWeather = {
    weatherCode: dayPartWeatherCode,
    temperature: dayPartTemperature,
  };
  return dayPartWeather;
};
export const eveningTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const eveningPartTemperature = dataParOfDay.getTemperaturePartDay(
    state,
    selectedDay,
    3
  );
  const eveningPartWeatherCode = convertedWeatherCode(
    dataParOfDay.getWeatherCodePartDay(state, selectedDay, 3)
  );
  const eveningPartWeather = {
    weatherCode: eveningPartWeatherCode,
    temperature: eveningPartTemperature,
  };
  return eveningPartWeather;
};
