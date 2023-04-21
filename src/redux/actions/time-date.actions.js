import { getDateCurrency } from '../../api-requests/get.time';

// import * as partActions from '../part-weather/part-weather.actions';
export const TIME_DATE_NOW = 'TIME_DATE_NOW';

export const timeDateNow = data => {
  return {
    type: TIME_DATE_NOW,
    payload: {
      data,
    },
  };
};

export const getTimeDateNow = () => {
  return function (dispatch) {
    dispatch(timeDateNow(getDateCurrency()));
  };
};
