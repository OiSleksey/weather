// import { getLocation, getPosition } from '../../api-requests/get.location';
// import * as fetchWeather from '../../api-requests/get.wether';

export const WEATHER_PART_DAY_NIGHT_SELECTED =
  'WEATHER_PART_DAY_NIGHT_SELECTED';
export const WEATHER_PART_DAY_MORNING_SELECTED =
  'WEATHER_PART_DAY_MORNING_SELECTED';
export const WEATHER_PART_DAY_DAY_SELECTED = 'WEATHER_PART_DAY_DAY_SELECTED';
export const WEATHER_PART_DAY_EVENING_SELECTED =
  'WEATHER_PART_DAY_EVENING_SELECTED';

export const weatherPartNightSelected = () => {
  return {
    type: WEATHER_PART_DAY_NIGHT_SELECTED,
  };
};
export const weatherPartMorningSelected = () => {
  return {
    type: WEATHER_PART_DAY_MORNING_SELECTED,
  };
};

export const weatherPartDaySelected = () => {
  return {
    type: WEATHER_PART_DAY_DAY_SELECTED,
  };
};

export const weatherPartEveningSelected = () => {
  return {
    type: WEATHER_PART_DAY_EVENING_SELECTED,
  };
};

export const allActionsPartArray = [
  weatherPartNightSelected,
  weatherPartMorningSelected,
  weatherPartDaySelected,
  weatherPartEveningSelected,
];

const partDayByHour = {
  night: [0, 1, 2, 3, 4, 5],
  morning: [6, 7, 8, 9, 10, 11],
  day: [12, 13, 14, 15, 16, 17],
  evening: [18, 19, 20, 21, 22, 23],
};
const partDayName = ['night', 'morning', 'day', 'evening'];

const getPartDay = (partDay, hour) => {
  for (const prop in partDay) {
    for (let i = 0; i < partDay[prop].length; i++) {
      if (partDay[prop][i] == hour) {
        return prop;
      }
    }
  }
};

const getIndexPartDay = namePart => {
  const indexPart = partDayName.indexOf(namePart);
  return indexPart;
};

export const getStartPartDay = () => {
  return function (dispatch, getState) {
    console.log(getState());
    const hourNow = getState().timeDateNow.hour;
    console.log(hourNow);
    const partNowName = getPartDay(partDayByHour, hourNow);
    const partNowIndex = getIndexPartDay(partNowName);
    // console.log(allActionsPartArray[partNowIndex]);
    dispatch(allActionsPartArray[partNowIndex]());
    // dispatch(weatherPartDaySelected());
  };
};

//////
//  const weatherDataIntervalsDays = ['Night', 'Morning', 'Day', 'Evening'];
const weatherDataPartDay = [3, 9, 15, 21];

export const getPartDayYouNeed = state => {
  const selectedPartDay = state.partWeather.selectedPartDay;
  let indexSelectedPartDay;
  for (let i = 0; i < 4; i++) {
    if (selectedPartDay[i]) indexSelectedPartDay = i;
  }
  return indexSelectedPartDay;
};
