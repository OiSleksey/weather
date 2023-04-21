import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { firstDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { firstDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { firstDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekFirstSelected } from '../../../../redux/actions/week-weather.actions';
//
const mapState = state => {
  return {
    dayNameAndData: firstDayDateSelector(state),
    weatherData: firstDayDataWeatherSelector(state),
    selectedWeekday: firstDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekFirstSelected,
};

export default connect(mapState, mapDispath)(OneDay);
