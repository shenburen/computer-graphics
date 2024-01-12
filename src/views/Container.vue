<template>
  <div class="head">
    <el-button type="primary">WebGL</el-button>
    <el-button type="primary" style="margin-right: 20px">WebGPU</el-button>
  </div>
  <div class="body"></div>
</template>

<script setup>
import { watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

watch;
</script>

<style lang="scss" scoped>
.head {
  height: 50px;
  text-align: right;
  line-height: 50px;
}

.body {
  height: calc(100% - 50px);
}
</style>
