
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObcTooltip as ObcTooltipElement} from '@vu3bta/openbridge-webcomponents/dist/components/tooltip/tooltip.js';
 
 
 

 
 export const ObcTooltip = createComponent({
   react: React,
   tagName: 'obc-tooltip',
   elementClass: ObcTooltipElement,
   events: {
     
   }
  });
 
 