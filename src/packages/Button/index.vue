<script lang="ts">
import { defineComponent, computed } from "vue";
import { Style, Rounded } from "./style";
import {
  ButtonDisabled,
  ButtonSize,
  ButtonVoid,
  ButtonIcon,
  ButtonIconDirection,
  RoundedProps,
} from "../../utils/type";

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
    icon: {
      type: Object as () => ButtonIcon<any>, // Adjust any to the appropriate type
      default: null,
    },
    iconDirection: {
      type: String as () => ButtonIconDirection,
      default: "left",
    },
    rounded: {
      type: String as () => RoundedProps | undefined,
      default: "none",
    },
  },
  setup(props) {
    const { size, onClick, icon, iconDirection, rounded } = props;
    const changeSize = computed(() => {
      if (size == "small") {
        return Style.isSmallButton.className;
      } else if (size == "medium") {
        return Style.isMediumButton.className;
      } else if (size == "large") {
        return Style.isLargeButton.className;
      } else {
        return Style.isMediumButton.className;
      }
    });
    const changeRounded = computed(() => {
      if (rounded == "none") {
        return Rounded.isRoundedNone.className;
      } else if (rounded == "small") {
        return Rounded.isRoundedSmall.className;
      } else if (rounded == "medium") {
        return Rounded.isRoundedMedium.className;
      } else if (rounded == "large") {
        return Rounded.isRoundedLarge.className;
      } else if (rounded == "full") {
        return Rounded.isRoundedFull.className;
      } else {
        return Rounded.isRoundedNone.className;
      }
    });
    const changeIconDirection = computed(() => {
      if (iconDirection == "left") {
        return "flex gap-2 items-center";
      } else if (iconDirection == "right") {
        return "flex flex-row-reverse gap-2 items-center";
      } else {
        return "flex gap-2 items-center";
      }
    });
    const handleClick = (event: MouseEvent) => {
      if (onClick) {
        onClick({ onClick: () => {} });
      }
    };

    return {
      changeSize,
      handleClick,
      icon,
      iconDirection,
      changeIconDirection,
      changeRounded,
    };
  },
});
</script>

<template>
  <button
    :disabled="disabled"
    class="text-black hover:bg-opacity-80 hover:text-white"
    :class="[changeSize, changeIconDirection, changeRounded]"
    @click="handleClick"
  >
    <span v-if="icon && typeof icon === 'string'">
      <img :src="icon" alt="icon" class="w-6 h-6" />
    </span>

    <component
      v-else-if="icon && typeof icon === 'object'"
      :is="icon"
      class="w-6 h-6"
    />

    <slot />
  </button>
</template>
