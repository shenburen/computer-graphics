<template>
  <div class="list">
    <el-scrollbar height="100%">
      <el-menu default-active="triangle" @select="MenuSelect">
        <el-menu-item index="triangle">
          <span>第一个</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
  <div class="box">
    <Container :module="module"></Container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Container from "./Container.vue";

const router = useRouter();
const module = ref("");

const MenuSelect = (index) => {
  module.value = index;
  router.push({
    path: "/" + index + "/webgl",
  });
};
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  left: 0;
  width: 220px;
  height: 100%;

  ul {
    border-right: none;
  }
}

.box {
  position: absolute;
  right: 0;
  width: calc(100% - 220px);
  height: 100%;
}
</style>
