<script setup lang="ts">
import DropButton from "../dist/button.es";
</script>

<template>
  <DropButton :disabled="false" size="medium" @click="console.log('works')">
    Hello Vue
  </DropButton>
</template>
