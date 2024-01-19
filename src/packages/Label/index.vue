<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    htmlFor: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { htmlFor } = props;
    return {
      htmlFor,
    };
  },
});
</script>
<template>
  <label :for="htmlFor" class="mb-1.5 mr-1.5 text-sm leading-5 text-left w-fit">
    <slot />
  </label>
</template>

<style scoped></style>
