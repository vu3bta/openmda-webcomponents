
    <script setup lang="ts">
      import { h, useSlots } from "vue";
      import { assignSlotNodes, Slots } from "@lit-labs/vue-utils/wrapper-utils.js";
      import '@vu3bta/openbridge-webcomponents/dist/components/table/table.js';
      

      export interface Props {
     
   }

      

      

      const slots = useSlots() as Slots;

      const render = () => {
        const eventProps = {
    
  };
        const props = eventProps as (typeof eventProps & Props);

        

        return h(
          'obc-table-head-cell',
          props,
          assignSlotNodes(slots)
        );
      };
    </script>
    <template><render /></template>