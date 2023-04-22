export const nightPartSelected = state => {
  return state.partWeather.selectedPartDay[0];
};
export const morningPartSelected = state => {
  return state.partWeather.selectedPartDay[1];
};
export const dayPartSelected = state => {
  return state.partWeather.selectedPartDay[2];
};
export const eveningPartSelected = state => {
  return state.partWeather.selectedPartDay[3];
};
