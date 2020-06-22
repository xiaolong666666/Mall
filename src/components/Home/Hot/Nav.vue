<template>
    <div class="hot-nav">
        <div class="hot-nav-content">
            <div class="nav-content-inner">
                <a class="inner-item" v-for="(icon,index) in homenav.data" :key="index">
                    <img :src="icon.iconurl" alt="">
                    <span>{{icon.icontitle}}</span>
                </a>
            </div>
        </div>
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="BarStyle"></div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeHotNav',
        data(){
            return {
                screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,    // 页面宽度
                scrollConentW: 720,     // 内容宽度
                bgW: 100,       // 滚动框长度
                barW: 0,        // 滚动条长度
                startX: 0,      // 起始位置
                endX: 0,        // 结束位置
                moveW: 0         // 移动距离
            }
        },
        computed: {
            ...mapState(['homenav']),
            BarStyle(){
                return {
                    width: `${this.barW}px`,
                    left: `${this.moveW}px`
                }
            }
        },
        methods: {
            // 获取滚动条长度
            getBottonBarW(){
                const { bgW, screenW, scrollConentW } = this
                this.barW = bgW * ( screenW / scrollConentW )
            },
            //监听移动端事件
            bindEvent(){
                this.$el.addEventListener('touchstart',this.handleTouchStart,false)
                this.$el.addEventListener('touchmove',this.handleTouchMove,false)
                this.$el.addEventListener('touchend',this.handleTouchEnd,false)
            },
            // 开始触摸
            handleTouchStart(e){
                this.startX = e.touches[0].pageX
            },
            // 开始移动
            handleTouchMove(e){
                const { bgW, barW, screenW, endX } = this
                let touchWidth = e.touches[0].pageX - this.startX
                this.moveW = - ( touchWidth * ( bgW / screenW ) - endX )
                if(this.moveW <= 0){
                    this.moveW = 0
                }if(this.moveW >= bgW - barW){
                    this.moveW = bgW - barW
                }
            },
            // 结束触摸
            handleTouchEnd(){
                this.endX = this.moveW
            }
        },
        mounted(){
            this.$store.dispatch('reqHomeNav')
            this.getBottonBarW()
            this.bindEvent()
        }
    }
</script>

<style lang="stylus" scoped>
    .hot-nav
        position relative
        width 100%
        height 180px
        padding-bottom 10px
        background #fff
        .hot-nav-content
            width 100%
            overflow-x scroll
            .nav-content-inner
                width 720px
                height 180px
                display flex
                flex-wrap wrap
                .inner-item
                    width 90px
                    height 90px
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    color #666
                    font-size 14px
                    img
                        width 40%
                        margin-bottom 5px
        // 隐藏默认横向滚动条
        .hot-nav-content::-webkit-scrollbar
            display none
        .hot-nav-bottom
            position absolute
            left 50%
            bottom 8px
            width 100px
            height 2px
            background #ccc
            transform translate(-50%,0)
            .hot-nav-bottom-inner
                position absolute
                left 0px
                top 0px
                height 100%
                background #E9232c
</style>