import { getSelectedPartDay } from '../dataWeather/dataPartsOfDay';

export const getIndexSelectedPartDay = state => {
  if (!state.timeDateNow || !state.timeDateNow.hour) return null;
  return getSelectedPartDay(state);
};
