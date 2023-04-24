import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekSixthSelected } from '../../../../redux/actions/daysOfWeekWeather.actions';
import { sixthDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { sixthDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { sixthDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

//
const mapState = state => {
  return {
    dateData: sixthDayDateSelector(state),
    weatherData: sixthDayDataWeatherSelector(state),
    selectedWeekday: sixthDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekSixthSelected,
};
export default connect(mapState, mapDispath)(OneDay);
