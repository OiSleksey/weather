import { allActionsPartArray } from '../actions/partsDayWeather.actions';

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

export const getStartPartsDay = () => {
  return function (dispatch, getState) {
    const hourNow = getState().timeDateNow.hour;
    const partNowName = getPartDay(partDayByHour, hourNow);
    const partNowIndex = getIndexPartDay(partNowName);
    dispatch(allActionsPartArray[partNowIndex]());
  };
};
