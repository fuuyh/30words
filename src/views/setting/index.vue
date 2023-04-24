<template>
  <nav>
    <div class="setting__nav__left">
      <p>Settings</p>
    </div>
    <div class="setting__nav__right">
      <p @click="$router.push('./')">Close</p>
    </div>
  </nav>
  <main>
    <basicSettings :setting-Name="item.listName" :setting-list="item.list" v-for="item in baseSetting" :key="item.id" />
    <!-- <basicSettings :setting-Name="list2Name" :setting-list="list2" /> -->
    <!-- {{ baseSetting[2].list[1] }} -->
  </main>
</template>

<script setup>
import basicSettings from "./components/basicSettings.vue"
import { baseSetting } from '@/api/base'

</script>

<style lang="scss" scoped>
nav {
  height: 4rem;
  // display: flex;
  padding: 0 1rem;
  font-size: 1.6rem;
  line-height: 4rem;

  .setting__nav__left {
    display: inline-block;
  }

  .setting__nav__right {
    float: right;

    p {
      color: #2440b3;
    }
  }
}
main {
  min-height: 100vh;
}
</style>