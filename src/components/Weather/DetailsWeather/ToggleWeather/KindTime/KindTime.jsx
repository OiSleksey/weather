import React from 'react';
import { connect } from 'react-redux';
import './KindTime.sass';
import { toggleTimesOfDay } from '../../../../../redux/actions/stateUI.action';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const nameKind = ['hours', 'time of day'];

const KindTime = ({ isUI, toggleTimesOfDay }) => {
  const indexKindWeather = isUI.stateToggle ? 0 : 1;

  return (
    <div className="kind-time">
      <div className="kind-time__wrapper">
        {nameKind.map((item, index) => (
          <ToggleItem
            key={item}
            item={<h4 className="kind-time__text">{item}</h4>}
            isSelected={indexKindWeather === index}
            handleClick={() => toggleTimesOfDay(index === 0)}
          />
        ))}
      </div>
    </div>
  );
};

KindTime.propTypes = {
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

export default connect(mapState, mapDispatch)(KindTime);

const ToggleItem = ({ item, isSelected, handleClick = Function.prototype }) => {
  return (
    <motion.div
      className="kind-time__time-box"
      onClick={handleClick}
      animate={{ color: isSelected ? '#F2E205' : '#5DD3BD' }}
    >
      <AnimatePresence>
        {isSelected && <ActiveLine key={item} index={item} items={nameKind} />}
      </AnimatePresence>
      {item}
    </motion.div>
  );
};

const ActiveLine = () => {
  return (
    <motion.div
      layoutId="activeItem"
      className="kind-time__active-line"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
    />
  );
};
