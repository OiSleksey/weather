const getPartDay = value => {
  const partDayName = ['Night', 'Morning', 'Day', 'Evening'];
  const partDayTimes = [3, 9, 15, 21];
  const selectedPartDayName = partDayName[value];
  const selectedPartDayTimes = partDayTimes[value];
  const partDataTimes = {
    partName: selectedPartDayName,
    partTimes: selectedPartDayTimes,
  };
  return partDataTimes;
};

export const nightPartDaySelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const firstPart = getPartDay(0);
  return firstPart;
};

export const morningPartDaySelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const secondPart = getPartDay(1);
  return secondPart;
};
export const dayPartDaySelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const thirdPart = getPartDay(2);
  return thirdPart;
};
export const eveningPartDaySelector = state => {
  if (!state.timeDateNow || !state.timeDateNow.weekday) return null;
  const fourthPart = getPartDay(3);
  return fourthPart;
};
