<template>
    <div class="bottom-tab">
        <div class="tab-item" @click="switchTo('/home')">
            <img :src="$route.path.includes('/home') ? tabImgArr[0].selected : tabImgArr[0].normal" alt="">
            <span :class="{on: $route.path.includes('/home')}" >首页</span>
        </div>
        <div class="tab-item" @click="switchTo('/recommend')">
            <img :src="$route.path.includes('/recommend') ? tabImgArr[1].selected : tabImgArr[1].normal" alt="">
            <span :class="{on: $route.path.includes('/recommend')}" >推荐</span>
        </div>
        <div class="tab-item" @click="switchTo('/search')">
            <img :src="$route.path.includes('/search') ? tabImgArr[2].selected : tabImgArr[2].normal" alt="">
            <span :class="{on: $route.path.includes('/search')}" >搜索</span>
        </div>
        <div class="tab-item" @click="switchTo('/chat')">
            <img :src="$route.path.includes('/chat') ? tabImgArr[3].selected : tabImgArr[3].normal" alt="">
            <span :class="{on: $route.path.includes('/chat')}" >聊天</span>
        </div>
        <div class="tab-item" @click="switchTo('/me')">
            <img :src="$route.path.includes('/me') ? tabImgArr[4].selected : tabImgArr[4].normal" alt="">
            <span :class="{on: $route.path.includes('/me')}" >我的</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabBar',
        data(){
            return {
                tabImgArr: [
                    {normal:'/img/icon_home.png',selected:'/img/icon_home_selected.png'},
                    {normal:'/img/icon_intro.png',selected:'/img/icon_intro_selected.png'},
                    {normal:'/img/icon_search.png',selected:'/img/icon_search_selected.png'},
                    {normal:'/img/icon_chat.png',selected:'/img/icon_chat_selected.png'},
                    {normal:'/img/icon_mine.png',selected:'/img/icon_mine_selected.png'}
                ]
            }
        },
        methods: {
            switchTo(path){
                this.$router.replace(path)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .bottom-tab
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px
        display flex
        background #fff
        z-index 999
        .tab-item
            flex 1
            display flex
            flex-direction column
            justify-content center
            align-items center
            color #666
            img{
                width 35%
                margin-bottom 2px
                vertical-align top
            }
            span{
                display inline-block
            }
            span.on{
                color #f00
            }
</style>