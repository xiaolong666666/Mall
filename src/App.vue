<template>
  <div id="app">
    <router-view/>
    <tab-bar />
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar/TabBar.vue'
  export default {
    name: 'App',
    components: { TabBar }
  }
</script>

<style lang="stylus" scoped>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
