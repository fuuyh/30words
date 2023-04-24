<template>
  <div class="warpper">
    <headerNav/>
    <mainContent />
  </div>
</template>

<script setup>
// 引入header组件
import headerNav from './components/header.vue'
import mainContent from './components/main.vue'
</script>

<style lang="scss" scoped>
  .warpper {
    min-height: 100vh;
    background-color: #fcfcfc;
  }
</style>