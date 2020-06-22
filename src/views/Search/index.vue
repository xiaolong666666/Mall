<template>
    <div class="search">
        <!-- 导航组件 -->
        <search-nav :handleIsPanel="handleIsPanel"/>
        <!-- 联动组件 -->
        <div class="shop">
            <div class="left"><search-menu :menu="searchgoods" :scrollY="scrollY" :handleMenuClick="handleMenuClick" :menuModerate="menuModerate"/></div>
            <div class="right"><search-shop :goods="searchgoods" :scrollY="scrollY"/></div>
        </div>
        <!-- 搜索组件 -->
        <search-panel v-if="isPanel" :handleIsPanel="handleIsPanel"/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import BScroll from 'better-scroll'
    import SearchNav from '@/components/Search/Nav'
    import SearchMenu from '@/components/Search/Menu'
    import SearchShop from '@/components/Search/Shop'
    import SearchPanel from '@/components/Search/Panel'

    export default {
        name: 'Search',
        components: { SearchNav, SearchMenu, SearchShop, SearchPanel },
        data(){
            return {
                scrollY: 0,
                isPanel: false
            }
        },
        computed: {
            ...mapState(['searchgoods'])
        },
        watch: {
            searchgoods(){
                this.$nextTick(()=>{
                    this.createBScroll()
                })
            }
        },
        mounted(){
            this.$store.dispatch('reqSearchGoods')
        },
        methods: {
            createBScroll(){
                this.left = new BScroll('.left')
                this.right = new BScroll('.right',{
                    probeType: 3
                })
                this.right.on('scroll',(pos)=>{
                    this.scrollY = Math.abs(pos.y)
                })
            },
            handleMenuClick(index){
                this.scrollY = this.$children[2].kindTop[index]
                this.right.scrollTo(0,-this.scrollY,300)
            },
            menuModerate(index){
                let menulists = this.$children[1].$refs.menulists
                let currentlist = menulists[index]
                this.left.scrollToElement(currentlist,300,0,-300)
            },
            handleIsPanel(flag){
                this.isPanel = flag
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .search
        background #f5f5f5
        width 100%
        height 100%
        .shop
            position absolute
            top 60px
            bottom 50px
            width 100%
            display flex
            overflow hidden
            .left
                width 80px
            .right
                flex 1
</style>