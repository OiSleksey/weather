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
