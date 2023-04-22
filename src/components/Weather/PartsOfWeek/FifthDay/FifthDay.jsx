import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekFifthSelected } from '../../../../redux/actions/partsWeekWeather.actions';
import { fifthDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { fifthDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { fifthDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

const mapState = state => {
  return {
    dateData: fifthDayDateSelector(state),
    weatherData: fifthDayDataWeatherSelector(state),
    selectedWeekday: fifthDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekFifthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
