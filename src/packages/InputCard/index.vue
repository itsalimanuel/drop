<script lang="ts">
import { defineComponent, ref } from "vue";
import { InputSize, InputTypes, InputDisabled } from "../../utils/type";

export default defineComponent({
  name: "InputCard",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    size: {
      type: String as () => InputSize<"small" | "medium" | "default" | "large">,
      default: "default",
    },
    desabled: {
      type: Boolean as () => InputDisabled<boolean>,
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
  setup(props) {
    const isVisa = ref<boolean>(false);
    const isMasterCard = ref<boolean>(false);
    const modelValue = ref<any>(props.modelValue);
    const checkCardType = (event: any) => {
      let cardNumber = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
      cardNumber = cardNumber.slice(0, 16);
      if (/^4/.test(cardNumber)) {
        isVisa.value = true;
        isMasterCard.value = false;
      } else if (/^5/.test(cardNumber)) {
        isVisa.value = false;
        isMasterCard.value = true;
      } else {
        isVisa.value = false;
        isMasterCard.value = false;
      }
      modelValue.value = formatCardNumber(cardNumber);
    };
    const formatCardNumber = (input: string) => {
      const formatted = input.replace(/\D/g, ""); // Remove non-numeric characters
      const parts = [];
      for (let i = 0; i < formatted.length; i += 4) {
        parts.push(formatted.substr(i, 4));
      }
      return parts.join("-");
    };
    const ischange = (event: any) => {
      checkCardType(event);
    };
    return { isVisa, isMasterCard, ischange, modelValue };
  },
});
</script>

<template>
  <div class="flex items-center gap-2 bg-white pl-2">
    <div
      v-if="modelValue"
      class="w-[34px] h-[24px] border border-gray-400 rounded-sm flex items-center justify-center"
    >
      <svg
        v-if="isMasterCard"
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="14"
        viewBox="0 0 23 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.179 11.8294C9.99493 12.8275 8.45902 13.43 6.78069 13.43C3.03582 13.43 0 10.4303 0 6.72997C0 3.02966 3.03582 0.0299683 6.78069 0.0299683C8.45902 0.0299683 9.99493 0.632466 11.179 1.63051C12.363 0.632466 13.8989 0.0299683 15.5773 0.0299683C19.3221 0.0299683 22.358 3.02966 22.358 6.72997C22.358 10.4303 19.3221 13.43 15.5773 13.43C13.8989 13.43 12.363 12.8275 11.179 11.8294Z"
          fill="#ED0006"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1792 11.8294C12.6371 10.6005 13.5616 8.77192 13.5616 6.72997C13.5616 4.68801 12.6371 2.85941 11.1792 1.63051C12.3632 0.632465 13.8992 0.0299683 15.5775 0.0299683C19.3224 0.0299683 22.3582 3.02966 22.3582 6.72997C22.3582 10.4303 19.3224 13.43 15.5775 13.43C13.8992 13.43 12.3632 12.8275 11.1792 11.8294Z"
          fill="#F9A000"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1788 11.8294C12.6367 10.6005 13.5611 8.77193 13.5611 6.72999C13.5611 4.68805 12.6367 2.85946 11.1788 1.63055C9.72084 2.85946 8.79639 4.68805 8.79639 6.72999C8.79639 8.77193 9.72084 10.6005 11.1788 11.8294Z"
          fill="#FF5E00"
        />
      </svg>
      <span v-if="isVisa">
        <svg
          enable-background="new 0 0 780 500"
          width="25"
          viewBox="0 0 780 500"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m293.2 348.73 33.359-195.76h53.358l-33.384 195.76zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-.271 30.088 3.534 39.936 7.5l4.781 2.259zm137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555.084 68.336.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-.314.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293zm-363.3-126.41-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-.063 84.004-195.39-56.524-.001"
            fill="#0e4595"
          />
          <path
            d="m146.92 152.96h-86.041l-.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
            fill="#f2ae14"
          />
        </svg>
      </span>
    </div>
    <input
      type="text"
      @input="ischange"
      placeholder="Card Number"
      v-model="modelValue"
      class="w-full h-full p-2 bg-transparent focus-visible:outline-none text-black"
    />
  </div>
</template>
