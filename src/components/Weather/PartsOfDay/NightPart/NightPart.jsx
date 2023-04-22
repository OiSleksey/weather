import { connect } from 'react-redux';
import PartOne from '../PartOne/PartOne';
import { weatherPartNightSelected } from '../../../../redux/actions/partsDayWeather.actions';
import { nightPartDaySelector } from '../../../../redux/selectors/partsOfDay.selectors/namePartsOfDay.selector';
import { nightTemperatureWeatherCodeSelector } from '../../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { nightPartSelected } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';
const mapState = state => {
  return {
    partDay: nightPartDaySelector(state),
    partWeather: nightTemperatureWeatherCodeSelector(state),
    partSelected: nightPartSelected(state),
  };
};

const mapDispath = {
  setSelectedPartDay: weatherPartNightSelected,
};

export default connect(mapState, mapDispath)(PartOne);
