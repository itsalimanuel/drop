<script lang="ts">
import { computed, defineComponent } from "vue";
import { Style } from "./style";
import { checkBoxDisabled } from "../../utils/type";

export default defineComponent({
  name: "DropCheckBox",
  emits: ["update:modelValue"],
  props: {
    disabled: {
      type: Boolean as () => checkBoxDisabled<boolean>,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const { value } = props;

    const handleChange = (event: any) => {
      emit("update:modelValue", event.target.checked);
    };
    const isContainer = Style.isContainer.className;
    const isInput = Style.isInput.className;
    const isCheck = Style.isCheckBox;
    const isIconAnim = Style.isIcon.className;
    const isDisabledInput = computed(() => {
      if (props.disabled) {
        return Style.disabled;
      }
    });
    return {
      value,
      handleChange,
      isContainer,
      isInput,
      isCheck,
      isIconAnim,
      isDisabledInput,
    };
  },
});
</script>

<template>
  <div :class="[isCheck, isDisabledInput]">
    <div :class="[isContainer, isDisabledInput]">
      <input
        type="checkbox"
        :class="isInput"
        :name="value"
        :disabled="disabled"
        :id="value"
        @change="handleChange"
      />
    </div>
    <label :for="value" :class="[isDisabledInput]">
      {{ label }}
    </label>
  </div>
</template>

<style scoped></style>
