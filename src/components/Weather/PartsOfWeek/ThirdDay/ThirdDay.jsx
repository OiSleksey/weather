import OneDay from '../OneDay/OneDay';
import { connect } from 'react-redux';
import { weatherWeekThirdSelected } from '../../../../redux/actions/partsWeekWeather.actions';
import { thirdDayDateSelector } from '../../../../redux/selectors/daysOfWeek.selectors/dateDaysOfWeek.selector';
import { thirdDayDataWeatherSelector } from '../../../../redux/selectors/daysOfWeek.selectors/weatherDaysOfWeek.selector';
import { thirdDaySelectedSelector } from '../../../../redux/selectors/daysOfWeek.selectors/selectedDayOfWeek.selector';

//
const mapState = state => {
  return {
    dateData: thirdDayDateSelector(state),
    weatherData: thirdDayDataWeatherSelector(state),
    selectedWeekday: thirdDaySelectedSelector(state),
  };
};

const mapDispath = {
  setSelectedWeekday: weatherWeekThirdSelected,
};

export default connect(mapState, mapDispath)(OneDay);
