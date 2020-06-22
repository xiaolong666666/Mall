<template>
  <div class="home">
    <ly-tab 
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="switchTo"
      class="fiexd-top"
      />
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      selectedId: 0,  //选中的id
      items: [
        {label: '热门'},
        {label: '服饰'},
        {label: '鞋包'},
        {label: '母婴'},
        {label: '百货'},
        {label: '食品'},
        {label: '内衣'},
        {label: '男装'},
        {label: '电器'}
      ],
      options: {
        activeColor: '#e9232c'  //选中的颜色
      },
      subRouterUrl: [
        '/home/hot',
        '/home/dress',
        '/home/box',
        '/home/mbaby',
        '/home/general',
        '/home/food',
        '/home/shirt',
        '/home/man',
        '/home/ele',
      ]   //二级路由路径设置
    }
  },
  methods: {
    switchTo(item,index){
      this.$router.replace(this.subRouterUrl[index])
    }
  }
}
</script>

<style lang="stylus" scoped>
  /deep/ .ly-tab-item-label
    color #333
  /deep/ .ly-tab-active-bar
    bottom 0px
  .home
    width 100%
    height 100%
    .fiexd-top
      position fixed
      left 0
      top 0
      z-index 99
</style>
