import { connect } from 'react-redux';
import React from 'react';
import PartOne from '../PartOne/PartOne';
import { nightTemperatureWeatherCodeSelector } from '../../../../redux/selectors/part-weatherdata.selector';
import { nightPartDaySelector } from '../../../../redux/selectors/part-times-weather.selector';
import { weatherPartNightSelected } from '../../../../redux/actions/part-weather.actions';
import { nightPartSelected } from '../../../../redux/selectors/part-selected-weather.selector';
const mapState = state => {
  return {
    partDay: nightPartDaySelector(state),
    partWeather: nightTemperatureWeatherCodeSelector(state),
    partSelected: nightPartSelected(state),
    // weatherCode: state,
    // temperature: state,
  };
};

const mapDispath = {
  setSelectedPartDay: weatherPartNightSelected,
};

export default connect(mapState, mapDispath)(PartOne);
