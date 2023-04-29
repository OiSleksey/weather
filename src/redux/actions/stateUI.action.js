export const TOGGLE_TIMES_OF_DAY = 'TOGGLE_TIMES_OF_DAY';
export const LOAD_PAGE = 'LOAD_PAGE';

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
