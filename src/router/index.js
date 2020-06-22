import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Home from '@/views/Home'
import Recommend from '@/views/Recommend'
import Chat from '@/views/Chat'
import Search from '@/views/Search'
import Me from '@/views/Me'

// 二级路由
import Hot from '@/views/Home/Children/Hot'
import Box from '@/views/Home/Children/Box'
import Dress from '@/views/Home/Children/Dress'
import Ele from '@/views/Home/Children/Ele'
import Food from '@/views/Home/Children/Food'
import General from '@/views/Home/Children/General'
import Man from '@/views/Home/Children/Man'
import Mbaby from '@/views/Home/Children/Mbaby'
import Shirt from '@/views/Home/Children/Shirt'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: 'hot', name: 'Hot', component: Hot },
      { path: 'box', name: 'Box', component: Box },
      { path: 'dress', name: 'Dress', component: Dress },
      { path: 'ele', name: 'Ele', component: Ele },
      { path: 'food', name: 'Food', component: Food },
      { path: 'general', name: 'General', component: General },
      { path: 'man', name: 'Man', component: Man },
      { path: 'mbaby', name: 'Mbaby', component: Mbaby },
      { path: 'shirt', name: 'Shirt', component: Shirt },
      { path: '', redirect: 'hot' }
    ]
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/me',
    name: 'Me',
    component: Me
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
