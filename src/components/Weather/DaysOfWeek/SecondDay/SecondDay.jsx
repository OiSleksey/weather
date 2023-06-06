import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekSecondSelected } from '../../../../redux/actions/daysOfWeekWeather.actions';
import { secondDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { secondDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { secondDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

//
const mapState = state => {
  return {
    dateData: secondDayDateSelector(state),
    weatherData: secondDayDataWeatherSelector(state),
    selectedWeekday: secondDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekSecondSelected,
};

export default connect(mapState, mapDispath)(OneDay);
