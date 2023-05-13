import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './ToggleWeather.sass';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import KindTime from './KindTime/KindTime';

// const spring = {
//   type: 'spring',
//   stiffness: 700,
//   damping: 30,
// };

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
      duration: 0.5,
      delay: 0.8,
      type: 'spring',
    },
  }),
};
const ToggleWeather = ({ isUI }) => {
  if (!isUI || isUI.isError) return null;

  return (
    <AnimatePresence mode="out-in">
      <motion.div
        className="detail__toggle toggle"
        variants={textVariants}
        initial={'hidden'}
        animate={'visible'}
      >
        <div className="toggle__main">
          <div className="toggle__text-box">
            <h4 className="toggle__text">Show weather by</h4>
          </div>
          <KindTime />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

ToggleWeather.propTypes = {
  isUI: PropTypes.object.isRequired,
};

const mapState = state => {
  return {
    isUI: state.isUI,
  };
};

export default connect(mapState)(ToggleWeather);
