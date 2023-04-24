<template>
  <!-- 此处使用 v-if 判断是哪个设置 -->
  <!-- 这个里面是基础设置 -->
  <!-- <div v-if="item.settingType === 1">  1: 为基础设置，2:为list设置，后面看样式在添加 -->
  <div v-for="item in activeinHouseListType1" :key="item.id">
    <p class="content__list" @click="putSetting(item.content,$event)">{{ item.content }}</p>
    <span>
      {{ item.description }}
    </span>
  </div>
  <div v-for="item in activeinHouseListType5" :key="item.id">
    <p>{{ item.category }}</p>
    <div class="type5__list" v-for="book in item.bookName" :key="book">
      <span class="content__list" @click="clickCategory(item.category,book,$event)">
        {{ book }}
      </span>
    </div>
  </div>
</template>

<script>
// 引入设置 
import { InitialData } from '@/api/InitialDataSetting';
// 如果要是选择了什么选项就更改这个里面的对应选项就行
export default {
  data() {
    return {
      // list数组就是二级设置中的选项
      settingList: null
    }
  },
  methods: {
    getWordList() {
      // 获取vuex中存储的这两个数据
      this.settingList = this.$store.state.settingLists
      console.log(this.settingList)
    },
    // 获取到分类和书名，传递给设置
    clickCategory(category,bookName,event) {
      // 更改选中的颜色
      this.editColor(event)
      const categoryAndBook = {
        category,
        bookName
      }
      this.$store.commit('setBookAndCategory', categoryAndBook)
      this.$router.push('/')
      // InitialData.defaultBookName = bookName
      // InitialData.defaultCategory = category
    },
    // 更新设置，有一个默认的设置，这个是更新了
    putSetting(item,event) {
      switch (item) {
        case '美国':
          // InitialData.wordType(item)
          this.$store.commit('setWordType', 2)
          break;
        case '英国':
          // InitialData.wordType(item)
          this.$store.commit('setWordType', 1)

        break;
        case '双语' || '英语' || '中文':
          InitialData.wordShowLanguage(item)
          break;
        case '黄色' || '蓝色': 
          InitialData.wordLine(item)
          break;
        case '侧滑样式' || '隐藏样式':
          InitialData.oneLanguage(item)
          break;
        case '白天' || '晚上' || '跟随系统' || '护眼纸张':
          InitialData.displaySetting(item)
          break;
      }
      this.editColor(event)
    },
    // 修改当前选中的颜色的方法
    editColor(event) {
      const divs = document.querySelectorAll('.content__list')
      divs.forEach(div => {
        if (div === event.currentTarget) {
          div.classList.add('content__click')

        } else {
          div.classList.remove('content__click')

        }
      })
    }
  },

  created() {
    this.getWordList()

    // console.log(this.settingList)
  },
  // 使用计算属性确认是渲染的该是哪个
  computed: {
    activeinHouseListType5: function () {
      return this.settingList.filter((item) => {
        return item.settingType === 5
      })
    },
    activeinHouseListType1: function () {
      return this.settingList.filter((item) => {
        return item.settingType === 1
      })
    }
  }

}
</script>

<style lang="scss" scoped>
div {
  p {
    margin: 1rem;
  }
}
span {
  color: #a4a4a4;
  padding: 1rem;
}
.type5__list {
  display: flex;
}
// 选中颜
.content__click {
  color: red;
}
</style>