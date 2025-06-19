
 import * as React from 'react';
 import {createComponent, EventName} from '@lit/react';
 
 import {ObcInput as ObcInputElement} from '@vu3bta/openbridge-webcomponents/dist/components/input/input.js';
 
 
 

 
 export const ObcInput = createComponent({
   react: React,
   tagName: 'obc-input',
   elementClass: ObcInputElement,
   events: {
     
     onInput: 'input' as EventName<CustomEvent<unknown>>,
   }
  });
 
 