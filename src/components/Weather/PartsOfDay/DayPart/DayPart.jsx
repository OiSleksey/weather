import { connect } from 'react-redux';
import PartOne from '../PartOne/PartOne';
import { weatherPartDaySelected } from '../../../../redux/actions/partsDayWeather.actions';
import { dayPartDaySelector } from '../../../../redux/selectors/partsOfDay.selectors/namePartsOfDay.selector';
import { dayTemperatureWeatherCodeSelector } from '../../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { dayPartSelected } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';

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
