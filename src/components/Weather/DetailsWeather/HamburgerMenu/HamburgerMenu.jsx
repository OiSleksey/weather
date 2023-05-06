import React from 'react';
import { connect } from 'react-redux';
import './HamburgerMenu.sass';
import { Sling as Hamburger } from 'hamburger-react';
import { toggleWeek } from '../../../../redux/actions/stateUI.action';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ isUi, setStateToggle }) => {
  if (!isUi || !setStateToggle) return null;
  const isMobileSize = isUi.isMobileSize;
  const activeHamburger = isMobileSize
    ? 'detail__hamburger hamburger  hamburger_active'
    : 'detail__hamburger hamburger';
  return (
    <div className={activeHamburger}>
      <Hamburger
        toggled={isUi.isWeek}
        toggle={setStateToggle}
        size={26}
        // style={{ width: '4rem' }}
        direction="right"
        distance="sm"
        rounded
        // label="Show menu"
        // hideOutline={false}
      />
    </div>
  );
};

HamburgerMenu.propTypes = {
  isUi: PropTypes.object.isRequired,
  setStateToggle: PropTypes.func.isRequired,
};

const mapState = state => {
  return {
    isUi: state.isUI,
  };
};
const mapDispath = {
  setStateToggle: toggleWeek,
};
export default connect(mapState, mapDispath)(HamburgerMenu);
