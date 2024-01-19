<script setup lang="ts">
import { reactive } from "vue";
import {
  Dropdown,
  DropdownItem,
  DropdownGroup,
  DropdownButton,
} from "./declare";
const info = reactive({
  card: "",
});
</script>
<template>
  <div class="flex flex-col w-[440px]">
    <Dropdown>
      <DropdownButton> Dropdown </DropdownButton>
      <DropdownGroup>
      <DropdownItem>
        Item
      </DropdownItem>  
      <DropdownItem>
        Item
      </DropdownItem>
      <DropdownItem>
        Item
      </DropdownItem>
      </DropdownGroup>
    </Dropdown>
  </div>
</template>
