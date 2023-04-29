import React from 'react';
import { connect } from 'react-redux';
import '../DetailsWeather.sass';
import './ToggleWeather.sass';
import { toggleTimesOfDay } from '../../../../redux/actions/stateUI.action';

const ToggleWeather = ({ stateToggle, toggleTimesOfDay }) => {
  return (
    <div className="detail__toggle toggle">
      <div className="toggle__checkbox-box">
        <input
          type="checkbox"
          className="toggle__checkbox"
          onChange={toggleTimesOfDay}
          checked={stateToggle}
        />
      </div>
    </div>
  );
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
