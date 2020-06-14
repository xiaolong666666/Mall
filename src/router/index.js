import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Recommend from '@/views/Recommend.vue'
import Chat from '@/views/Chat.vue'
import Search from '@/views/Search.vue'
import Me from '@/views/Me.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
