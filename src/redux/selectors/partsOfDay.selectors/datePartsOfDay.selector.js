import * as dataPartsOfDay from '../dataWeather/dataPartsOfDay';

const getIndexSelectedArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return i;
  }
};

export const pastePartsSelector = state => {
  if (
    !state.weatherData ||
    !state.weekWeather ||
    !state.weekWeather.selectedWeekday ||
    !state.partWeather ||
    !state.partWeather.selectedPart ||
    !state.timeDateNow ||
    !state.timeDateNow.weekday
  )
    return null;
  // const hourNow = state.timeDateNow.hour;
  const partNow = dataPartsOfDay.getSelectedPartDay(state);
  const selectedDay = getIndexSelectedArray(state.weekWeather.selectedWeekday);

  const isFirstDay = selectedDay === 0;
  console.log(isFirstDay);
  const part = {
    isFirstDay,
    partNow: partNow,
  };
  return part;
};
