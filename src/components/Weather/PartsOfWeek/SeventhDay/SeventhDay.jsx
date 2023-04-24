import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekSeventhSelected } from '../../../../redux/actions/daysOfWeekWeather.actions';
import { seventhDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { seventhDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { seventhDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

//
const mapState = state => {
  return {
    dateData: seventhDayDateSelector(state),
    weatherData: seventhDayDataWeatherSelector(state),
    selectedWeekday: seventhDaySelectedSelector(state),
  };
};
const mapDispath = {
  setSelectedWeekday: weatherWeekSeventhSelected,
};
export default connect(mapState, mapDispath)(OneDay);
