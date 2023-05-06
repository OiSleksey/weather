import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../../components/App.sass';
import './DaysOfWeek.sass';
import FirstDay from './FirstDay/FirstDay';
import SecondDay from './SecondDay/SecondDay';
import ThirdDay from './ThirdDay/ThirdDay';
import FourthDay from './FourthDay/FourthDay';
import FifthDay from './FifthDay/FifthDay';
import SixthDay from './SixthDay/SixthDay';
import SeventhDay from './SeventhDay/SeventhDay';
import { useTrail, animated } from '@react-spring/web';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const DaysOfWeek = ({ isUI }) => {
  const isWeek = isUI.isWeek;
  const isMobileSize = isUI.isMobileSize;
  const items = [
    <FirstDay />,
    <SecondDay />,
    <ThirdDay />,
    <FourthDay />,
    <FifthDay />,
    <SixthDay />,
    <SeventhDay />,
  ];

  const listvariants = {
    hidden: custom => ({
      opacity: 0,
      x: 0,
      transition: {
        // duration: 0.1,
        delay: custom * 0.05,
      },
    }),
    visible: custom => ({
      opacity: 1,
      x: -90,
      transition: {
        // duration: 0.1,
        delay: custom * 0.05,
      },
    }),
  };
  const desktopVersion = items.map((component, index) => (
    <motion.div key={index}>{component}</motion.div>
  ));
  const mobileVersion = items.map((component, index) => (
    <AnimatePresence key={index}>
      {isWeek && (
        <motion.div
          variants={listvariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          custom={index + 1}
        >
          {component}
        </motion.div>
      )}
    </AnimatePresence>
  ));
  // </motion.div>

  const activeVersion = isMobileSize ? mobileVersion : desktopVersion;
  //d-xxl-none

  return <div className="sidebar__week week ">{activeVersion}</div>;
};

DaysOfWeek.propTypes = {
  isUI: PropTypes.object.isRequired,
};
const mapState = state => {
  return {
    isUI: state.isUI,
  };
};
export default connect(mapState)(DaysOfWeek);
