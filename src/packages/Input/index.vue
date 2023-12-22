<script lang="ts">
import { defineComponent } from "vue";
import {
  InputSize,
  InputTypes,
  InputDisabled,
  InputPlaceholder,
} from "../../utils/type";
import { Style } from "./style";
export default defineComponent({
  name: "DropInput",
  props: {
    type: {
      type: String as () => InputTypes<
        | "email"
        | "number"
        | "tel"
        | "password"
        | "text"
        | "url"
        | "date"
        | "datetime-local"
        | "search"
        | "file"
      >,
      default: "text",
    },
    size: {
      type: String as () => InputSize<"small" | "medium" | "large">,
      default: "medium",
    },
    disabled: {
      type: Boolean as () => InputDisabled<false>,
      default: false,
    },
    placeholder: {
      type: String as () => InputPlaceholder<"">,
      default: "",
    },
  },
  setup(props) {
    const { type, size, disabled, placeholder } = props;
    const isInputStyle = Style.isInput.box;

    return {
      type,
      isInputStyle,
      disabled,
    };
  },
});
</script>

<template>
  <div>
    <input
      :disabled="disabled"
      :placeholder="placeholder ? placeholder : type"
      class="focus-visible:outline-none"
      :type="type"
      :class="[isInputStyle]"
    />
  </div>
</template>

<style scoped></style>
