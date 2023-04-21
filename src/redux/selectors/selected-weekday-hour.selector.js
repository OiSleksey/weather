const weatherDataIntervalsDays = [
  [0, 24],
  [25, 48],
  [49, 72],
  [73, 96],
  [97, 120],
  [121, 144],
  [145, 168],
];

const getTheDayYouNeed = state => {
  const selectedWeekday = state.weekWeather.selectedWeekday;
  let indexSelectedDay;
  for (let i = 0; i < 7; i++) {
    if (selectedWeekday[i]) indexSelectedDay = i;
  }
  return indexSelectedDay;
};

const getWeatherDataSelectedDay = (arrayWeather, firstIndex, lastIndex) => {
  const dataWeatherSelectedDay = arrayWeather.slice(firstIndex, lastIndex);
  return dataWeatherSelectedDay;
};

const weatherDataPartDay = [3, 9, 15, 21];

const getPartDayYouNeed = state => {
  const selectedPartDay = state.partWeather.selectedPartDay;
  let indexSelectedPartDay;
  for (let i = 0; i < 4; i++) {
    if (selectedPartDay[i]) indexSelectedPartDay = i;
  }
  console.log(weatherDataPartDay[indexSelectedPartDay]);
  // return indexSelectedPartDay;
  return weatherDataPartDay[indexSelectedPartDay];
};
export const getDataWeatherHour = (state, dataState) => {
  const daySelected = getTheDayYouNeed(state);
  const intervalSelectedDay = weatherDataIntervalsDays[daySelected];
  const readyDataSelectedDay = getWeatherDataSelectedDay(
    dataState,
    ...intervalSelectedDay
  );
  // let hour = state.timeDateNow.hour;
  // if (daySelected !== 0) hour = 15;
  let hour = getPartDayYouNeed(state);
  return readyDataSelectedDay[hour];
};
