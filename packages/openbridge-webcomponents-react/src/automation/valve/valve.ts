
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcValve as ObcValveElement} from '@vu3bta/openbridge-webcomponents/dist/automation/valve/valve.js';
 
 
 

 
 export const ObcValve = createComponent({
   react: React,
   tagName: 'obc-valve',
   elementClass: ObcValveElement,
   events: {
     
   }
  });
 
 