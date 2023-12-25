<script setup lang="ts">
import { ref, reactive } from "vue";
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton, DropAlert, DropInput } from "./declare";



const info = reactive({
  name: "",
});
const check = () => {
  console.log(info);
};
</script>

<template>
  <div class="flex items-center gap-3 p-4 w-96">
    <form action="">
      <DropInput
        type="file"
        v-model="info.name"
        placeholder="Enter your email"
        :required="true"
      />
      <DropButton @click="check">check</DropButton>
    </form>
  </div>
</template>
