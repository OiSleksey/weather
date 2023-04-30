import React from 'react';
import './NameApp.sass';

import $ from 'jquery';

// $('[data-text]').on('keyup', function () {
//   $(this).attr('data-text', $(this).text());
// });

const NameApp = () => {
  return (
    <div className="detail__name-weather name-weather">
      <div class="name-weather__text-effect-box">
        {/* <!-- Select the text in the preview and type in your own --> */}
        <h2
          class="name-weather__text-effect"
          data-text="Weather"
          contenteditable
        >
          Weather
        </h2>
        <div class="name-weather__gradient"></div>
        <div class="name-weather__spotlight"></div>
      </div>
    </div>
  );
};

export default NameApp;
