import * as dataHoursOfDay from './dataHoursOfDay';

const getPartDayNameSelected = (partDay, hour) => {
  for (const prop in partDay) {
    for (let i = 0; i < partDay[prop].length; i++) {
      if (partDay[prop][i] == hour) {
        return prop;
      }
    }
  }
};
const getIndexPartDay = namePart => {
  const partDayName = ['night', 'morning', 'day', 'evening'];
  const indexPart = partDayName.indexOf(namePart);
  return indexPart;
};

export const getSelectedPartDay = state => {
  const partDayByHour = {
    night: [0, 1, 2, 3, 4, 5],
    morning: [6, 7, 8, 9, 10, 11],
    day: [12, 13, 14, 15, 16, 17],
    evening: [18, 19, 20, 21, 22, 23],
  };
  const hourNow = state.timeDateNow.hour;
  const partNowName = getPartDayNameSelected(partDayByHour, hourNow);
  const indexSelectedPartDay = getIndexPartDay(partNowName);
  return indexSelectedPartDay;
};

export const getArrayTemperatureWeatherCodePartsOfRequiredDay = state => {
  const weatherDataRequiredDay =
    dataHoursOfDay.getTemperatureWeatherCodeHoursOfRequiredDay(state);
  const arrayPartsOfDay = [3, 9, 15, 21];
  const arrTemperature = weatherDataRequiredDay.temperature;
  const arrWeatherCode = weatherDataRequiredDay.weatherCode;
  const arrayTemperatureParts = arrayPartsOfDay.map(
    index => arrTemperature[index]
  );
  const arrayWeatherCodeParts = (weatherDataRequiredDay.weatherCode =
    arrayPartsOfDay.map(index => arrWeatherCode[index]));
  const weatherDataPartsOfSelectedDay = {
    temperature: arrayTemperatureParts,
    weatherCode: arrayWeatherCodeParts,
  };
  return weatherDataPartsOfSelectedDay;
};
