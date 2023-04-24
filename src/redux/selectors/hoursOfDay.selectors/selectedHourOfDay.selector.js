import { getDataRequiredHourSelector } from './weatherHoursOfDay.selector';

export const hourWeatherDataSelector = (state, reguiredHour) => {
  const hourDataWeatherDate = getDataRequiredHourSelector(state, reguiredHour);
  const { temperature, weatherCode } = hourDataWeatherDate;
  const dataTemperatureWeatherCodeHour = {
    temperature,
    weatherCode,
  };
  return dataTemperatureWeatherCodeHour;
};
