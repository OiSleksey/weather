import React from 'react';
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

const WeekWeather = props => {
  return (
    <div className="weather__week week">
      <FirstDay />
      <SecondDay />
      <ThirdDay />
      <FourthDay />
      <FifthDay />
      <SixthDay />
      <SeventhDay />
      {/* <FirstDay /> */}
      {/* <div className="week__day day-second"></div>
      <div className="week__day day-third"></div>
      <div className="week__day day-fourth"></div>
      <div className="week__day day-fifth"></div>
      <div className="week__day day-sixth"></div>
      <div className="week__day day-seventh"></div> */}
    </div>
  );
};

export default WeekWeather;
