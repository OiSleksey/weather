// import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import Weather from './Weather/Weather';
import './App.sass';
import CloudsBackground from './Weather/UI/CloudsBackground/CloudsBackground';
// import '../sass/style';
import ToastMessage from './Weather/UI/ToastMessage/ToastMessage';

const App = () => {
  const isRefToast = useRef(false);
  return (
    <div className="container">
      <CloudsBackground />
      <div className="container__main">
        <Weather />
        <ToastMessage isRefToast={isRefToast} />
      </div>
    </div>
  );
};

export default App;
