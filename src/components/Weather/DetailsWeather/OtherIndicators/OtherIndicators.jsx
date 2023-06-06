import React from 'react';
import { connect } from 'react-redux';
import RelativeHumadity from './RelativeHumadity/RelativeHumadity';
import WindSpeed from './WindSpeed/WindSpeed';
import WindDirection from './WindDirection/WindDirection';
import Pressure from './Pressure/Pressure';
import '../DetailsWeather.sass';
import './OtherIndicators.sass';
import { dayStatusSelector } from './../../../../redux/selectors/detailsWeather.selectors/dayStatus.selector';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: custom => ({
    opacity: 0,
    x: '-120%',
    transition: {
      duration: 0,
    },
  }),
  visible: custom => ({
    opacity: 1,
    x: '0',
    transition: {
      duration: 0.3,
      delay: custom * 0.2,
      type: 'spring',
    },
  }),
};

const OtherIndicators = ({ dayStatus }) => {
  if (!dayStatus) return null;
  const indicators = [
    <RelativeHumadity />,
    <WindSpeed />,
    <WindDirection />,
    <Pressure />,
  ];
  return (
    <motion.div
      className="detail__other-indicators other-indicators"
      // key={namePosition}
      variants={textVariants}
      initial={'hidden'}
      animate={'visible'}
      key={dayStatus.hourOrPart + dayStatus.weekdayName}
    >
      {indicators.map((component, index) => (
        <motion.div
          style={{ display: 'inline-block' }}
          key={index}
          variants={textVariants}
          initial={'hidden'}
          animate={'visible'}
          custom={index + 1}
          // transition={{
          //   type: 'spring',
          // }}
        >
          {component}
        </motion.div>
      ))}
    </motion.div>
  );
};

OtherIndicators.propTypes = {
  dayStatus: PropTypes.object,
};

const mapState = state => {
  return {
    dayStatus: dayStatusSelector(state),
  };
};

export default connect(mapState)(OtherIndicators);
