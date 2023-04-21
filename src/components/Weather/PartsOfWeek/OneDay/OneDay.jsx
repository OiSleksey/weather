import React from 'react';
import '../PartsOfWeek.sass';
import './OneDay.sass';
import PropTypes from 'prop-types';

const OneDay = ({
  dayNameAndData,
  weatherData,
  setSelectedWeekday,
  selectedWeekday,
}) => {
  const selectedStyle = selectedWeekday
    ? 'week__day one-day day-first one-day_active'
    : 'week__day one-day day-first';
  if (!dayNameAndData || !weatherData)
    return (
      <div
        onClick={() => {
          setSelectedWeekday();
          console.log('OneDay');
        }}
        className={selectedStyle}
      >
        <div className="one-day__img-box day-first__img-box">
          <h6>Loading...</h6>
        </div>
        <div className="day-first__day one-day__data-box data-box">
          <div className="data-box__name-day">
            <h4 className="data-box__title">Loading...</h4>
          </div>
          <div className="data-box__temperature">
            <h4 className="data-box__indicators">Loading...</h4>
          </div>
        </div>
      </div>
    );
  const weekday = dayNameAndData.weekday;
  const date = dayNameAndData.day;
  const month = dayNameAndData.month;
  const minTemperature = weatherData.minTemperature;
  const maxTemperature = weatherData.maxTemperature;
  return (
    <div onClick={setSelectedWeekday} className={selectedStyle}>
      <div className="one-day__img-box day-first__img-box">
        <img
          src={`./img/weather-code/weathercode-${weatherData.weatherCode}.png`}
          alt="weathercode"
          className="one-day__img"
        />
      </div>
      <div className="day-first__day one-day__data-box data-box">
        <div className="data-box__name-day">
          <h4 className="data-box__title">{`${weekday} ${date}.${month}`}</h4>
        </div>
        <div className="data-box__temperature">
          <h4 className="data-box__indicators">
            {`${minTemperature}/${maxTemperature}`} &deg;С
          </h4>
        </div>
      </div>
    </div>
  );
};

// OneDay.propTypes = {
//   dayNameAndData: PropTypes.shape().isRequired,
//   weatherData: PropTypes.shape().isRequired,
//   // createNewTask: PropTypes.func.isRequired,
//   // updateTask: PropTypes.func.isRequired,
//   // deleteTask: PropTypes.func.isRequired,
//   // tasks: PropTypes.array.isRequired,
// };

export default OneDay;
