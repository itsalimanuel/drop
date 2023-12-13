<script setup lang="ts">
// import { DropButton } from "../dist/drop.es";
import { DropButton } from "./declare";
import icon from "../public/vite.svg";
// import Icon from "./components/icon.vue";
</script>

<template>
  <DropButton size="small" :disabled="false" @click="console.log('clicked')"
    :icon="icon"
  >
    Hello Vue
  </DropButton>
</template>
