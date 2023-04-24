<template>
  <div>
    <div class="header">{{ settingName }}</div>
  <ul class="content">
    <!-- 也可以取消默认显示的内容，直接是右箭头跳到设置 -->
    <li v-for="item in settingList" :key="item.id">
      <p>{{ item.settingName }}</p>
      <span class="iconfont" @click="nextSetting(item.settingName, item.settingContent)">&#xe61d;</span>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    settingList: {
      type: Array
    },
    settingName: {
      type: String
    }
  },
  methods: {
    nextSetting(Name, Content) {
      this.$router.push('./setting-detailed');
      // 再将数据保存到vuex
      this.$store.commit('setSettingList', Content)
      this.$store.commit('setSettingName', Name)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 0 1rem;
  color: #666;
}

.content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    padding: .5rem 1rem;
    display: flex;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;

    span {
      position: absolute;
      right: 0;
      // float: left;
      // display: block;
      transform: rotateZ(-90deg);
    }
  }
}</style>