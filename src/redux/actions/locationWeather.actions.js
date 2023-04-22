export const WEATHER_LOCATION = 'WEATHER_LOCATION';
export const WEATHER_POSITION_NAME = 'WEATHER_POSITION_NAME';
export const WEATHER_CODE = 'WEATHER_CODE';
export const WEATHER_TEMPERATURE = 'WEATHER_TEMPERATURE';
export const WEATHER_RELATIVE_HUMIDITY = 'WEATHER_RELATIVE_HUMIDITY';
export const WEATHER_PRESSURE = 'WEATHER_PRESSURE';
export const WEATHER_WIND_SPEED = 'WEATHER_WIND_SPEED';
export const WEATHER_WIND_DIRECTION = 'WEATHER_WIND_DIRECTION';

export const weatherLocation = coords => {
  return {
    type: WEATHER_LOCATION,
    payload: {
      coords,
    },
  };
};

export const weatherPositionName = namePosition => {
  return {
    type: WEATHER_POSITION_NAME,
    payload: {
      namePosition,
    },
  };
};

export const weatherCode = weatherType => {
  return {
    type: WEATHER_CODE,
    payload: {
      weatherType,
    },
  };
};

export const weatherTemperature = temperature => {
  return {
    type: WEATHER_TEMPERATURE,
    payload: {
      temperature,
    },
  };
};

export const weatherRelativeHumidity = relativeHumidity => {
  return {
    type: WEATHER_RELATIVE_HUMIDITY,
    payload: {
      relativeHumidity,
    },
  };
};

export const weatherPressure = pressure => {
  return {
    type: WEATHER_PRESSURE,
    payload: {
      pressure,
    },
  };
};

export const weatherWindSpeed = windSpeed => {
  return {
    type: WEATHER_WIND_SPEED,
    payload: {
      windSpeed,
    },
  };
};

export const weatherWindDirection = windDirection => {
  return {
    type: WEATHER_WIND_DIRECTION,
    payload: {
      windDirection,
    },
  };
};
