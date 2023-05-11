import React from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './ToggleWeather.sass';
import { toggleTimesOfDay } from '../../../../redux/actions/stateUI.action';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

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
      delay: 0.2,
      type: 'spring',
    },
  }),
};
const ToggleWeather = ({ isUI, toggleTimesOfDay }) => {
  if (!isUI || isUI.isError) return null;

  const typeTimeWeather = isUI.stateToggle ? 'hours' : 'time of day';
  return (
    <div className="detail__toggle toggle">
      <div
        className="switch"
        data-ison={isUI.stateToggle}
        onClick={toggleTimesOfDay}
      >
        <motion.div className="switch__handle" layout transition={spring} />
      </div>
      <AnimatePresence mode="out-in">
        <motion.div className="toggle__content">
          <motion.h4
            className="toggle__title"
            key={typeTimeWeather}
            variants={textVariants}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
          >
            Show weather by
            <br />
            <span className="toggle__span">{typeTimeWeather}</span>
          </motion.h4>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

ToggleWeather.propTypes = {
  isUI: PropTypes.object.isRequired,
  toggleTimesOfDay: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    isUI: state.isUI,
  };
};
const mapDispatch = {
  toggleTimesOfDay: toggleTimesOfDay,
};
export default connect(mapState, mapDispatch)(ToggleWeather);
