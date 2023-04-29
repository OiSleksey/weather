import * as dataDayOfWeek from '../dataWeather/dataDayOfWeek';

//day, hour, part
const getIndexSelectedArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return i;
  }
};

const getHour = state => {
  const selectedDay = getIndexSelectedArray(state.weekWeather.selectedWeekday);
  const selectedHour = getIndexSelectedArray(state.hourWeather.selectedHour);
  const correctHour = selectedHour.toString().padStart(2, 0);
  const allNameHour = `${correctHour}:00`;
  return allNameHour;
};

const getPartName = state => {
  const partName = ['Night', 'Morning', 'Day', 'Evening'];
  const selectedDay = getIndexSelectedArray(state.weekWeather.selectedWeekday);
  const selectedPart = getIndexSelectedArray(state.partWeather.selectedPart);
  const selectedPartName = partName[selectedPart];
  return selectedPartName;
};

const getWeekdayName = state => {
  const selectedDay = getIndexSelectedArray(state.weekWeather.selectedWeekday);
  const selectedDayData = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(
    state,
    selectedDay
  );
  const day = selectedDayData.day;
  const month = selectedDayData.month;
  let weekdayName = selectedDayData.weekdayName;
  if (selectedDay === 0) weekdayName = 'Today';
  if (selectedDay === 1) weekdayName = 'Tomorrow';
  const dataData = {
    day,
    month,
    weekdayName,
  };
  return dataData;
};

export const dayStatusSelector = state => {
  if (
    !state.weatherData ||
    !state.weekWeather ||
    !state.weekWeather.selectedWeekday ||
    !state.hourWeather ||
    !state.hourWeather.selectedHour ||
    !state.timeDateNow ||
    !state.timeDateNow.weekday
  ) {
    return null;
  }
  const isHour = state.isUI.stateToggle;
  const weekdayDayMonth = getWeekdayName(state);
  let hourOrPart = null;
  if (!isHour) hourOrPart = getPartName(state);
  else {
    hourOrPart = getHour(state);
  }
  const dataStatus = {
    hourOrPart,
    ...weekdayDayMonth,
  };
  return dataStatus;
};
