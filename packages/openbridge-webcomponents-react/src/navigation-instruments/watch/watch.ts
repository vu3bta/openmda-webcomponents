
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcWatch as ObcWatchElement} from '@vu3bta/openbridge-webcomponents/dist/navigation-instruments/watch/watch.js';
 
 
 

 
 export const ObcWatch = createComponent({
   react: React,
   tagName: 'obc-watch',
   elementClass: ObcWatchElement,
   events: {
     
   }
  });
 
 