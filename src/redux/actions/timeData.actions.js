import { getDateCurrency } from '../../api-requests/getTime';

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
