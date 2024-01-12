<template>
  <div class="head">
    <el-button type="primary" @click="SwitchLanguage('webgl')">WebGL</el-button>
    <el-button
      type="primary"
      @click="SwitchLanguage('webgpu')"
      style="margin-right: 20px"
    >
      WebGPU
    </el-button>
  </div>
  <div class="body">
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  module: "",
});

const SwitchLanguage = (val) => {
  router.push({
    path: "/" + props.module + "/" + val,
  });
};
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
