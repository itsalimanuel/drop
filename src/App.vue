<script setup lang="ts">
import { ref, reactive } from "vue";
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton, DropInput, DropCard } from "./declare";

const info = reactive({
  card: "",
});

const check = () => {
  console.log(info.card);
};
</script>

<template>
  <div class="flex flex-col gap-1 p-4 w-[440px]">
    <drop-card v-model="info.card" />
    <DropButton @click="check">check</DropButton>
  </div>
</template>
