<script lang="ts">
import { defineComponent, computed } from "vue";
import { Style } from "./style";

export default defineComponent({
  name: "DropAlert",
  props: {
    title: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
    placement: {
      type: String,
      default: "top-right",
    },
  },
  setup(props) {
    const { title, message, placement } = props;

    const isChangePlacement = computed(() => {
      if (placement === "top-left") {
        return Style.isPlacement.topLeft;
      } else if (placement === "top-right") {
        return Style.isPlacement.topRight;
      } else if (placement === "bottom-left") {
        return Style.isPlacement.bottomLeft;
      } else if (placement === "bottom-right") {
        return Style.isPlacement.bottomRight;
      }
    });

    const setPosition = Style.isBox.className;
    const setTitle = Style.isTitle.className;
    const setMessage = Style.isMessage.className;
    const isDefaultWidth = Style.isWidth.className;
    return {
      title,
      message,
      isChangePlacement,
      setPosition,
      setTitle,
      setMessage,
      isDefaultWidth,
    };
  },
});
</script>

<template>
  <Teleport to="body">
    <div :class="[isChangePlacement, setPosition, isDefaultWidth]">
      <h3 :class="setTitle">{{ title }}</h3>
      <p :class="setMessage">{{ message }}</p>
    </div>
  </Teleport>
</template>

<style scoped></style>
