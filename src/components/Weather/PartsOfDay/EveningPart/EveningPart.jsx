import { connect } from 'react-redux';
import React from 'react';
import PartOne from '../PartOne/PartOne';
import { eveningPartDaySelector } from '../../../../redux/selectors/part-times-weather.selector';
import { eveningTemperatureWeatherCodeSelector } from '../../../../redux/selectors/part-weatherdata.selector';
import { weatherPartEveningSelected } from '../../../../redux/actions/part-weather.actions';
import { eveningPartSelected } from '../../../../redux/selectors/part-selected-weather.selector';

const mapState = state => {
  return {
    partDay: eveningPartDaySelector(state),
    partWeather: eveningTemperatureWeatherCodeSelector(state),
    partSelected: eveningPartSelected(state),
    // weatherCode: state,
    // temperature: state,
  };
};
const mapDispath = {
  setSelectedPartDay: weatherPartEveningSelected,
};
export default connect(mapState, mapDispath)(PartOne);

// mapDispath
// partSelected: state,
// import { weatherPartEveningSelected } from '../../../redux/part-weather/part-weather.actions';
// const mapDispath = {
//   setSelectedPartDay: weatherPartEveningSelected,
// };
