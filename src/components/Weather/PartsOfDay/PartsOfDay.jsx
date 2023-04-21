import React, { useEffect } from 'react';
import '../../App.sass';
import './PartsOfDay.sass';
import { connect } from 'react-redux';
import NightPart from './NightPart/NightPart';
import MorningPart from './MorningPart/MorningPart';
import DayPart from './DayPart/DayPart';
import EveningPart from './EveningPart/EveningPart';
import { getStartPartDay } from '../../../redux/actions/part-weather.actions';

const PartsOfDay = props => {
  useEffect(() => {
    props.getStartPartDays();
  });
  return (
    <div className="weather__times-of-day times-of-day">
      <NightPart />
      <MorningPart />
      <DayPart />
      <EveningPart />
    </div>
  );
};

const mapDispatch = {
  getStartPartDays: getStartPartDay,
};

export default connect(null, mapDispatch)(PartsOfDay);
