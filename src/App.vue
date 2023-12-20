<script setup lang="ts">
// import { DropButton } from "../dist/drop.es";
import { DropButton, DropLink, DropCheckBox } from "./declare";
import icon from "../public/vite.svg";
import { ref } from "vue";

const check1 = ref(false);
const check2 = ref(false);

const check = () => {
  console.log(check1.value);
  console.log(check2.value);
};
</script>

<template>
 
  <DropCheckBox v-model="check1" value="name" label="Check" />
  <DropCheckBox v-model="check2" value="email" label="Check2" />
  <button @click="check">check</button>
</template>
