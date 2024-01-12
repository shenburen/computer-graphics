<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script setup>
import { ref, onMounted } from "vue";

const canvas = ref(null);

onMounted(() => {
  debugger;
  console.log(canvas.value);
});
</script>
