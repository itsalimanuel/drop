<script setup lang="ts">
// import { DropButton } from "../dist/drop.es";
import { DropButton, DropLink } from "./declare";
import icon from "../public/vite.svg";
</script>

<template>
  <!-- <DropButton
    size="small"
    :disabled="false"
    :icon="icon"
    :icon-direction="'right'"
    rounded="large"
    type="primary"
    class="no-underline"
  >
    Hello Vue
  </DropButton> -->
  <DropLink
    to="www.google.com"
    type="danger"
    :disabled="true"
    :icon="icon"
    :icon-direction="'right'"
  >
    google
  </DropLink>
</template>
