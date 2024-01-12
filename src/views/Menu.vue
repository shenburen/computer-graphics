<template>
  <div class="list">
    <el-scrollbar height="100%">
      <el-menu default-active="1">
        <el-menu-item index="1">
          <span>第一个</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
  <div class="box"></div>
</template>

<style lang="scss" scoped>
.list {
  position: absolute;
  left: 0;
  width: 220px;
  height: 100%;
}

.box {
  position: absolute;
  right: 0;
  width: calc(100% - 220px);
  height: 100%;
}
</style>
