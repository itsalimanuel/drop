<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { InputSize, InputTypes, InputDisabled } from "../../utils/type";
import { Style } from "./style";
import { validateEmail } from "../../utils/validations";

type Data = {
  value: string | number;
  label: string;
};
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
    data: {
      type: Array as () => Data[],
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const { type, size, disabled, errorMessage, mask, data } = props;
    const isInputStyle = Style.isInput.box;
    const modelValue = ref<any>(props.modelValue);
    const isOpen = ref<Boolean>(false);
    const isSelected = ref<String | Number>("");

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
        modelValue.value = isSelected.value +  formatPhoneNumber(event.target.value);
        // modelValue.value = !isNaN(event.target.value) ? "" : event.target.valu;
      } else if (type === "email") {
        const email = validateEmail(event.target.value);
        if (email) {
          modelValue.value = event.target.value;
          isErrorRef.value.error = false;
        } else {
          isErrorRef.value.error = true;
          return;
        }
      } else {
        modelValue.value = event.target.value;
      }
      emit("update:modelValue", modelValue.value);
    };

    const formatPhoneNumber = (input: string) => {
      const cleaned = input.replace(/\D/g, "");
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
    const selectData = (value: string | number) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].value === value) {
          isSelected.value = data[i].label;
          console.log(data[i].label);
          console.log(isSelected.value);
        }
      }
      isOpen.value = false;
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

      data,
      isOpen,
      isSelected,
      selectData,
    };
  },
});
</script>

<template>
  <div :class="setDefailtBody">
    <!-- <div v-if="mask">
      <div class="relative">
        <div
          class="flex items-center gap-2 p-2 text-sm"
          @click="isOpen = !isOpen"
        >
          <template v-if="!isSelected">
            Select
          </template>
          <template v-else>
            {{ isSelected }}
          </template>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            :class="isOpen ? 'transform rotate-180' : ''"
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
        <div
          v-if="isOpen"
          class="w-[200px] p-0 z-50 rounded-md border bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute bg-white top-full translate-y-3"
        >
          <div
            class="flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground"
          >
            <div
              v-for="item in data"
              :key="item.value"
              @click="selectData(item.value)"
              class="relative flex select-none items-center rounded-sm px-2 py-1.5 outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-sm hover:bg-gray-200 cursor-pointer"
            >
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div> -->
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
  </div>
  <span v-if="isErrorRef.error" :class="setDefaultError">
    {{ errorMessage ? errorMessage : "Please enter a valid email" }}
  </span>
</template>
