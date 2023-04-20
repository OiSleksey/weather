import React from 'react';
import '../../../components/App.sass';
import './WeekWeather.sass';
import OneDay from './OneDay';
import FirstDay from './FirstDay';
import SecondDay from './SecondDay';
import ThirdDay from './ThirdDay';
import FourthDay from './FourthDay';
import FifthDay from './FifthDay';
import SixthDay from './SixthDay';
import SeventhDay from './SeventhDay';

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
