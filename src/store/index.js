import { createStore } from 'vuex'

export default createStore({
  state: {
    // 关于设置的二级设置和名字
    settingLists: JSON.parse(localStorage.getItem('settingLists')) || null,
    settingName: localStorage.getItem('settingName') || '',
    // 词库设置
    thesaurus: JSON.parse(localStorage.getItem('thesaurus')) || null,
    // 当前选择的分类和书名
    clickBookAndCategory: JSON.parse(localStorage.getItem('clickBookAndCategory')) || {category: '大学',bookName: '四级词汇'},
    // 选择完成的单词
    AllWords: JSON.parse(localStorage.getItem('AllWords')) || null,
    wordIndex: JSON.parse(localStorage.getItem('wordIndex')) || 0,
    // 一天多少个单词
    wordNumber: JSON.parse(localStorage.getItem('wordNumber')) || 30,
    // 单词发音设置
    wordType: localStorage.getItem('wordType') || 1

  },
  getters: {
  },
  mutations: {
    // 关于设置的二级设置和名字
    setSettingList(state, list) {
      state.settingLists = list
      localStorage.setItem('settingLists', JSON.stringify(list))
    },
    setSettingName(state, sName) {
      state.settingName = sName
      localStorage.setItem('settingName', sName)
    },
    // 设置词库内容
    setThesaurus(state, payload) {
      state.thesaurus = payload
      localStorage.setItem('thesaurus', JSON.stringify(payload))
    },
    // 设置选择的分类和书名
    setBookAndCategory(state, payload) {
      state.clickBookAndCategory = payload
      // 保存到本地存储,
      localStorage.setItem('clickBookAndCategory', JSON.stringify(payload))
    },
    // 设置存储所有的单词
    setAllWords(state, payload) {
      state.AllWords = payload
      localStorage.setItem('AllWords', JSON.stringify(payload))
    },
    // 设置当前的list下标
    setWordIndex(state, payload) {
      state.wordIndex = payload
      localStorage.setItem('wordIndex', JSON.stringify(payload))
    },
    setWordNumber(state, payload) {
      state.wordIndex = payload
      localStorage.setItem('wordNumber', JSON.stringify(payload))
    },
    setWordType(state, payload) {
      state.wordType = payload
      localStorage.setItem('wordType', payload)
    }

  },
  actions: {
  },
  modules: {
  }
})
