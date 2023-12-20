<script lang="ts">
import { defineComponent, computed } from "vue";
import { Style, Rounded, Type } from "./style";
import {
  ButtonDisabled,
  ButtonSize,
  ButtonVoid,
  ButtonIcon,
  ButtonIconDirection,
  RoundedProps,
  ButtonType,
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
      type: Object as () => ButtonIcon<string | object>,
      default: null,
    },
    iconDirection: {
      type: String as () => ButtonIconDirection,
      default: "left",
    },
    rounded: {
      type: String as () => RoundedProps<
        "none" | "small" | "medium" | "large" | "full"
      >,
      default: "none",
    },
    type: {
      type: String as () => ButtonType<
        "primary" | "success" | "info" | "warning" | "danger" | "text"
      >,
      default: "primary",
    },
  },
  setup(props) {
    const { size, onClick, icon, iconDirection, rounded, type, disabled } =
      props;
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
    const changeTyp = computed(() => {
      if (type == "primary") {
        return Type.isPrimary.className;
      } else if (type == "success") {
        return Type.isSuccess.className;
      } else if (type == "info") {
        return Type.isInfo.className;
      } else if (type == "warning") {
        return Type.isWarning.className;
      } else if (type == "danger") {
        return Type.isDanger.className;
      } else if (type == "text") {
        return Type.isText.className;
      } else {
        return Type.isPrimary.className;
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
    const isDisabled = computed(() => {
      if (disabled) {
        return "opacity-50 cursor-not-allowed";
      } else {
        return "";
      }
    });
    const handleClick = () => {
      if (onClick) {
        // @ts-ignore
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
      changeTyp,
      isDisabled,
    };
  },
});
</script>

<template>
  <button
    :disabled="disabled"
    class="text-black hover:bg-opacity-80 hover:text-white"
    :class="[
      changeSize,
      changeIconDirection,
      changeRounded,
      changeTyp,
      isDisabled,
    ]"
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
