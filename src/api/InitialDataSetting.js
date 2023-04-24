// 这个里面存放所有的初始数据和初始设置

import store from "@/store"

// 我应该在这里将数据保存到store，现在应该是所有的默认内容都直接在vuex里面声明了
// 处理好的初始数据
export const InitialData = {
  // 所有分类
  allCategory: (data) => {

    // 导出所有的分类和书名
    let categoryList = []
    data.forEach((item, index) => {
      // 把所有的分类导出
      categoryList.push({
        // id
        id: index + 1,
        // 当前分类
        category: item.category,
        // 当前书名
        bookName: item.bookName
      })
    })
    return categoryList
  },
  // 每个分类下的书名数组
  allCategoryAndBookName: (data) => {
    // 获取到处理好的所有分类和书名对象
    const categoryLists = InitialData.allCategory(data)
    // 处理这些数据，每个分类下面展示所有的书名
    // 还有可以改进的地方，比如这个数组可以是 [{id: 1, category: '',settingType: 3, bookname: []}]
    // 现在的是 [{"大学":["四级词汇","六级词汇","四级高频","考研词汇","专四词汇","专八词汇","考研核心"],"出国":["托福词汇","托福核心","雅思核心","GMAT词汇","GRE3000","SAT词汇","托业核心"],"中高考":["高考词汇","中考词汇","高考高分"]}]
    const res = categoryLists.reduce((acc, item) => {
      const category = item.category
      acc[category] = acc[category] || []
      acc[category].push(item.bookName)
      return acc
    }, {})

    const formattedRes = Object.entries(res).map(([category, bookName]) => ({
      category, bookName, settingType: 5
    }))
    // console.log(formattedRes)
    return formattedRes
  },
  // 默认显示的分类
  defaultCategory: (category) => {
    return category || '大学'
  },
  // 默认显示的书名
  defaultBookName: (bookName) => {
    return bookName || '四级词汇'
  },
  // 处理好的单词的list内的单词和翻译，根据设置好的list数量和每日单词数获取每日单词新建json到db文件夹（或者到本地存储中）中，每日一次
  // data是保存下来的数据，category是要的分类，bookname是书名，wordNum是每一个list平均分配多少个单词
  allWords: (data,category,bookName,wordNum) => {
    const listWords = []
    data.forEach(item => {
      if (item.category === category && item.bookName === bookName) {
        // 相当于每个list80单词，一共44
        const words = arr(item.AllWord, wordNum)
        words.forEach(item => {
          // {list: 'list1', words: [{wordid: '', word: gd}...]}...
          listWords.push(item)
          // console.log(item)
        })
      }
    })

    //  listnum 就是平均每个list有多少个单词 res.length就是一共多少 LIST
    // 设置把一个数组平均分成多少个
    function arr(arr, ListNum) {
      // 设置一个开始时间
      const startTime = new Date()
      
      let NewArr = [];
      let j = 0
      for (let i = 0; i < arr.length; i += ListNum) {
        // 设置每个list的间隔时间，每一个都是间隔一天,最后需要每一个list的时间都剪一天
      const interval = j * 24 * 60 * 60 * 1000 // 一天的毫秒数量
        // NewArr.push(arr.slice(i,i+ListNum))
  // 最后就是实现艾宾浩斯遗忘曲线
        NewArr.push({
          // 如果要写时间也可以在这里写
          list: 'List' + (j + 1),
          words: arr.slice(i, i + ListNum),
          // 时间还要改一下，第一次获取的是今天的，后面每个list都需要加一天，看看这个怎么实现
          LearnTime: new Date(startTime.getTime() + interval),
          // 后面可以再跟一个下次学习时间，难点
          nextLearnTime: '',
          // 还需要有一个状态,         点击一次就换一次就行了
          status: 0
        })
        j++
      }
      // console.log(NewArr.length)
      return NewArr
    }
    // 返回处理好的数据
    return listWords
  },
  // 最后就是实现艾宾浩斯遗忘曲线，在上面的方法里面实现
  // 还有需要处理，把list数量和每个list里面的单词共享到vuex和 getallwords里面一起使用，最后存储在本地存储
  wordType: (type) => {
    // 美音/英音 type 1 为英音 2 为美音
    const typeCode = 1
    // store.commit('setWordType', typeCode)
    if (type === '美国') {
      typeCode = 2
      // store.commit('setWordType', typeCode)
    }
    return typeCode
  },
  // 单词状态---需要使用put添加一个状态信息 status=0默认，然后可以加，颜色就加深
  status: (code) => {
    return code || 0
  },
  // 显示设置。黑白跟随系统
  displaySetting: (display) => {
    const displays = '白天'
    if (display === '晚上') {
      displays = '晚上'
    } else if(display === '跟随系统') {
      displays = '跟随系统'
    } else if(display === '护眼纸张') {
      display = '护眼纸张'
    }
    return displays
  },
  wordShowLanguage: (type) => {
    return type || '双语'
  },
  // 单词行点击
  wordLine: (color) => {
    return color || '蓝色'
  },
  // 单语模式
  oneLanguage: (style) => {
    return style || '隐藏样式'
  },
  // 一天要多少单词,直接修改
  dayWord: 30
  // list----下次复习时间
  // 第一次学习完成时间按list表
  // 当前分类下的所有单词 查看单词表，就是查看所有单词
  // 查看计划表，图表似的数据，首页左侧也是这个
  // 词库设置，查看所有分类和分类下的书名
}
