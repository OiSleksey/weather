import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { weatherTemperatureNowSelector } from '../../../redux/location-weather/location-weather.selector';
import './OtherIndicators.sass';
import './TemperatureNow.sass';

const TemperatureNow = props => {
  if (!props.temperature) {
    return (
      <div className="detail__temperature-main temperature-main">
        <div className="temperature-main__quantity">
          <h3>Loading</h3>
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
    <div className="detail__temperature-main temperature-main">
      <div className="temperature-main__quantity">
        <h1 className="temperature-main__text">{props.temperature}</h1>
      </div>
      <div className="temperature-main__img-box">
        <img
          src="./img/temperature.png"
          alt="temperature-main"
          className="temperature-main__img"
        />
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    temperature: weatherTemperatureNowSelector(state),
  };
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue = prevProps.temperature === nextProps.temperature;
  return boolValue;
}

// export default connect(mapState, null)(TemperatureNow);
export default connect(mapState, null)(memo(TemperatureNow, propsAreEqual));
