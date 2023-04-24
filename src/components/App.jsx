// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Provider, connect } from 'react-redux';

import {
  Routes,
  Route,
  Navigate,
  Router,
  BrowserRouter,
} from 'react-router-dom';
import store from '../redux/store';
import DetailsWeather from './Weather/DetailsWeather/DetailsWeather';
import PartsOfWeek from './Weather/PartsOfWeek/PartsOfWeek';
import PartsOfDay from './Weather/PartsOfDay/PartsOfDay';
import HoursOfDay from './Weather/HoursOfDay/HoursOfDay';
import './App.sass';
// import '../sass/style';

function App({ stateToggle }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);
  const visibleTimesOfday = stateToggle ? <HoursOfDay /> : <PartsOfDay />;
  // const visibleTimesOfday = <HoursOfDay />;
  return (
    <div className="container">
      <div className="row">
        <div className="container__main">
          <div style={{ position: 'absolute', top: 0, left: 0 }}>
            <h1>Вы кликнули {count} раз</h1>
            <button onClick={() => setCount(count + 1)}>Кликните здесь</button>
          </div>
          <div className="weather">
            <DetailsWeather test={count} />
            <PartsOfWeek />
            {visibleTimesOfday}
            {/* <PartsOfDay /> */}
            {/* <HoursOfDay /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapState = state => {
  return {
    stateToggle: state.toggleTimes.stateToggle,
  };
};
export default connect(mapState)(App);

{
  /* <Routes>
                <Route path="/">
                  <PartsOfDay />
                </Route>
                <Route>
                  <HoursOfDay path="/hour" />
                </Route>
              </Routes> */
}
