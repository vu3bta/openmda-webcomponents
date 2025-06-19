
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcAzimuthThruster as ObcAzimuthThrusterElement} from '@vu3bta/openbridge-webcomponents/dist/navigation-instruments/azimuth-thruster/azimuth-thruster.js';
 
 
 

 
 export const ObcAzimuthThruster = createComponent({
   react: React,
   tagName: 'obc-azimuth-thruster',
   elementClass: ObcAzimuthThrusterElement,
   events: {
     
   }
  });
 
 