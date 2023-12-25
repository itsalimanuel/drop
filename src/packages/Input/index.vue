<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { InputSize, InputTypes, InputDisabled } from "../../utils/type";
import { Style } from "./style";
import { validateEmail } from "../../utils/validations";

export default defineComponent({
  name: "DropInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
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
    mask: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const { type, size, disabled, errorMessage } = props;
    const isInputStyle = Style.isInput.box;
    const modelValue = ref<any>(props.modelValue);

    type isError = {
      error: boolean;
    };
    const isErrorRef = ref<isError>({
      error: false,
    });
    const setInputSize = computed(() => {
      if (size == "small") {
        return Style.isInputSize.small;
      } else if (size == "medium") {
        return Style.isInputSize.medium;
      } else if (size == "large") {
        return Style.isInputSize.large;
      } else {
        return Style.isInputSize.default;
      }
    });

    const setDefault = Style.isDefault.set;
    const setDefailtBody = Style.body;
    const setDefaultError = Style.isError.set;

    const handleChange = (event: any) => {
      if (type === "number") {
        modelValue.value = parseFloat(event.target.value).toFixed(2);
      } else if (type === "tel" && props.mask) {
        modelValue.value = formatPhoneNumber(event.target.value);
      } else if (type === "email") {
        const email = validateEmail(event.target.value);
        if (email) {
          modelValue.value = event.target.value;
          isErrorRef.value.error = false;
        } else {
          isErrorRef.value.error = true;
        }
      } else {
        modelValue.value = event.target.value;
      }
      emit("update:modelValue", modelValue.value);
    };

    const formatPhoneNumber = (input: string) => {
      // Remove non-numeric characters
      const cleaned = input.replace(/\D/g, "");

      // Basic phone number formatting logic
      if (cleaned.length <= 3) {
        return cleaned;
      } else if (cleaned.length <= 7) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
      } else {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
          6,
          10
        )}`;
      }
    };
    return {
      type,
      setInputSize,
      isInputStyle,
      disabled,
      handleChange,
      modelValue,
      setDefault,
      isErrorRef,
      setDefailtBody,
      setDefaultError,
      errorMessage,
    };
  },
});
</script>

<template>
  <div :class="setDefailtBody">
    <input
      v-model="modelValue"
      :disabled="disabled"
      :placeholder="placeholder ? placeholder : type"
      class="focus-visible:outline-none"
      :type="type"
      :class="[isInputStyle, setInputSize, setDefault]"
      :required="required"
      @input="handleChange"
    />
    <span v-if="isErrorRef.error" :class="setDefaultError">
      {{ errorMessage ? errorMessage : "Please enter a valid email" }}
    </span>
  </div>
</template>

<style scoped></style>
../../utils/validations
