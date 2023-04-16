// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsWeather from './weather/DetailsWeather';
let count = 0;
function App() {
  // const [state, setState] = useState(0);
  // useEffect(() => {
  //   console.log('Gog');
  //   setInterval(() => {
  //     setState(state + 1);
  //     console.log(state);
  //   }, 4000);
  // }, []);

  return (
    <Provider store={store}>
      <DetailsWeather />
    </Provider>
  );
}

export default App;

{
  /* <Provider store={store}>

</Provider> */
}
