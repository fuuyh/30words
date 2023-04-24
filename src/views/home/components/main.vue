<template>
  <main>
    <!-- main里面书写所有的list单词内容 -->
    <ul>
      <li class="main__list" v-for="(item, index) of wordList" :key="item.wordId">
        <div class="main__list__num">{{ index+1 }}</div>
        <div class="main__list__words" @click="palyAudio(item.word)">{{ item.word }}</div>
        <div class="main__list__mean">{{ item.meanCn }}</div>
      </li>
    </ul>
  </main>
</template>

<script>

export default {
  data() {
    return {
      // 实例化一个 音频播放器对象
      audio: new Audio,
      wordList: [],
      index: ''
    }
  },
  methods: {
    async palyAudio(word) {
      const type = this.$store.state.wordType
      // 播放音频的事件
      this.audio.src = `https://dict.youdao.com/dictvoice?audio=${word}&type=${type}`
      this.audio.play()

    },
    getWords() {
      // 现在只执行一次，需要做的事： 在点击按钮的时候想办法再次更新
      // console.log(index)
      this.wordList = this.$store.state.AllWords[this.index].words
    }
  },
  watch: {
    '$store.state.wordIndex': function(newValue, oldValue) {
      this.index = this.$store.state.wordIndex
      this.getWords()
    }
  },
  created() {
    this.index = this.$store.state.wordIndex
    this.getWords()
  }

}
</script>

<style lang="scss" scoped>
main {
  margin-top: 1rem;

  ul {

    li {
      margin: 0 auto;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      top: 0;
      left: 0;
      height: 5rem;
      text-align: left;
      line-height: 5rem;
      &::after {
        content: '';
        width: 90%;
        height: .1rem;
        background: #e5e6eb;
        position: absolute;
        bottom: 0;

      }

      .main__list__num {
        position: absolute;
        left: .5rem;
        width: 1.5rem;
        text-align: center;
      }
    }
  }
}
</style>