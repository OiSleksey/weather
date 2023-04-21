const weekDayToday = value => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let index = value;
  if (value >= weekday.length) {
    index = value % weekday.length;
  }
  const selectedElement = weekday[index];
  return selectedElement;
};

const chooseDayDate = (state, numberDay) => {
  const firstDate = state.timeDateNow.nextSevenDays[numberDay]
    .toString()
    .padStart(2, 0);
  const firstMonth = state.timeDateNow.nextSevenDaysMonth[numberDay]
    .toString()
    .padStart(2, 0);
  const firstWeekday = weekDayToday(state.timeDateNow.weekday + numberDay);
  const dataDate = {
    weekday: firstWeekday,
    day: firstDate,
    month: firstMonth,
  };
  return dataDate;
};

export const firstDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const firstDay = chooseDayDate(state, 0);
  return firstDay;
};
export const secondDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const secondDay = chooseDayDate(state, 1);
  return secondDay;
};

export const thirdDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const thirdDay = chooseDayDate(state, 2);
  return thirdDay;
};
export const fourthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const fourthDay = chooseDayDate(state, 3);
  return fourthDay;
};
export const fifthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const fifthDay = chooseDayDate(state, 4);
  return fifthDay;
};
export const sixthDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const sixthDay = chooseDayDate(state, 5);
  return sixthDay;
};
export const seventhDayDateSelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const seventhDay = chooseDayDate(state, 6);
  return seventhDay;
};
