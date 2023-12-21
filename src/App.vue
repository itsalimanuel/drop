<script setup lang="ts">
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import {
  DropButton,
  DropLink,
  DropCheckBox,
  DropGroupCheckBox,
} from "./declare";
import icon from "../public/vite.svg";
import { ref } from "vue";
import Icon from "./components/icon.vue";

const check = () => {};
</script>

<template>
  <div class="bg-white flex items-center gap-3 p-4">
    <DropButton
      @click="check"
      rounded="medium"
      :icon="Icon"
      iconDirection="right"
      size="small"
      :hover="true"
      >Sign in with Apple</DropButton
    >
  </div>
</template>
