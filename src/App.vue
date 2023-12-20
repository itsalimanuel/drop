<script setup lang="ts">
// import { DropButton } from "../dist/drop.es";
import { DropButton, DropLink } from "./declare";
import icon from "../public/vite.svg";
</script>

<template>
  <DropButton
    size="small"
    :disabled="false"
    :icon="icon"
    :icon-direction="'right'"
    rounded="large"
    type="primary"
    class="no-underline"
  >
    Hello Vue
  </DropButton>
  <DropLink
    to="https://google.com"
    type="danger"
    target="_blank"
    :icon="icon"
    :icon-direction="'right'"
  >
    Hello Vue
  </DropLink>
</template>
