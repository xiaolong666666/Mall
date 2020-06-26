import Vue from 'vue'
import VueRouter from 'vue-router'

// 一级路由
import Home from '@/views/Home'
import Recommend from '@/views/Recommend'
import Chat from '@/views/Chat'
import Search from '@/views/Search'
import Me from '@/views/Me'
import Login from '@/views/Login'
import Setting from '@/views/Me/Setting'
import Userdetail from '@/views/Me/Userdetail'

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
      { path: 'hot', name: 'Hot', meta: {showBottomTabBar: true}, component: Hot },
      { path: 'box', name: 'Box', meta: {showBottomTabBar: true}, component: Box },
      { path: 'dress', name: 'Dress', meta: {showBottomTabBar: true}, component: Dress },
      { path: 'ele', name: 'Ele', meta: {showBottomTabBar: true}, component: Ele },
      { path: 'food', name: 'Food', meta: {showBottomTabBar: true}, component: Food },
      { path: 'general', name: 'General', meta: {showBottomTabBar: true}, component: General },
      { path: 'man', name: 'Man', meta: {showBottomTabBar: true}, component: Man },
      { path: 'mbaby', name: 'Mbaby', meta: {showBottomTabBar: true}, component: Mbaby },
      { path: 'shirt', name: 'Shirt', meta: {showBottomTabBar: true}, component: Shirt },
      { path: '', redirect: 'hot' }
    ]
  },
  {
    path: '/recommend',
    name: 'Recommend',
    meta: {showBottomTabBar: true},
    component: Recommend
  },
  {
    path: '/search',
    name: 'Search',
    meta: {showBottomTabBar: true},
    component: Search
  },
  {
    path: '/chat',
    name: 'Chat',
    meta: {showBottomTabBar: true},
    component: Chat
  },
  {
    path: '/me',
    name: 'Me',
    meta: {showBottomTabBar: true},
    component: Me
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/userdetail',
    name: 'Userdetail',
    component: Userdetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
