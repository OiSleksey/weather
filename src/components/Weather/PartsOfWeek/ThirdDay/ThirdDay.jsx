import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { thirdDayDateSelector } from '../../../../redux/selectors/days-weather.selector';
import { thirdDayDataWeatherSelector } from '../../../../redux/selectors/temperature-weather.selector';
import { thirdDaySelectedSelector } from '../../../../redux/selectors/selected-weekday.selector';
import { weatherWeekThirdSelected } from '../../../../redux/actions/week-weather.actions';
//
const mapState = state => {
  return {
    dayNameAndData: thirdDayDateSelector(state),
    weatherData: thirdDayDataWeatherSelector(state),
    selectedWeekday: thirdDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekThirdSelected,
};

export default connect(mapState, mapDispath)(OneDay);
