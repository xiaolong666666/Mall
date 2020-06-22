<template>
    <div class="recommend-main" v-if="recommendshoplist.length>0">
        <ul class="recommend-content">
            <shop-list tag="li" v-for="(shop,index) in recommendshoplist" :shop=shop :key="index"/>
        </ul>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui'
    import { mapState } from 'vuex'
    import BScroll from 'better-scroll'
    import ShopList from '@/components/ShopList/ShopList.vue'
    export default {
        name: 'RecommendMain',
        components: { ShopList },
        data(){
            return {
                page: 1,
                count: 20
            }
        },
        computed: {
            ...mapState(['recommendshoplist'])
        },
        watch: {
            recommendshoplist(){
                this.$nextTick(()=>{
                    Indicator.close()
                    this.page++
                    this.initBScroll()
                })
            }
        },
        mounted(){
            Indicator.open('正在加载数据...')
            this.$store.dispatch('reqRecommendShopList',{ page: this.page, count: this.count})
        },
        methods: {
            initBScroll(){
                this.listScroll = new BScroll(".recommend-main",{
                    probeType: 2
                })
                // 监听列表滚动过程
                this.listScroll.on('touchEnd',(pos)=>{
                    // 监听下拉
                    if(pos.y>=50){
                        this.Refresh()
                    }
                    if(this.listScroll.maxScrollY>pos.y+40){
                        Indicator.open('正在加载数据...')
                        this.$store.dispatch('reqRecommendShopList',{ page: this.page, count: this.count })
                    }
                    // 监听下拉
                })
                // 监听列表滚动完毕
                this.listScroll.on('scrollEnd',()=>{
                    this.listScroll.refresh()
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .recommend-main
        width 100%
        height 100%
        overflow hidden
        .recommend-content
            background #f5f5f5
            display flex
            flex-direction row
            flex-wrap wrap
            padding-bottom 50px
</style>