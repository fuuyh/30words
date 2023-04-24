<template>
  <!-- 通过传值接收单个设置模式下的具体设置 -->
  <nav>
    <div class="setting__nav__left">
      <span class="iconfont" @click="$router.push('/setting')">&#xe61d;</span>
    </div>
    <div class="setting__nav__right">
      <p>{{ settingName }}</p>
    </div>
  </nav>
  <!-- 具体设置 -->
  <main>
    <div class="setting__main__item">
      <settingItemVue />
    </div>
  </main>
</template>

<script>
import settingItemVue from "./components/settingItem.vue";
export default {
  data() {
    return {
      settingName: ''
    }
  },
  components: {
    settingItemVue
  },
  methods: {
    getSettingName() {
      this.settingName = this.$store.state.settingName
    }
  },
  created() {
    this.getSettingName()
  }
}
</script>
<style lang="scss" scoped>
nav {
  height: 4rem;
  padding: 0 1rem;
  font-size: 1.6rem;
  line-height: 4rem;

  .setting__nav__left {
    // display: inline-block;
    float: left;
    color: #2440b3;

    span {
      position: absolute;
      left: 1rem;
      font-size: 2.4rem;
      transform: rotateZ(90deg);
    }
  }
}

main {
  .setting__main__item {
    text-align: left;
    padding: 1rem 2rem;
  }
}</style>
