import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import '../../../components/App.sass';
import './PartsOfWeek.sass';
import OneDay from './OneDay/OneDay';
import FirstDay from './FirstDay/FirstDay';
import SecondDay from './SecondDay/SecondDay';
import ThirdDay from './ThirdDay/ThirdDay';
import FourthDay from './FourthDay/FourthDay';
import FifthDay from './FifthDay/FifthDay';
import SixthDay from './SixthDay/SixthDay';
import SeventhDay from './SeventhDay/SeventhDay';
import { useTrail, animated } from '@react-spring/web';

const WeekWeather = ({ isUI }) => {
  // console.log(props);
  // const getStateHamburger = data => {
  //   console.log(data);
  // };
  // useEffect(() => {
  //   console.log(props);
  //   const isOpen = props.onHamburger();
  //   getStateHamburger(isOpen);
  // }, [props]);
  const isWeek = isUI.isWeek;
  const items = [
    <FirstDay />,
    <SecondDay />,
    <ThirdDay />,
    <FourthDay />,
    <FifthDay />,
    <SixthDay />,
    <SeventhDay />,
  ];

  const config = { mass: 5, tension: 1000, friction: 200 };
  // const config = { mass: 1, tension: 500, friction: 40 };
  //
  const trail = useTrail(items.length, {
    config,
    delay: 100,
    // opacity: isMenuOpen ? 1 : 0,
    // transform: isMenuOpen ? 'translateX(0px)' : 'translateX(-100px)',
    // from: {
    //   opacite: 0,
    //   transform: 'translateX(-100px)',
    // },
    from: { opacity: 0, scaleY: '0' },
    to: {
      opacity: isWeek ? 1 : 0,
      scaleY: isWeek ? '1' : '0',
      // transform: isWeek ? 'translateY(0)' : 'translateY(100rem)',
    },
  });

  return (
    <div className="sidebar__week week d-xxl-none">
      {/* {trail.map((props, index) => (
        <animated.div key={index} style={{ ...props }}>
          {items[index]}
        </animated.div>
      ))} */}
      {items.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
      {/* <FirstDay />
      <SecondDay />
      <ThirdDay />
      <FourthDay />
      <FifthDay />
      <SixthDay />
      <SeventhDay /> */}
    </div>
  );
};

const mapState = state => {
  return {
    isUI: state.isUI,
  };
};
export default connect(mapState)(WeekWeather);
