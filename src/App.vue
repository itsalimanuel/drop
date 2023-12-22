<script setup lang="ts">
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton } from "./declare";

import Icon from "./components/icon.vue";

const check = () => {};
</script>

<template>
  <div class=" flex items-center gap-3 p-4">
    <DropButton
    type="outline"
      @click="check"
      rounded="medium"
      :isIcon="true"
      :icon="Icon"
      size="small"
      :hover="true"
    >
    Login wiht Apple
  </DropButton>
  </div>
</template>
