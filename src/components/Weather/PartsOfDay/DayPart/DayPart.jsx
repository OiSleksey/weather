import { connect } from 'react-redux';
import React from 'react';
import PartOne from '../PartOne/PartOne';
import { dayPartDaySelector } from '../../../../redux/selectors/part-times-weather.selector';
import { dayTemperatureWeatherCodeSelector } from '../../../../redux/selectors/part-weatherdata.selector';
import { weatherPartDaySelected } from '../../../../redux/actions/part-weather.actions';
import { dayPartSelected } from '../../../../redux/selectors/part-selected-weather.selector';
const mapState = state => {
  return {
    partDay: dayPartDaySelector(state),
    partWeather: dayTemperatureWeatherCodeSelector(state),
    partSelected: dayPartSelected(state),
    // weatherCode: state,
    // temperature: state,
  };
};

const mapDispath = {
  setSelectedPartDay: weatherPartDaySelected,
};

export default connect(mapState, mapDispath)(PartOne);

// // mapDispath
// partSelected: state,
// import { weatherPartEveningSelected } from '../../../redux/part-weather/part-weather.actions';
// const mapDispath = {
//   setSelectedPartDay: weatherPartEveningSelected,
// };
