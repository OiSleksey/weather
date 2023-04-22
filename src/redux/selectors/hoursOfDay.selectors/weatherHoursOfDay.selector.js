import * as dataParOfDay from '../dataWeather/dataPartsOfDay';

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

export const getDataRequiredHourSelector = (state, requiredHour) => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const temperature = dataParOfDay.getTemperaturePartDay(
    state,
    selectedDay,
    requiredHour
  );
  const weatherCode = convertedWeatherCode(
    dataParOfDay.getWeatherCodePartDay(state, selectedDay, requiredHour)
  );
  const pressure = dataParOfDay.getPressurePartDay(
    state,
    selectedDay,
    requiredHour
  );
  const windSpeed = dataParOfDay.getWindSpeedPartDay(
    state,
    selectedDay,
    requiredHour
  );
  const windDirection = dataParOfDay.getWindDirectionPartDay(
    state,
    selectedDay,
    requiredHour
  );
  const relativeHumidity = dataParOfDay.getWindRelativeHumidityPartDay(
    state,
    selectedDay,
    requiredHour
  );
  const dataDate = dataParOfDay.getDataDayMonthNameNumberPartDay(
    state,
    selectedDay,
    requiredHour
  );
  const requiredHourWeatherDateData = {
    temperature,
    weatherCode,
    pressure,
    windSpeed,
    windDirection,
    relativeHumidity,
    dataDate,
  };
  return requiredHourWeatherDateData;
};
