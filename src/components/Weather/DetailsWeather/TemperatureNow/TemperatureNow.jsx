import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { weatherTemperatureSelector } from '../../../../redux/selectors/detailsWeather.selectors/detailsDataWeather.selector';
import { dayStatusSelector } from './../../../../redux/selectors/detailsWeather.selectors/dayStatus.selector';
import '../DetailsWeather.sass';
import './TemperatureNow.sass';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: custom => ({
    opacity: 0,
    translateX: '-120%',
    transition: {
      duration: 0,
    },
  }),
  visible: custom => ({
    opacity: 1,
    translateX: '0',
    transition: {
      type: 'spring',
      duration: 0.3,
      // delay: 0.3,
    },
  }),
};

const TemperatureNow = ({ temperature, dayStatus }) => {
  if (!temperature) return null;
  const correctTemperature = temperature > 0 ? '+' + temperature : temperature;
  return (
    <motion.div
      className="detail__temperature-main temperature-main row"
      key={dayStatus.hourOrPart + dayStatus.weekdayName}
    >
      <motion.div
        className="temperature-main__quantity col-6"
        variants={textVariants}
        initial={'hidden'}
        animate={'visible'}
      >
        <h1 className="temperature-main__text">{correctTemperature}</h1>
      </motion.div>
      <motion.div
        className="temperature-main__img-box col-6"
        variants={textVariants}
        initial={'hidden'}
        animate={'visible'}
      >
        <img
          src="./img/temperature.png"
          alt="temperature-main"
          className="temperature-main__img"
        />
      </motion.div>
    </motion.div>
  );
};

TemperatureNow.propTypes = {
  temperature: PropTypes.string,
  dayStatus: PropTypes.object,
};

const mapState = state => {
  return {
    temperature: weatherTemperatureSelector(state),
    dayStatus: dayStatusSelector(state),
  };
};

// function propsAreEqual(prevProps, nextProps) {
//   const boolValue = prevProps.temperature === nextProps.temperature;
//   return boolValue;
// }

// export default connect(mapState, null)(TemperatureNow);
export default connect(mapState, null)(memo(TemperatureNow));
