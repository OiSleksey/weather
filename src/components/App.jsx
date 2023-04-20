// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsWeather from './weather/details/DetailsWeather';
import WeekWeather from './weather/week/WeekWeather';
import TimesOfDay from './weather/times-of-day/TimesOfDay';
import './App.sass';
// import '../sass/style';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы кликнули ${count} раз`;
  }, [count]);

  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="container__main">
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
              <h1>Вы кликнули {count} раз</h1>
              <button onClick={() => setCount(count + 1)}>
                Кликните здесь
              </button>
            </div>
            <div className="weather">
              <DetailsWeather test={count} />
              <WeekWeather />
              <TimesOfDay />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
