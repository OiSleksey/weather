import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekFourthSelected } from '../../../../redux/actions/partsWeekWeather.actions';
import { fourthDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { fourthDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { fourthDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

const mapState = state => {
  return {
    dateData: fourthDayDateSelector(state),
    weatherData: fourthDayDataWeatherSelector(state),
    selectedWeekday: fourthDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekFourthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
