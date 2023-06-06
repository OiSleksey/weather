//Error Handling
const errorHandling = value => {
  const dataError = {
    error: {
      message: `${value}. Sorry, we're working on it.`,
    },
  };
  return dataError;
};
//Получение температуры
export const getTemperature = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};

//Получение облачности
export const getWeatherCode = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};

//Получение влажности
export const getRelativeHumidity = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};

//Получение давления Делим полученые данные на 1.33
export const getPressure = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=pressure_msl`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};

// Получение скорости ветра км/ч для м/с разделить на 3.6
export const getWindSpeed = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_10m`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};
//Получение Направление ветра в градусах
export const getWindDirection = async function (lat, lon) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=winddirection_10m`
    );
    if (!response.ok) {
      return errorHandling(`Error ${response.status}`);
    }
    const resolve = await response.json();
    return resolve;
  } catch (e) {
    return errorHandling(e.message);
  }
};
