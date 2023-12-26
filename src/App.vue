<script setup lang="ts">
import { ref, reactive } from "vue";
// import { DropButton ,DropCheckBox} from "../dist/drop.es";
import { DropButton, DropInput, DropSelect } from "./declare";

const info = reactive({
  name: "",
});
const data = ref([
  {
    value: "+971",
    label: "UAE",
  },
  {
    value: "+91",
    label: "India",
  },
  {
    value: "+1",
    label: "USA",
  },
  {
    value: "+44",
    label: "UK",
  },
  {
    value: "+92",
    label: "Pakistan",
  },
  {
    value: "+93",
    label: "Afghanistan",
  },
  {
    value: "+94",
    label: "Sri Lanka",
  },
  {
    value: "+95",
    label: "Myanmar",
  },
  {
    value: "+96",
    label: "China",
  },
  {
    value: "+97",
    label: "Iran",
  },
  {
    value: "+98",
    label: "Iraq",
  },
  {
    value: "+99",
    label: "Turkey",
  },
]);
const check = () => {
  console.log(info);
};
</script>

<template>
  <div class="flex items-center gap-3 p-4 w-96">
    <drop-input
      type="date"
      :data="data"
      v-model="info.name"
      placeholder="Enter your email"
      :required="true"
    />

    <DropButton @click="check">check</DropButton>
  </div>
</template>
