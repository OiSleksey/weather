import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { secondDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { secondDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { secondDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekSecondSelected } from '../../../../redux/actions/week-weather.actions';

//
const mapState = state => {
  return {
    dayNameAndData: secondDayDateSelector(state),
    weatherData: secondDayDataWeatherSelector(state),
    selectedWeekday: secondDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekSecondSelected,
};

export default connect(mapState, mapDispath)(OneDay);
