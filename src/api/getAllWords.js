// 用于获取文章内容
// 引入 axios
import axios from 'axios'
// 引入设置内容 ,把所有处理好的数据存储到里面
import { InitialData } from './InitialDataSetting'
import store from '@/store';
// 引入list默认配置
import { wordSetting } from '@/api/base'

const defaultConfig = {
  // 初始化的数据组
  // 请求下来的所有的数据
  data: []
}

let request = window.indexedDB.open('myAllWordsData', 1);

// 获取所有的内容
axios.get('/data.json').then(res => {
  // 把所有的数据都保存下来
  defaultConfig.data = res.data
})

// 添加请求
function addData() {
  // 创建对象存储空间
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    let objectStore = db.createObjectStore("AllWords", { autoIncrement: true });
    //  创建一个索引 索引名称、索引所在的属性、配置对象
    objectStore.createIndex("category", "category", { unique: false });
  };
  // 把所有数据保存在indexeddb中 
  request.onsuccess = function (event) {
    let db = event.target.result;

    let transaction = db.transaction(["AllWords"], "readwrite");
    let objectStore = transaction.objectStore("AllWords");

    let addRequest = objectStore.add(defaultConfig.data);

    addRequest.onsuccess = function (event) {
      // 数据添加成功
      console.log('添加成功')
    };

    addRequest.onerror = function (event) {
      // 错误处理
    };
    db.close();
  }
}
addData()
// 获取数据请求
function getData() {
  request.onsuccess = function (event) {
    let db = event.target.result;

    let transaction = db.transaction(["AllWords"], "readwrite");
    let objectStore = transaction.objectStore("AllWords");

    const getReq = objectStore.get(1);
    // get请求，获取所有的数据
    getReq.onsuccess = (event) => {
      // 或者也可以把这些放到一个对象里面一起提交
      // 设置所选择的分类和书名，并提交到vuex
      // const categoryAndBook = {
      //   category: InitialData.defaultCategory(),
      //   bookName: InitialData.defaultBookName()
      // }
      // store.commit('setBookAndCategory', categoryAndBook)
      // ----------------------------------
      // 设置一天多少个单词保存到vuex
      const wordNumbers = InitialData.dayWord
      store.commit('setWordNumber', wordNumbers)
      // ----------------------------------
      // 设置颜色，还有其他
      // 获取所有的内容
      const result = event.target.result;
      // 获取所有的分类的方法
      // const a = InitialData.allCategory(result)
      // 获取每一个分类下的所有书名，用于选择词库
      const thesaurus = InitialData.allCategoryAndBookName(result)
      store.commit('setThesaurus', thesaurus)

      console.log(thesaurus)
      // 默认展示的分类和书名，调用方法保存到vu
      const currentCategory = store.state.clickBookAndCategory.category
      const currentBookName = store.state.clickBookAndCategory.bookName
      const datWordNum = store.state.wordNumber
      // 这个是传递进来的数据，然后筛选出当前所需要的词库的所有单词，并平均分配list，每一个list有30个单词
      const getAllword = InitialData.allWords(result,currentCategory,currentBookName,datWordNum)
      // 这个length是一共多少个list
      // 获取到的所有单词，添加到设置和保存到本地存储
      // console.log(getAllword)
      // 这个是list总数
      wordSetting.listTotal = getAllword.length
      // 这个是所有单词，还需要二次操作一下
      wordSetting.allWords = (getAllword.filter(item => item.words))
      store.commit('setAllWords', wordSetting.allWords)
      console.log(InitialData.defaultCategory())
    }
    db.close();
  }
}
getData()
// 判断是否有数据然后确定执行还是不执行
// getData()
