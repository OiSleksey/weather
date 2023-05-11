import React from 'react';
// import '../DaysOfWeek-test.sass';
import './OneDay.sass';
import PropTypes from 'prop-types';
// import images from '../../../../img/weather-code';

const OneDay = ({
  dateData,
  weatherData,
  setSelectedWeekday,
  selectedWeekday,
}) => {
  if (!dateData || !weatherData) return null;
  const selectedStyle = selectedWeekday
    ? 'week__day one-day one-day_active'
    : 'week__day one-day';
  const weekday = dateData.weekdayName;
  const date = dateData.day;
  const month = dateData.month;
  const minTemperature =
    weatherData.minTemperature > 0
      ? '+' + weatherData.minTemperature
      : weatherData.minTemperature;
  const maxTemperature =
    weatherData.maxTemperature > 0
      ? '+' + weatherData.maxTemperature
      : weatherData.maxTemperature;
  return (
    <div onClick={setSelectedWeekday} className={selectedStyle}>
      <div className="one-day__img-box">
        <img
          src={`./img/weather-code/weathercode-${weatherData.weatherCode}.png`}
          alt="weathercode"
          className="one-day__img"
        />
      </div>
      <div className="one-day__data-box data-box">
        <div className="data-box__name-day">
          <h4 className="data-box__title">{`${weekday} ${date}.${month}`}</h4>
        </div>
        <div className="data-box__temperature">
          <h4 className="data-box__indicators">
            {`${minTemperature}/${maxTemperature}`} С&deg;
          </h4>
        </div>
      </div>
    </div>
  );
};

OneDay.propTypes = {
  dateData: PropTypes.object,
  weatherData: PropTypes.object,
  setSelectedWeekday: PropTypes.func,
  selectedWeekday: PropTypes.bool,
};

export default OneDay;
