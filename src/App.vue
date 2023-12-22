<script setup lang="ts">
import { ref } from "vue";
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton, DropAlert } from "./declare";

import Icon from "./components/icon.vue";

const isAc = ref(false);
const check = () => {
  isAc.value = !isAc.value;
  console.log("Hello");
};
</script>

<template>
  <div class="flex items-center gap-3 p-4">
    <DropAlert
      title="Hello"
      message="Hello Message"
      placement="bottom-left"
      :active="isAc"
    />
    <DropButton
      type="outline"
      @click="check"
      rounded="medium"
      :icon="Icon"
      size="small"
      :hover="true"
    >
      active
    </DropButton>
  </div>
</template>
