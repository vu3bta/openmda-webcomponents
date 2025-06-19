
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObiUsb as ObiUsbElement} from '@vu3bta/openbridge-webcomponents/dist/icons/icon-usb.js';
 
 
 

 
 export const ObiUsb = createComponent({
   react: React,
   tagName: 'obi-usb',
   elementClass: ObiUsbElement,
   events: {
     
   }
  });
 
 