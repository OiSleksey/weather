const weatherDataIntervalsDays = [
  [0, 24],
  [24, 48],
  [48, 72],
  [72, 96],
  [96, 120],
  [120, 144],
  [144, 168],
];

//получение (массив где один день, массив интервалов)=>массив нужного интервала к примеру [0,24]
const getSelectedDayFofEWeekByIndex = (requiredDay, intervalsArray) => {
  return intervalsArray[requiredDay];
};
//получение (массив где выбраный день, массив интервалов)=>массив 24 всех данных
const getArrayBySelectedDay = (allArrayWeatherDay, requiredDay) => {
  const [firstIndex, lastIndex] = getSelectedDayFofEWeekByIndex(
    requiredDay,
    weatherDataIntervalsDays
  );
  const arraySelectedDay = allArrayWeatherDay.slice(firstIndex, lastIndex);
  return arraySelectedDay;
};

//получение (массив 168 температуры, нужнуй день) => (массив температуры 24шт)
export const getArrayTemperatureDay = (state, requiredDay) => {
  const allTemperature = state.weatherData.temperature.hourly.temperature_2m;
  const arrayTemperatureRequiredDay = getArrayBySelectedDay(
    allTemperature,
    requiredDay
  );
  return arrayTemperatureRequiredDay;
};
export const getArrayWeatherCodeDay = (state, requiredDay) => {
  const allWeatherCode = state.weatherData.weatherCode.hourly.weathercode;
  const arrayWeatherCodeRequiredDay = getArrayBySelectedDay(
    allWeatherCode,
    requiredDay
  );

  return arrayWeatherCodeRequiredDay;
};
export const getArrayRelativeHumidityDay = (state, requiredDay) => {
  const allRelativeHumidity =
    state.weatherData.relativeHumidity.hourly.relativehumidity_2m;
  const arrayRelativeHumidityRequiredDay = getArrayBySelectedDay(
    allRelativeHumidity,
    requiredDay
  );
  return arrayRelativeHumidityRequiredDay;
};
export const getArrayPressureDay = (state, requiredDay) => {
  const allPressure = state.weatherData.pressure.hourly.pressure_msl;
  const arrayPressureRequiredDay = getArrayBySelectedDay(
    allPressure,
    requiredDay
  );
  return arrayPressureRequiredDay;
};
export const getArrayWindSpeedDay = (state, requiredDay) => {
  const allWindSpeed = state.weatherData.windSpeed.hourly.windspeed_10m;
  const arrayWindSpeedRequiredDay = getArrayBySelectedDay(
    allWindSpeed,
    requiredDay
  );
  return arrayWindSpeedRequiredDay;
};
export const getArrayWindDirectionDay = (state, requiredDay) => {
  const allWindDirection =
    state.weatherData.windDirection.hourly.winddirection_10m;
  const arrayWindDirectionRequiredDay = getArrayBySelectedDay(
    allWindDirection,
    requiredDay
  );
  return arrayWindDirectionRequiredDay;
};
// ////
//Пполуяение(индекс недели(индекс недели мы отправляем инкремент+1 по этому используем логику прокручивания по второму кругу если к примеру выпадет 9)) => Имени дня недели

const getNameOfWeekDay = numberDay => {
  const weekdayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const requiredNameWeekday = weekdayName[numberDay];
  return requiredNameWeekday;
};

export const getDataDayMonthNameNumberOfWeek = (state, requiredDay) => {
  const requiredDate = state.timeDateNow.sevenDaysDate[requiredDay]
    .toString()
    .padStart(2, 0);
  const requiredMonth = state.timeDateNow.sevenDaysMonth[requiredDay]
    .toString()
    .padStart(2, 0);
  const requiredWeekdayNumber = state.timeDateNow.sevenDaysWeekday[requiredDay];
  const requiredWeekdayName = getNameOfWeekDay(requiredWeekdayNumber);
  const dataDate = {
    weekdayName: requiredWeekdayName,
    weekDayNumber: requiredWeekdayNumber,
    day: requiredDate,
    month: requiredMonth,
  };
  return dataDate;
};
