<template>
  <nav>
    <!-- 左侧logo -->
    <div class="logo">
      <span class="iconfont">&#xe698;</span>
    </div>
    <!-- 中间是“day1显示下拉菜单” -->
    <div class="nav__center">
      <div class="nav__center__back" @click="setIndexReduce">
        <span class="iconfont">&#xe61d;</span>
      </div>

      <div class="nav__center__days">
        <!-- 下拉菜单的文字 -->
        <!-- <p @click="dropdownItem" >day1</p> -->
        <p>list{{ currentIndex + 1 }}</p>
      </div>
      <div class="nav__center__next" >
        <span class="iconfont" @click="setIndexAdd">&#xe61d;</span>
      </div>
    </div>
    <!-- 右侧是设置 -->
    <div class="nav__right">
      <span class="iconfont" @click="$router.push('/setting')">&#xe78e;</span>
    </div>
    <!-- 下拉菜单功能 -->
  </nav>
</template>

<script>

export default {
  data() {
    return {
      isShowDropdown: false,
      currentIndex: ''
    }
  },
  methods: {
    // dropdownItem() {
    //   console.log('打开了下拉菜单')
    //   this.isShowDropdown = !this.isShowDropdown
    // },
    putIndex() {
      this.currentIndex = this.$store.state.wordIndex
    },
    // 点击右箭头增加，左箭头减少
    setIndexReduce() {
      const index = this.$store.state.wordIndex
      if (index > 0) {
        const newIndex = index - 1
        this.currentIndex = newIndex
        this.$store.commit('setWordIndex', newIndex)
      }
    },
    setIndexAdd() {
      const maxIndex = this.$store.state.AllWords.length
      const index = this.$store.state.wordIndex
      if (index >= maxIndex ) { this.$store.commit('setWordIndex', 0) }
      const newIndex = index + 1
      this.currentIndex = newIndex

      this.$store.commit('setWordIndex', newIndex)
    }
  },
  created() {
    this.putIndex()
  }
}
</script>

<style lang="scss" scoped>
nav {
  height: 4rem;
  background-color: #b0b3be;
  font-size: 2rem;
  line-height: 4rem;
  // display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 0;
  top: 0;

  .logo {
    font-size: 2rem;
    position: absolute;
    left: 1rem;
    top: 0;
  }

  // 中间内容设置
  .nav__center {
    display: flex;
    align-items: center;
    justify-content: center;
    // 左侧后退
    .nav__center__back {
      transform: rotateZ(90deg);
    }
    // 右侧前进
    .nav__center__next {
      transform: rotateZ(270deg);
    }
    .nav__center__days {
      display: flex;
      padding: 0 4rem;

      span {
        display: inline-block;
        transition: .8s;
      }

      span.nav__center__icon {
        transform: rotateZ(180deg);
        transition: .8s;
      }
    }

  }

  // 右侧设置按钮
  .nav__right {
    position: absolute;
    right: 1rem;
    top: 0;

    span {
      font-size: 2rem;
    }
  }
}
</style>