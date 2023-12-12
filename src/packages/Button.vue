<template>
  <button :disabled="disabled" :class="changeSize" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { ButtonDisabled, ButtonSize, ButtonVoid } from "../utils/type";

export default defineComponent({
  name: "DropButton",
  props: {
    disabled: {
      type: Boolean as () => ButtonDisabled<boolean>,
      default: false,
    },
    size: {
      type: String as () => ButtonSize<"small" | "medium" | "large">,
      default: "medium",
    },
    onClick: {
      type: Function as () => ButtonVoid<{ onClick?: () => void }>,
      default: () => {},
    },
  },
  setup(props) {
    const { size, onClick } = props;

    const changeSize = computed(() => {
      return `is-${size}`;
    });

    const handleClick = (event: MouseEvent) => {
      if (onClick) {
        onClick({ onClick: () => {} });
      }
    };

    return {
      changeSize,
      handleClick,
    };
  },
});
</script>

