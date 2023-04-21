//////
//  const weatherDataIntervalsDays = ['Night', 'Morning', 'Day', 'Evening'];
const weatherDataPartDay = [3, 9, 15, 21];

export const getPartDayYouNeed = state => {
  const selectedPartDay = state.partWeather.selectedPartDay;
  let indexSelectedPartDay;
  for (let i = 0; i < 4; i++) {
    if (selectedPartDay[i]) indexSelectedPartDay = i;
  }
  return indexSelectedPartDay;
};

/// const weatherDataIntervalsDays = ['Night', 'Morning', 'Day', 'Evening'];
// const weatherDataPartDay = [3, 9, 15, 21];

// export const getPartDayYouNeed = state => {
//   const selectedPartDay = state.partWeather.selectedPartDay;
//   let indexSelectedPartDay;
//   for (let i = 0; i < 4; i++) {
//     if (selectedPartDay[i]) indexSelectedPartDay = i;
//   }
//   console.log(weatherDataPartDay[indexSelectedPartDay]);
//   return indexSelectedPartDay;
// };

// const getWeatherDataSelectedDay = (arrayWeather, firstIndex, lastIndex) => {
//   const dataWeatherSelectedDay = arrayWeather.slice(firstIndex, lastIndex);
//   return dataWeatherSelectedDay;
// };
// export const getDataWeatherHour = (state, dataState) => {
//   const daySelected = getTheDayYouNeed(state);
//   const intervalSelectedDay = weatherDataIntervalsDays[daySelected];
//   const readyDataSelectedDay = getWeatherDataSelectedDay(
//     dataState,
//     ...intervalSelectedDay
//   );
//   let hour = state.timeDateNow.hour;
//   if (daySelected !== 0) hour = 15;

//   return readyDataSelectedDay[hour];
// };
