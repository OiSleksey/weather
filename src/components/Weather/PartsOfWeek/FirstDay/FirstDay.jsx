import React from 'react';
import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekFirstSelected } from '../../../../redux/actions/partsWeekWeather.actions';
import { firstDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { firstDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';
import { firstDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';

//
const mapState = state => {
  return {
    // allDataFirstDay: firstDayallDataFirstDay(state),

    dateData: firstDayDateSelector(state),
    weatherData: firstDayDataWeatherSelector(state),
    selectedWeekday: firstDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekFirstSelected,
};

export default connect(mapState, mapDispath)(OneDay);
