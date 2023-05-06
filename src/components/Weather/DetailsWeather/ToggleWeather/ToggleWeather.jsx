import React from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './ToggleWeather.sass';
import { toggleTimesOfDay } from '../../../../redux/actions/stateUI.action';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ToggleWeather = ({ stateToggle, toggleTimesOfDay }) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    // <div className="detail__toggle toggle">
    //   <div className="toggle__checkbox-box">
    //     <input
    //       type="checkbox"
    //       className="toggle__checkbox"
    //       onChange={toggleTimesOfDay}
    //       checked={stateToggle}
    //     />
    //   </div>
    // </div>
    <div className="detail__toggle toggle">
      <div
        className="switch"
        data-ison={stateToggle}
        onClick={toggleTimesOfDay}
      >
        <motion.div className="switch__handle" layout transition={spring} />
      </div>
    </div>
  );
};

ToggleWeather.propTypes = {
  stateToggle: PropTypes.bool.isRequired,
  toggleTimesOfDay: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    stateToggle: state.isUI.stateToggle,
  };
};
const mapDispatch = {
  toggleTimesOfDay: toggleTimesOfDay,
};
export default connect(mapState, mapDispatch)(ToggleWeather);
