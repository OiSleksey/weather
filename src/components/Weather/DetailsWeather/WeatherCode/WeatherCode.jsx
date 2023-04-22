import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './WeatherCode.sass';
import { weatherCodeSelector } from '../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
const WeatherCode = props => {
  // console.log(props.weatherData);
  if (!props.weatherData) {
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
            onClick={() => console.log(props.weatherData)}
            src={`./img/weather-code/weathercode-${props.weatherData}.png`}
            alt="weather-code"
            className="state-weather__img"
          />
        </div>
      </div>
    </>
  );
};

const mapState = state => {
  return {
    weatherData: weatherCodeSelector(state),
  };
};

function propsAreEqual(prevProps, nextProps) {
  const boolValue = prevProps.weatherData === nextProps.weatherData;
  return boolValue;
}

// export default connect(mapState, null)(WeatherCode);
export default connect(mapState, null)(memo(WeatherCode, propsAreEqual));
