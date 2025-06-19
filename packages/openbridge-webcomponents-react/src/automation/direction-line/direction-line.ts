
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcDirectionLine as ObcDirectionLineElement} from '@vu3bta/openbridge-webcomponents/dist/automation/direction-line/direction-line.js';
 
 
 

 
 export const ObcDirectionLine = createComponent({
   react: React,
   tagName: 'obc-direction-line',
   elementClass: ObcDirectionLineElement,
   events: {
     
   }
  });
 
 