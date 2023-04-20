import React from 'react';
import '../../App.sass';
import './TimesOfDay.sass';
import NightPart from './NightPart';
import MondayPart from './MondayPart';
import DayPart from './DayPart';
import EveningPart from './EveningPart';

const TimesOfDay = props => {
  return (
    <div className="weather__times-of-day times-of-day">
      <NightPart />
      <MondayPart />
      <DayPart />
      <EveningPart />
    </div>
  );
};

export default TimesOfDay;
