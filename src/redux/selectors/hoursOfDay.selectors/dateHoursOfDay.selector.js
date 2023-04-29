const getIndexSelectedArray = array => {
  for (let i = 0; i < array.length; i++) {
    if (array[i]) return i;
  }
};

export const pasteTimesSelector = state => {
  if (
    !state.weatherData ||
    !state.weekWeather ||
    !state.weekWeather.selectedWeekday ||
    !state.hourWeather ||
    !state.hourWeather.selectedHour ||
    !state.timeDateNow ||
    !state.timeDateNow.weekday
  )
    return null;
  const hourNow = state.timeDateNow.hour;
  const selectedDay = getIndexSelectedArray(state.weekWeather.selectedWeekday);
  const isFirstDay = selectedDay === 0;
  const hour = {
    isFirstDay,
    hourNow,
  };
  return hour;
};
