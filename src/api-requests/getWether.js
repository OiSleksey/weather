'use strict';

//Получение температуры
export const getTemperature = async function (lat, lon) {
  const responseTemperature = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
  );
  const dataTemperature = await responseTemperature.json();

  return dataTemperature;
};

//Получение облачности
export const getWeatherCode = async function (lat, lon) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode`
  );
  const dataWeathercode = await responseWeathercode.json();
  return dataWeathercode;
};

//Получение влажности
export const getRelativeHumidity = async function (lat, lon) {
  const responseRelativeHumidity = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m`
  );
  const dataRelativeHumidity = await responseRelativeHumidity.json();
  return dataRelativeHumidity;
};

//Получение давления Делим полученые данные на 1.33
export const getPressure = async function (lat, lon) {
  const responsePressure = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=pressure_msl`
  );
  const dataPressure = await responsePressure.json();
  return dataPressure;
};

// Получение скорости ветра км/ч для м/с разделить на 3.6
export const getWindSpeed = async function (lat, lon) {
  const responseWindSpeed = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_10m`
  );
  const dataWindSpeed = await responseWindSpeed.json();
  return dataWindSpeed;
};
//Получение Направление ветра в градусах
export const getWindDirection = async function (lat, lon) {
  const responseWindDirection = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=winddirection_10m`
  );
  const dataWindDirection = await responseWindDirection.json();
  return dataWindDirection;
};
