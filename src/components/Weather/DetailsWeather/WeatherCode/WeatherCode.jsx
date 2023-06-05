import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './WeatherCode.sass';
import { weatherCodeSelector } from '../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { dayStatusSelector } from './../../../../redux/selectors/detailsWeather.selectors/dayStatus.selector';

const textVariants = {
  hidden: custom => ({
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0,
    },
  }),
  visible: custom => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: 'spring',
    },
  }),
};

const WeatherCode = ({ weatherCode, dayStatus }) => {
  if (!weatherCode || !dayStatus) return null;

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
          <motion.img
            src={`./img/weather-code/weathercode-${weatherCode}.png`}
            alt="weather-code"
            className="state-weather__img"
            key={dayStatus.hourOrPart + dayStatus.weekdayName}
            variants={textVariants}
            initial={'hidden'}
            animate={'visible'}
          />
        </div>
      </div>
    </>
  );
};

WeatherCode.propTypes = {
  weatherCode: PropTypes.string,
  dayStatus: PropTypes.object,
};

const mapState = state => {
  return {
    weatherCode: weatherCodeSelector(state),
    dayStatus: dayStatusSelector(state),
  };
};

// function propsAreEqual(prevProps, nextProps) {
//   const boolValue = prevProps.weatherCode === nextProps.weatherCode;
//   return boolValue;
// }

export default connect(mapState, null)(WeatherCode);
// export default connect(mapState, null)(memo(WeatherCode, propsAreEqual));
