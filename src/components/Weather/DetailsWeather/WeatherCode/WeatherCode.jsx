import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './WeatherCode.sass';
import { weatherCodeSelector } from '../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import PropTypes from 'prop-types';

const WeatherCode = ({ weatherCode }) => {
  if (!weatherCode) {
    return (
      <div className="detail__state-weather state-weather">
        <div className="state-weather__img-box">
          <h3>Loading...</h3>
        </div>
      </div>
    );
  }
  // useEffect(() => {
  //   props.getWeatherCode();
  //   console.log('WeatherCode Effect');
  // }, []);
  // if (!props.weatherCode.hourly) {

  //   return <div>BAD</div>;
  // }
  return (
    <>
      <div className="detail__state-weather state-weather">
        <div className="state-weather__img-box">
          <img
            src={`./img/weather-code/weathercode-${weatherCode}.png`}
            alt="weather-code"
            className="state-weather__img"
          />
        </div>
      </div>
    </>
  );
};

WeatherCode.propTypes = {
  weatherCode: PropTypes.string,
};

const mapState = state => {
  return {
    weatherCode: weatherCodeSelector(state),
  };
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue = prevProps.weatherCode === nextProps.weatherCode;
  return boolValue;
}

// export default connect(mapState, null)(WeatherCode);
export default connect(mapState, null)(memo(WeatherCode, propsAreEqual));
