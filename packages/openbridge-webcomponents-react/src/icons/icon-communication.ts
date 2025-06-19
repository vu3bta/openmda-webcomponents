
 import * as React from 'react';
 import {createComponent} from '@lit/react';
 
 import {ObiCommunication as ObiCommunicationElement} from '@vu3bta/openbridge-webcomponents/dist/icons/icon-communication.js';
 
 
 

 
 export const ObiCommunication = createComponent({
   react: React,
   tagName: 'obi-communication',
   elementClass: ObiCommunicationElement,
   events: {
     
   }
  });
 
 