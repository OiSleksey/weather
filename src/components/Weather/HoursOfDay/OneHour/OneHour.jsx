import { connect } from 'react-redux';
import Hour from '../Hour/Hour';
import { weatherPartMorningSelected } from '../../../../redux/actions/partsDayWeather.actions';
import { morningPartDaySelector } from '../../../../redux/selectors/partsOfDay.selectors/namePartsOfDay.selector';
import { getDataRequiredHourSelector } from '../../../../redux/selectors/hoursOfDay.selectors/weatherHoursOfDay.selector';
import { morningPartSelected } from '../../../../redux/selectors/partsOfDay.selectors/selectedPartOfDay.selector';

const mapState = state => {
  return {
    // partDay: morningPartDaySelector(state),
    // partWeather: morningTemperatureWeatherCodeSelector(state),
    // partSelected: morningPartSelected(state),
    hour: '01',
    hourWeather: getDataRequiredHourSelector(state, 0),
    hourSelected: state,
  };
};

const mapDispath = {
  setSelectedHour: weatherPartMorningSelected,
};

export default connect(mapState, mapDispath)(Hour);
