import React from 'react';
import './NameApp.sass';

import $ from 'jquery';

// $('[data-text]').on('keyup', function () {
//   $(this).attr('data-text', $(this).text());
// });

const NameApp = () => {
  return (
    <div className="detail__name-weather name-weather">
      <div className="name-weather__text-effect-box">
        {/* <!-- Select the text in the preview and type in your own --> */}
        <h2 className="name-weather__text-effect" data-text="Weather">
          Weather
        </h2>
        <div className="name-weather__gradient"></div>
        <div className="name-weather__spotlight"></div>
      </div>
    </div>
  );
};

export default NameApp;
