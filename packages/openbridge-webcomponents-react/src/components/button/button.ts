
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcButton as ObcButtonElement} from '@vu3bta/openbridge-webcomponents/dist/components/button/button.js';
 
 
 

 
 export const ObcButton = createComponent({
   react: React,
   tagName: 'obc-button',
   elementClass: ObcButtonElement,
   events: {
     
   }
  });
 
 