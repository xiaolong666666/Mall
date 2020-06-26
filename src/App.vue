<template>
  <div id="app">
    <router-view/>
    <tab-bar v-show="$route.meta.showBottomTabBar"/>
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar/TabBar.vue'
  export default {
    name: 'App',
    components: { TabBar },
    mounted(){
      this.$store.dispatch('reqUserInfo')
    }
  }
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
