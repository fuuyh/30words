import store from "@/store"

// 获取词库设置，所有分类和书名

// 把这个默认配置设置给本地存储，然后在组件中修改并保存到本地存储中

export const baseSetting = [
  // 配置设置中所需要的内容
  {
    id: 1,
    listName: '基本设置',
    list: [
      {
        id: 1,
        settingName: '英语发音',
        // settingType = 1 为基础设置，2为list设置，3是关于作者
        settingContent: [
          {
            id: 1,
            content: '英国',
            audioType: 1,
            settingType: 1,
            description: '将使用英国英语发音'
          },
          {
            id: 2,
            content: '美国',
            audioType: 2,  //可以if判断
            settingType: 1,
            description: '将使用美国英语发音'
          }
        ]
      },
      {
        id: 2,
        settingName: '单词显示',
        settingContent: [
          {id: 1, settingType: 1, content: '双语',description: '显示双语模式'},
          {id: 2, settingType: 1, content: '英语',description: '显示英语模式'},
          {id: 3, settingType: 1, content: '中文',description: '显示中文模式'}
        ]
      },
      {
        id: 3,

        settingName: '单词行点击颜色',
        settingContent: [
          {id: 1, settingType: 1, content: '黄色', description: '点击后颜色将显示黄色系，并逐渐加深'},
          {id: 2, settingType: 1, content: '蓝色', description: '点击后颜色将显示蓝色系，并逐渐加深'}
        ]

      },
      {
        id: 4,
        settingName: '单语模式',
        settingContent: [
          {id: 1, settingType: 1, content: '侧滑样式', description: '单语模式，比如只显示英语时，单词行向左滑动，查看中文释义'},
          {id: 2, settingType: 1, content: '隐藏样式', description: '单语模式，比如只显示英语时，点击单词行的中文区域，查看中文释义'}
        ]
      }
    ]
  },
  
  {
    id: 2,
    listName: '其他设置',
    list: [
      {
        id: 1,
        settingName: '显示模式',
        settingContent: [
          {id: 1, settingType: 1, content: '白天', description: '使用白天背景'},
          {id: 2, settingType: 1, content: '夜晚', description: '使用暗色背景'},
          {id: 3, settingType: 1, content: '跟随系统', description: '跟随系统使用背景'},
          {id: 4, settingType: 1, content: '护眼纸张', description: '使用护眼纸张背景'},
        ]
      },
      {
        id: 2,
        settingName: '词库设置',
        settingType: 5,
        settingContent: store.state.thesaurus
      },
      {
        id: 3,
        settingName: '使用教程',
        settingType: 3,
        settingContent: []
    
      },
      {
        id: 4,
        settingName: '关于作者',
        settingType: 3,
        settingContent: []
      }
    ]
  }
]

export const wordSetting = {
  // list 总数，根据每个list单词数量计算
  listTotal: '',
  // 每一个list多少个单词，默认是30
  wordNum: 30,
  // 一共多少天，根据list数量计算
  allDays: '',
  // 查看单词表，显示所有单词，当前分类下的
  allWords: []
  // 查看计划表
}