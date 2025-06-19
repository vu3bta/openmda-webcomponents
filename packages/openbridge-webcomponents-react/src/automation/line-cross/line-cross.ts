
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcLineCross as ObcLineCrossElement} from '@vu3bta/openbridge-webcomponents/dist/automation/line-cross/line-cross.js';
 
 
 

 
 export const ObcLineCross = createComponent({
   react: React,
   tagName: 'obc-line-cross',
   elementClass: ObcLineCrossElement,
   events: {
     
   }
  });
 
 