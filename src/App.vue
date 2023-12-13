<script setup lang="ts">
import DropButton from "drop-components-ts";
</script>

<template>
  <DropButton :disabled="false" size="medium" @click="console.log('works')">
    Hello Vue
  </DropButton>
</template>
