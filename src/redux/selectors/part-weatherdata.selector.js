const weatherDataIntervalsDays = [
  [0, 24],
  [25, 48],
  [49, 72],
  [73, 96],
  [97, 120],
  [121, 144],
  [145, 168],
];

const chooseWeekday = (selectedWeekday, intervalsArray) => {
  for (let i = 0; i < selectedWeekday.length; i++) {
    if (selectedWeekday[i]) {
      return intervalsArray[i];
    }
  }
};
const chooseTemperatureForDay = (
  state,
  firstIndex,
  lastIndex,
  selectedHour
) => {
  const allTemperature = state.weatherData.temperature.hourly.temperature_2m;
  const allTemperatureSelectedDay = allTemperature.slice(firstIndex, lastIndex);
  const temperature = Math.round(allTemperatureSelectedDay[selectedHour]);
  return temperature;
};

const chooseWeatherCodeForDay = (
  state,
  firstIndex,
  lastIndex,
  selectedHour
) => {
  const allWeatherCode = state.weatherData.weatherCode.hourly.weathercode;
  const allWeatherCodeSelectedDay = allWeatherCode.slice(firstIndex, lastIndex);
  let weatherCode = allWeatherCodeSelectedDay[selectedHour];
  if (weatherCode === 2 || weatherCode === 3) weatherCode = '2-3';
  if (weatherCode === 45 || weatherCode === 48) weatherCode = '45-28';
  return weatherCode;
};

export const nightTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const [startIndex, finishIndex] = chooseWeekday(
    state.weekWeather.selectedWeekday,
    weatherDataIntervalsDays
  );
  const nightPartTemperature = chooseTemperatureForDay(
    state,
    startIndex,
    finishIndex,
    3
  );
  const nightPartWeatherCode = chooseWeatherCodeForDay(
    state,
    startIndex,
    finishIndex,
    3
  );
  const nightPartWeather = {
    weatherCode: nightPartWeatherCode,
    temperature: nightPartTemperature,
  };
  return nightPartWeather;
};

export const morningTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const [startIndex, finishIndex] = chooseWeekday(
    state.weekWeather.selectedWeekday,
    weatherDataIntervalsDays
  );
  const morningPartTemperature = chooseTemperatureForDay(
    state,
    startIndex,
    finishIndex,
    9
  );
  const morningPartWeatherCode = chooseWeatherCodeForDay(
    state,
    startIndex,
    finishIndex,
    9
  );
  const morningPartWeather = {
    weatherCode: morningPartWeatherCode,
    temperature: morningPartTemperature,
  };
  return morningPartWeather;
};

export const dayTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const [startIndex, finishIndex] = chooseWeekday(
    state.weekWeather.selectedWeekday,
    weatherDataIntervalsDays
  );
  const dayPartTemperature = chooseTemperatureForDay(
    state,
    startIndex,
    finishIndex,
    15
  );
  const dayPartWeatherCode = chooseWeatherCodeForDay(
    state,
    startIndex,
    finishIndex,
    15
  );
  const dayPartWeather = {
    weatherCode: dayPartWeatherCode,
    temperature: dayPartTemperature,
  };
  return dayPartWeather;
};

export const eveningTemperatureWeatherCodeSelector = state => {
  if (!state.weatherData || !state.weatherData.temperature) return null;
  const [startIndex, finishIndex] = chooseWeekday(
    state.weekWeather.selectedWeekday,
    weatherDataIntervalsDays
  );
  const eveningPartTemperature = chooseTemperatureForDay(
    state,
    startIndex,
    finishIndex,
    21
  );
  const eveningPartWeatherCode = chooseWeatherCodeForDay(
    state,
    startIndex,
    finishIndex,
    21
  );
  const eveningPartWeather = {
    weatherCode: eveningPartWeatherCode,
    temperature: eveningPartTemperature,
  };
  return eveningPartWeather;
};
