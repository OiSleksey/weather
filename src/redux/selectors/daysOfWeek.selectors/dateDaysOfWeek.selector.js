import * as dataDayOfWeek from '../dataWeather/dataDayOfWeek';

export const firstDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const firstDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 0);
  return firstDay;
};
export const secondDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const secondDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 1);
  return secondDay;
};

export const thirdDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const thirdDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 2);
  return thirdDay;
};
export const fourthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const fourthDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 3);
  return fourthDay;
};
export const fifthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const fifthDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 4);
  return fifthDay;
};
export const sixthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const sixthDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 5);
  return sixthDay;
};
export const seventhDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const seventhDay = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(state, 6);
  return seventhDay;
};
