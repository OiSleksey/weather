'use strict';

const newsWeather = document.querySelector('.section-first__news-weather');
const temperatureWeatherNow = document.querySelector(
  '.news-weather__temperature-now'
);
const temperatureWeatherAllDay = document.querySelector(
  '.news-weather__temperature-all-day'
);

const weathercodeNow = document.querySelector('.news-weather__weathercode-now');
const nameWeatherLocation = document.querySelector(
  '.news-weather__name-lacation'
);

//Получение температуры
export const getTemperature = async function (lat, lon, dateCurrency) {
  const responseTemperature = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
  );
  const dataTemperature = await responseTemperature.json();
  console.log(dataTemperature);
  const temperatureAllDaySort = dataTemperature.hourly.temperature_2m
    .slice(0, 24)
    .sort((x, y) => x - y);
  console.log(temperatureAllDaySort);

  const temperatureNow =
    dataTemperature.hourly.temperature_2m[dateCurrency.substring(0, 2)];
  //   temperatureWeatherNow.innerHTML = `${temperatureNow}<sup>o </sup>`;

  //   temperatureWeatherAllDay.innerHTML = `${
  //     temperatureAllDaySort[0]
  //   }<sup>o </sup> , ${
  //     temperatureAllDaySort[temperatureAllDaySort.length - 1]
  //   }<sup>o </sup>`;
};

//Получение облачности
export const getWeatherCode = async function (lat, lon, dateCurrency) {
  const responseWeathercode = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=weathercode`
  );
  const dataWeathercode = await responseWeathercode.json();
  //   weathercodeNow.textContent =
  //     dataWeathercode.hourly.weathercode[dateCurrency.substring(0, 2)];
  console.log(dataWeathercode);
};

//Получение влажности
export const getRelativeHumidity = async function (lat, lon, dateCurrency) {
  const responseRelativeHumidity = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=relativehumidity_2m`
  );
  const dataRelativeHumidity = await responseRelativeHumidity.json();
  console.log(dataRelativeHumidity);
};

//Получение давления Делим полученые данные на 1.33
export const getPressure = async function (lat, lon, dateCurrency) {
  const responsePressure = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=pressure_msl`
  );
  const dataPressure = await responsePressure.json();
  console.log(dataPressure);
};

// Получение скорости ветра км/ч для м/с разделить на 3.6
export const getWindSpeed = async function (lat, lon, dateCurrency) {
  const responseWindSpeed = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=windspeed_10m`
  );
  const dataWindSpeed = await responseWindSpeed.json();
  console.log(dataWindSpeed);
};
//Получение Направление ветра в градусач 0-360Юг->Се, 90Во->Зап, 180Се->Юг, 270За->Во.
export const getWindDirection = async function (lat, lon, dateCurrency) {
  const responseWindDirection = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=winddirection_10m`
  );
  const dataWindDirection = await responseWindDirection.json();
  console.log(dataWindDirection);
};
