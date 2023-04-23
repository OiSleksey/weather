import * as dataDayOfWeek from './dataDayOfWeek';

// (Передаем номер чвсти дня от 0 до 3) => Получение обьекта с именем Части дня и и часом
const getPartDayNameHour = value => {
  const partDayName = ['Night', 'Morning', 'Day', 'Evening'];
  const partDayTimes = [3, 9, 15, 21];
  const selectedPartDayName = partDayName[value];
  const selectedPartDayTimes = partDayTimes[value];
  const partDataTimes = {
    partName: selectedPartDayName,
    partTime: selectedPartDayTimes,
  };
  return partDataTimes;
};
//передам дневной массив => передаем одно значение по часу
const getDataPartDay = (arrayData, requiredPart) => {
  const partDataTimes = getPartDayNameHour(requiredPart);
  const requiredValue = arrayData[partDataTimes.partTime];
  return requiredValue;
};

export const getTemperaturePartDay = (state, requiredDay, requiredPart) => {
  const ArrayTemperatureDay = dataDayOfWeek.getArrayTemperatureDay(
    state,
    requiredDay
  );
  const temperaturePart = getDataPartDay(ArrayTemperatureDay, requiredPart);
  //   console.log(temperaturePart);
  return temperaturePart;
};
export const getWeatherCodePartDay = (state, requiredDay, requiredPart) => {
  const ArrayWeatherCodeDay = dataDayOfWeek.getArrayWeatherCodeDay(
    state,
    requiredDay
  );
  const WeatherCodePart = getDataPartDay(ArrayWeatherCodeDay, requiredPart);
  return WeatherCodePart;
};
export const getPressurePartDay = (state, requiredDay, requiredPart) => {
  const ArrayPressureDay = dataDayOfWeek.getArrayPressureDay(
    state,
    requiredDay
  );
  const PressurePart = getDataPartDay(ArrayPressureDay, requiredPart);
  return PressurePart;
};
export const getWindSpeedPartDay = (state, requiredDay, requiredPart) => {
  const ArrayWindSpeedDay = dataDayOfWeek.getArrayWindSpeedDay(
    state,
    requiredDay
  );
  const WindSpeedPart = getDataPartDay(ArrayWindSpeedDay, requiredPart);
  return WindSpeedPart;
};
export const getWindDirectionPartDay = (state, requiredDay, requiredPart) => {
  const ArrayWindDirectionDay = dataDayOfWeek.getArrayWindDirectionDay(
    state,
    requiredDay
  );
  const WindDirectionPart = getDataPartDay(ArrayWindDirectionDay, requiredPart);
  return WindDirectionPart;
};
export const getWindRelativeHumidityPartDay = (
  state,
  requiredDay,
  requiredPart
) => {
  const ArrayRelativeHumidityDay = dataDayOfWeek.getArrayRelativeHumidityDay(
    state,
    requiredDay
  );
  const RelativeHumidityPart = getDataPartDay(
    ArrayRelativeHumidityDay,
    requiredPart
  );
  return RelativeHumidityPart;
};

export const getDataDayMonthNameNumberPartDay = (
  state,
  requiredDay,
  requiredPart
) => {
  const dataPart = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(
    state,
    requiredDay
  );
  return dataPart;
};

//////////////

// //получение (массив где один день, массив интервалов)=>массив нужного интервала к примеру [0,24]
// const getSelectedDayFofEWeekByIndex = (requiredDay, intervalsArray) => {
//   return intervalsArray[requiredDay];
// };
// //получение (массив где выбраный день, массив интервалов)=>массив 24 всех данных
// const getArrayBySelectedDay = (allArrayWeatherDay, requiredDay) => {
//   const [firstIndex, lastIndex] = getSelectedDayFofEWeekByIndex(
//     requiredDay,
//     weatherDataIntervalsDays
//   );
//   const arraySelectedDay = allArrayWeatherDay.slice(firstIndex, lastIndex);
//   return arraySelectedDay;
// };
// //получение (массив 168 температуры, нужнуй день) => (массив температуры 24шт)
// export const getArrayTemperatureDay = (state, requiredDay) => {
//   const allTemperature = state.weatherData.temperature.hourly.temperature_2m;
//   const arrayTemperatureRequiredDay = getArrayBySelectedDay(
//     allTemperature,
//     requiredDay
//   );
//   return arrayTemperatureRequiredDay;
// };

// const temperatureRequiredDay = dataDayOfWeek.getArrayTemperatureDay(
//   state,
//   dayRequired
// );
// const temperatureRequiredPart = temperatureRequiredDay[partDataTimes.partTime];
// return temperatureRequiredPart;
// //получение (массив 168 температуры, нужнуй день) => (массив температуры 24шт)
// export const getArrayTemperatureDayx = (state, requiredDay) => {
//   const allTemperature = state.weatherData.temperature.hourly.temperature_2m;
//   const arrayTemperatureRequiredDay = getArrayBySelectedDay(
//     allTemperature,
//     requiredDay
//   );
//   return arrayTemperatureRequiredDay;
// };
