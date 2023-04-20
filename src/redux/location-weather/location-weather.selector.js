export const locationSelector = state => {
  if (!state.location) return null;
  return state.location;
};

export const namePositionSelector = state => {
  if (
    !state.location ||
    !state.location.namePosition ||
    !state.location.namePosition.address
  )
    return null;
  const positionResponse = state.location.namePosition.address;
  let namePosition;
  if (positionResponse.town) namePosition = positionResponse.town;
  if (positionResponse.city) namePosition = positionResponse.city;
  if (positionResponse.village) namePosition = positionResponse.village;
  return namePosition;
};

export const weatherCodeSelector = state => {
  if (!state.weatherData.weatherCode) return null;
  const hour = state.timeDateNow.hour;
  let weatherCode = state.weatherData.weatherCode.hourly.weathercode[hour];
  if (weatherCode === 2 || weatherCode === 3) weatherCode = '2-3';
  if (weatherCode === 45 || weatherCode === 48) weatherCode = '45-48';
  return weatherCode;
};

export const weatherTemperatureNowSelector = state => {
  if (!state.weatherData.temperature) return null;
  const hour = state.timeDateNow.hour;
  const temperature = Math.round(
    state.weatherData.temperature.hourly.temperature_2m[hour]
  );
  return temperature;
};

export const weatherRelativeHumaditySelector = state => {
  if (!state.weatherData.relativeHumadity) return null;
  const hour = state.timeDateNow.hour;
  const relativeHumadity =
    state.weatherData.relativeHumadity.hourly.relativehumidity_2m[hour];
  return relativeHumadity;
};

export const weatherWindSpeedSelector = state => {
  if (!state.weatherData.windSpeed) return null;
  const hour = state.timeDateNow.hour;
  const windSpeed = state.weatherData.windSpeed.hourly.windspeed_10m[hour];
  return windSpeed;
};

export const weatherWindDirectionSelector = state => {
  if (!state.weatherData.windDirection) return null;
  const hour = state.timeDateNow.hour;
  const windDirection =
    state.weatherData.windDirection.hourly.winddirection_10m[hour];
  const directionData = {};
  if (23 <= windDirection && windDirection <= 68) {
    directionData.number = 6;
    directionData.name = 'South-West';
  }
  if (69 <= windDirection && windDirection <= 113) {
    directionData.number = 7;
    directionData.name = 'West';
  }
  if (114 <= windDirection && windDirection <= 158) {
    directionData.number = 8;
    directionData.name = 'North-West';
  }
  if (159 <= windDirection && windDirection <= 203) {
    directionData.number = 1;
    directionData.name = 'North';
  }
  if (204 <= windDirection && windDirection <= 248) {
    directionData.number = 2;
    directionData.name = 'North-East';
  }
  if (249 <= windDirection && windDirection <= 293) {
    directionData.number = 3;
    directionData.name = 'East';
  }
  if (294 <= windDirection && windDirection <= 338) {
    directionData.number = 4;
    directionData.name = 'South-East';
  }
  if (
    (0 <= windDirection && windDirection <= 22) ||
    (339 <= windDirection && windDirection <= 360)
  ) {
    directionData.number = 5;
    directionData.name = 'South';
  }
  return directionData;
};

export const weatherPressureSelector = state => {
  if (!state.weatherData.pressure) return null;
  const hour = state.timeDateNow.hour;
  const pressure = Math.round(
    state.weatherData.pressure.hourly.pressure_msl[hour] / 1.3
  );
  return pressure;
};

// export const taskListSelector = state => {
//   return state.tasks.tasksList;
// };

// export const sortingTasksSelector = state => {
//   const taskList = state.length === 0 ? [] : state;
//   const sortingTasks = taskList.slice().sort((a, b) => a.done - b.done);
//   return sortingTasks;
// };
