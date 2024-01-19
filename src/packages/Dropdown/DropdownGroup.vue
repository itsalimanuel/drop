<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DropdownGroup",
  setup() {
    return {};
  },
});
</script>

<template>
  <div
    class="min-w-[150px] overflow-auto rounded-md border bg-white p-1 shadow dark:border-slate-700 dark:bg-slate-800 entering:animate-in entering:fade-in exiting:animate-in exiting:fade-in exiting:direction-reverse placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2"
  >
    <slot />
  </div>
</template>

<style scoped></style>
