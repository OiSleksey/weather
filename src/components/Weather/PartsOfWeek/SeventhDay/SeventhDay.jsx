import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { seventhDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { seventhDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { seventhDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekSeventhSelected } from '../../../../redux/actions/week-weather.actions';
//
const mapState = state => {
  return {
    dayNameAndData: seventhDayDateSelector(state),
    weatherData: seventhDayDataWeatherSelector(state),
    selectedWeekday: seventhDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekSeventhSelected,
};
export default connect(mapState, mapDispath)(OneDay);
