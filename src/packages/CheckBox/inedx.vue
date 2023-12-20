<script lang="ts">
import { defineComponent } from "vue";
import { Style } from "./style";

export default defineComponent({
  name: "DropCheckBox",
  emits: ["update:modelValue"],
  props: {
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
    return {
      value,
      handleChange,
      isContainer,
      isInput,
      isCheck,
      isIconAnim,
    };
  },
});
</script>

<template>
  <div :class="isCheck">
    <div :class="isContainer">
      <input
        type="checkbox"
        :class="isInput"
        :name="value"
        :id="value"
        @change="handleChange"
      />
      <div :class="isIconAnim">
        <svg
          class="checkbox-icon"
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
          />
        </svg>
      </div>
    </div>
    <label :for="value" >
      {{ label }}
    </label>
  </div>
</template>

<style scoped></style>
