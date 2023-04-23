import { connect } from 'react-redux';
import PartOne from '../PartOne/PartOne';
import { weatherPartEveningSelected } from '../../../../redux/actions/partsDayWeather.actions';
import { eveningPartDaySelector } from '../../../../redux/selectors/partsOfDay.selectors/namePartsOfDay.selector';
import { eveningTemperatureWeatherCodeSelector } from '../../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { eveningPartSelected } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';

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
