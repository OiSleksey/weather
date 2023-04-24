import * as dataDayOfWeek from './dataDayOfWeek';
// import * as dataHoursOfDay from './dataHoursOfDay';
//
export const getPartDayNameHour = indexSelectedPart => {
  const partDayName = ['Night', 'Morning', 'Day', 'Evening'];
  const partDayTimes = [3, 9, 15, 21];
  const selectedPartDayName = partDayName[indexSelectedPart];
  const selectedPartDayTimes = partDayTimes[indexSelectedPart];
  const partDataTimes = {
    partName: selectedPartDayName,
    partTime: selectedPartDayTimes,
  };
  return partDataTimes;
};

const getDataPartDay = (arrayData, requiredHour) => {
  const partDataTimes = getPartDayNameHour(requiredHour);
  const requiredValue = arrayData[partDataTimes.partTime];
  return requiredValue;
};

//
const getIndexSelectedDay = arraySelectedDay => {
  for (let i = 0; i < arraySelectedDay.length; i++) {
    if (arraySelectedDay[i]) {
      return i;
    }
  }
};
export const getTemperature = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayTemperatureDay = dataDayOfWeek.getArrayTemperatureDay(
    state,
    selectedDay
  );
  const temperature = ArrayTemperatureDay[requiredHour];
  return temperature;
};

export const getWeatherCode = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayWeatherCodeDay = dataDayOfWeek.getArrayWeatherCodeDay(
    state,
    selectedDay
  );
  const correctArray = ArrayWeatherCodeDay.map(value => {
    if (value === 2 || value === 3) return '2-3';
    if (value === 45 || value === 48) return '45-48';
    return value + '';
  });
  const weatherCode = correctArray[requiredHour];
  return weatherCode;
};

export const getPressure = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayPressureDay = dataDayOfWeek.getArrayPressureDay(
    state,
    selectedDay
  );
  const pressure = ArrayPressureDay[requiredHour];
  return pressure;
};

export const getWindSpeed = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayWindSpeedDay = dataDayOfWeek.getArrayWindSpeedDay(
    state,
    selectedDay
  );
  const windSpeed = ArrayWindSpeedDay[requiredHour];
  return windSpeed;
};

export const getWindDirection = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayWindDirectionDay = dataDayOfWeek.getArrayWindDirectionDay(
    state,
    selectedDay
  );
  const windDirection = ArrayWindDirectionDay[requiredHour];
  return windDirection;
};
export const getRelativeHumidity = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const ArrayRelativeHumidityDay = dataDayOfWeek.getArrayRelativeHumidityDay(
    state,
    selectedDay
  );
  const relativeHumidity = ArrayRelativeHumidityDay[requiredHour];
  return relativeHumidity;
};

export const getDataDayMonthNameNumberPartDay = (state, requiredHour) => {
  const selectedDay = getIndexSelectedDay(state.weekWeather.selectedWeekday);
  const dataPart = dataDayOfWeek.getDataDayMonthNameNumberOfWeek(
    state,
    selectedDay
  );
  // if (stateToggle) return ArrayRelativeHumidityDay[requiredHour];
  return dataPart;
};
