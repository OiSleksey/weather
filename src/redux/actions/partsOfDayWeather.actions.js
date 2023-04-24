export const WEATHER_PART_DAY_SELECTED = 'WEATHER_PART_DAY_SELECTED';

export const weatherPartSelected = selected => {
  return {
    type: WEATHER_PART_DAY_SELECTED,
    payload: {
      selected,
    },
  };
};
