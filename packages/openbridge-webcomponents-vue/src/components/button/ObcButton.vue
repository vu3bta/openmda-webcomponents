
    <script lang="ts">
      export type {ButtonVariant} from '@vu3bta/openbridge-webcomponents/dist/components/button/button.js';
    </script>
    <script setup lang="ts">
      import { h, useSlots, reactive } from "vue";
      import { assignSlotNodes, Slots } from "@lit-labs/vue-utils/wrapper-utils.js";
      import '@vu3bta/openbridge-webcomponents/dist/components/button/button.js';
      import {ButtonVariant} from '@vu3bta/openbridge-webcomponents/dist/components/button/button.js';

      export interface Props {
     icon?: string;
     variant?: ButtonVariant;
     fullWidth?: boolean;
     checked?: boolean;
     disabled?: boolean;
     href?: string | undefined;
     target?: string | undefined
   }

      
  const vueProps = defineProps<Props>();

  const defaults = reactive({} as Props);
  const vDefaults = {
    created(el: any) {
      for (const p in vueProps) {
        defaults[p as keyof Props] = el[p];
      }
    }
  };

  let hasRendered = false;

      

      const slots = useSlots() as Slots;

      const render = () => {
        const eventProps = {
    
  };
        const props = eventProps as (typeof eventProps & Props);

        
      for (const p in vueProps) {
        const v = vueProps[p as keyof Props];
        if ((v !== undefined) || hasRendered) {
          (props[p as keyof Props] as unknown) = v ?? defaults[p as keyof Props];
        }
      }

      hasRendered = true;
    

        return h(
          'obc-button',
          props,
          assignSlotNodes(slots)
        );
      };
    </script>
    <template><render v-defaults /></template>