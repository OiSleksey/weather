import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { fifthDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { fifthDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { fifthDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekFifthSelected } from '../../../../redux/actions/week-weather.actions';

//
const mapState = state => {
  return {
    dayNameAndData: fifthDayDateSelector(state),
    weatherData: fifthDayDataWeatherSelector(state),
    selectedWeekday: fifthDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekFifthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
