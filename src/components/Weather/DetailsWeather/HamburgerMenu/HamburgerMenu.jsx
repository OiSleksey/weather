import React from 'react';
import { connect } from 'react-redux';
import './HamburgerMenu.sass';
import { Sling as Hamburger } from 'hamburger-react';
import { toggleWeek } from '../../../../redux/actions/stateUI.action';

const HamburgerMenu = ({ isUi, setStateToggle }) => {
  if (!isUi || !setStateToggle) return null;
  return (
    <div className="detail__hamburger hamburger">
      <Hamburger
        toggled={isUi.isWeek}
        toggle={setStateToggle}
        size={25}
        direction="right"
        distance="sm"
        rounded
        // label="Show menu"
        // hideOutline={false}
      />
    </div>
  );
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
