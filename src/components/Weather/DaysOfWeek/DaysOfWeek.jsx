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
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';

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

  const controls = useAnimation();

  useEffect(() => {
    if (isMobileSize) {
      const runInitial = async () => {
        await controls.start({
          opacity: 0,
          scale: 0,
        });
        await controls.start({ position: 'absolute' });
      };
      const runAnimation = async () => {
        await controls.start({ position: 'relative' });
        await controls.start({
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
          },
        });
      };
      if (isWeek) {
        runAnimation();
      } else {
        runInitial();
      }
    }
  }, [controls, isWeek]);

  const desktopVersion = items.map((component, index) => (
    <motion.div key={index}>{component}</motion.div>
  ));

  const mobileVersion = items.map((component, index) => (
    <motion.div
      style={{ opacity: 0, scale: 0, position: 'absolute' }}
      key={index}
      animate={controls}
      custom={index + 1}
    >
      {component}
    </motion.div>
  ));

  const activeVersion = isMobileSize ? mobileVersion : desktopVersion;
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
