import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
    meta: {
      index: 0
    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/setting/index.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/setting-detailed',
    name: 'setting-detailed',
    component: () => import(/* webpackChunkName: "setting-detailed" */ '@/views/setting/secondarySetting'),
    meta: {
      index: 2
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 导航首位
// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   console.log('from', from)
  
//   if (to.name = 'setting-detailed') {
//     document.body.classList.add('slidee-back')
//   } else {
//     document.body.classList.remove('slidee-back')
//   }
//   next()
// })

export default router
