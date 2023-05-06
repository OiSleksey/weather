import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { weatherTemperatureSelector } from '../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import '../DetailsWeather.sass';
import './TemperatureNow.sass';
import PropTypes from 'prop-types';

const TemperatureNow = ({ temperature }) => {
  if (!temperature) {
    return (
      <div className="detail__temperature-main temperature-main">
        <div className="temperature-main__quantity">
          <h3>Loading</h3>
        </div>
      </div>
    );
  }
  const correctTemperature = temperature > 0 ? '+' + temperature : temperature;
  // useEffect(() => {
  //   props.getWeatherCode();
  //   console.log('WeatherCode Effect');
  // }, []);
  // if (!props.weatherCode.hourly) {

  //   return <div>BAD</div>;
  // }
  return (
    <div className="detail__temperature-main temperature-main row">
      <div className="temperature-main__quantity col-6">
        <h1 className="temperature-main__text">{correctTemperature}</h1>
      </div>
      <div className="temperature-main__img-box col-6">
        <img
          src="./img/temperature.png"
          alt="temperature-main"
          className="temperature-main__img"
        />
      </div>
    </div>
  );
};

TemperatureNow.propTypes = {
  temperature: PropTypes.string,
};

const mapState = state => {
  return {
    temperature: weatherTemperatureSelector(state),
  };
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue = prevProps.temperature === nextProps.temperature;
  return boolValue;
}

// export default connect(mapState, null)(TemperatureNow);
export default connect(mapState, null)(memo(TemperatureNow, propsAreEqual));
