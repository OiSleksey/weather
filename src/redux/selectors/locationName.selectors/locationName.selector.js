export const namePositionSelector = state => {
  if (
    !state.weatherData ||
    !state.weatherData.namePosition ||
    !state.weatherData.namePosition.address
  )
    return null;
  const positionResponse = state.weatherData.namePosition.address;
  let namePosition;
  if (positionResponse.town) namePosition = positionResponse.town;
  if (positionResponse.city) namePosition = positionResponse.city;
  if (positionResponse.village) namePosition = positionResponse.village;
  return namePosition;
};
