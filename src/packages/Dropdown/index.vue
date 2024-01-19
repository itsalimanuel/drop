<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dropdown",
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="relative">
    <div>
      <slot  />
    </div>
    
  </div>
</template>

<style scoped></style>
