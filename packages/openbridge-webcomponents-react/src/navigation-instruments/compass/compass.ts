
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcCompass as ObcCompassElement} from '@vu3bta/openbridge-webcomponents/dist/navigation-instruments/compass/compass.js';
 
 
 

 
 export const ObcCompass = createComponent({
   react: React,
   tagName: 'obc-compass',
   elementClass: ObcCompassElement,
   events: {
     
   }
  });
 
 