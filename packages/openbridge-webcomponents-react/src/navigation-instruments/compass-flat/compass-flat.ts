
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcCompassFlat as ObcCompassFlatElement} from '@vu3bta/openbridge-webcomponents/dist/navigation-instruments/compass-flat/compass-flat.js';
 
 
 

 
 export const ObcCompassFlat = createComponent({
   react: React,
   tagName: 'obc-compass-flat',
   elementClass: ObcCompassFlatElement,
   events: {
     
   }
  });
 
 