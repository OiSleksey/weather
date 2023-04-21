// import * as dataFetch from '../scripts/dataBaseRequsts';
// import { taskListSelector } from './tasks.selector';
import { getLocation, getPosition } from '../../api-requests/get.location';
import * as fetchWeather from '../../api-requests/get.wether';

// getWeatherCodeToday,
// getTemperature,
export const WEATHER_WEEK_FIRST_SELECTED = 'WEATHER_WEEK_FIRST_SELECTED';
export const WEATHER_WEEK_SECOND_SELECTED = 'WEATHER_WEEK_SECOND_SELECTED';
export const WEATHER_WEEK_THIRD_SELECTED = 'WEATHER_WEEK_THIRD_SELECTED';
export const WEATHER_WEEK_FOURTH_SELECTED = 'WEATHER_WEEK_FOURTH_SELECTED';
export const WEATHER_WEEK_FIFTH_SELECTED = 'WEATHER_WEEK_FIFTH_SELECTED';
export const WEATHER_WEEK_SIXTH_SELECTED = 'WEATHER_WEEK_SIXTH_SELECTED';
export const WEATHER_WEEK_SEVENTH_SELECTED = 'WEATHER_WEEK_SEVENTH_SELECTED';

export const weatherWeekFirstSelected = () => {
  return {
    type: WEATHER_WEEK_FIRST_SELECTED,
  };
};
export const weatherWeekSecondSelected = () => {
  return {
    type: WEATHER_WEEK_SECOND_SELECTED,
  };
};

export const weatherWeekThirdSelected = () => {
  return {
    type: WEATHER_WEEK_THIRD_SELECTED,
  };
};

export const weatherWeekFourthSelected = () => {
  return {
    type: WEATHER_WEEK_FOURTH_SELECTED,
  };
};

export const weatherWeekFifthSelected = () => {
  return {
    type: WEATHER_WEEK_FIFTH_SELECTED,
  };
};

export const weatherWeekSixthSelected = () => {
  return {
    type: WEATHER_WEEK_SIXTH_SELECTED,
  };
};

export const weatherWeekSeventhSelected = () => {
  return {
    type: WEATHER_WEEK_SEVENTH_SELECTED,
  };
};
