<script setup lang="ts">
import { ref } from "vue";
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton, DropAlert, DropInput } from "./declare";

import Icon from "./components/icon.vue";

const isAc = ref(false);
const check = () => {
  isAc.value = !isAc.value;
  console.log("Hello");
};
</script>

<template>
  <div class="flex items-center gap-3 p-4">
    <DropInput type="text" :placeholder="'name'" />
  </div>
</template>
