<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DropSelect",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { modelValue, data } = props;
    const isOpen = ref<Boolean>(false);

    return {
      isOpen,
      data,
    };
  },
});
</script>

<template>
  <div class="relative">
    <div class="flex items-center gap-2">
      <template v-if="!data"> Select </template>
      {{ data }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
