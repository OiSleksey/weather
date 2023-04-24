export const firstDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[0];
};

export const secondDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[1];
};

export const thirdDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[2];
};

export const fourthDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[3];
};

export const fifthDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[4];
};

export const sixthDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[5];
};

export const seventhDaySelectedSelector = state => {
  if (!state.weekWeather || !state.weekWeather.selectedWeekday) return null;
  return state.weekWeather.selectedWeekday[6];
};
