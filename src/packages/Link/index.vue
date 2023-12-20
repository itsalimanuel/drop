<script lang="ts">
import { defineComponent, computed } from "vue";
import {
  TypeProps,
  LinkDisabled,
  UnderlineProps,
  LinkIcon,
  LinkIconDirection,
} from "../../utils/type";
import { Type, Underline } from "./style";

export default defineComponent({
  name: "DropLink",
  props: {
    type: {
      type: String as () => TypeProps<
        "primary" | "success" | "info" | "warning" | "danger" | "text"
      >,
      default: "primary",
    },
    disabled: {
      type: Boolean as () => LinkDisabled<boolean>,
      default: false,
    },
    underline: {
      type: Boolean as () => UnderlineProps<boolean>,
      default: false,
    },
    icon: {
      type: Object as () => LinkIcon<string | object>,
      default: null,
    },
    iconDirection: {
      type: String as () => LinkIconDirection<"left" | "right">,
      default: "left",
    },
    to: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { type, disabled, underline, icon, iconDirection, to } = props;
    const disabledClass = computed(() => {
      if (disabled) {
        return "opacity-50 cursor-not-allowed";
      } else {
        return "";
      }
    });
    const changeHref = computed(() => (disabled ? null : to ? to : "#"));

    const changeType = computed(() => {
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
    const changeUnderline = computed(() => {
      if (underline) {
        return Underline.isUnderline.className;
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
    return {
      changeHref,
      icon,
      disabledClass,
      changeType,
      changeUnderline,
      changeIconDirection,
    };
  },
});
</script>

<template>
  <a
    :href="changeHref"
    :class="[disabledClass, changeType, changeUnderline, changeIconDirection]"
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
  </a>
</template>
