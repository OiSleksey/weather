export const TOGGLE_TIMES_OF_DAY = 'TOGGLE_TIMES_OF_DAY';
export const LOAD_PAGE = 'LOAD_PAGE';
export const TOGGLE_WEEK = 'TOGGLE_WEEK';

export const toggleTimesOfDay = () => {
  return {
    type: 'TOGGLE_TIMES_OF_DAY',
  };
};

export const loadPage = () => {
  return {
    type: 'LOAD_PAGE',
  };
};

export const toggleWeek = () => {
  return {
    type: 'TOGGLE_WEEK',
  };
};
