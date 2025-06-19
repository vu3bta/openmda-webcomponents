
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcPoiLine as ObcPoiLineElement} from '@vu3bta/openbridge-webcomponents/dist/navigation-instruments/poi-line/poi-line.js';
 
 
 

 
 export const ObcPoiLine = createComponent({
   react: React,
   tagName: 'obc-poi-line',
   elementClass: ObcPoiLineElement,
   events: {
     
   }
  });
 
 