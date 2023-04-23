import React, { useEffect } from 'react';
import '../../App.sass';
import './PartsOfDay.sass';
import { connect } from 'react-redux';
import NightPart from './NightPart/NightPart';
import MorningPart from './MorningPart/MorningPart';
import DayPart from './DayPart/DayPart';
import EveningPart from './EveningPart/EveningPart';
import { getStartPartsDay } from '../../../redux/middleware/partsDayThunk';

const PartsOfDay = props => {
  useEffect(() => {
    props.getStartPartDays();
  });
  return (
    <div className="weather__parts-of-day parts-of-day">
      <NightPart />
      <MorningPart />
      <DayPart />
      <EveningPart />
    </div>
  );
};

const mapDispatch = {
  getStartPartDays: getStartPartsDay,
};

export default connect(null, mapDispatch)(PartsOfDay);
