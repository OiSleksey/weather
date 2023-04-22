import { connect } from 'react-redux';
import PartOne from '../PartOne/PartOne';
import { weatherPartMorningSelected } from '../../../../redux/actions/partsDayWeather.actions';
import { morningPartDaySelector } from '../../../../redux/selectors/partsOfDay.selectors/namePartsOfDay.selector';
import { morningTemperatureWeatherCodeSelector } from '../../../../redux/selectors/partsOfDay.selectors/weatherPartsOfDay.selector';
import { morningPartSelected } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';

const mapState = state => {
  return {
    partDay: morningPartDaySelector(state),
    partWeather: morningTemperatureWeatherCodeSelector(state),
    partSelected: morningPartSelected(state),
    // weatherCode: state,
    // temperature: state,
  };
};

const mapDispath = {
  setSelectedPartDay: weatherPartMorningSelected,
};

export default connect(mapState, mapDispath)(PartOne);
