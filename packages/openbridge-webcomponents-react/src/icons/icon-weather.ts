
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObiWeather as ObiWeatherElement} from '@vu3bta/openbridge-webcomponents/dist/icons/icon-weather.js';
 
 
 

 
 export const ObiWeather = createComponent({
   react: React,
   tagName: 'obi-weather',
   elementClass: ObiWeatherElement,
   events: {
     
   }
  });
 
 