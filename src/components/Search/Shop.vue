<template>
    <div class="search-shop" ref="shopWrapper">
        <div class="shop-kind" v-for="(shop,index) in goods" :key="index">
            <div class="shop-title">
                <h4>{{shop.name}}</h4>
                <a href="">查看更多 ></a>
            </div>
            <ul class="shop-phone" v-if="shop.tag==='phone'">
                <li class="phone-item" v-for="(phone,index) in shop.category" :key="index">
                    <img :src="phone.icon" alt="">
                </li>
            </ul>
            <ul class="shop-list">
                <li class="shop-item" v-for="(item,idx) in shop.items" :key="idx">
                    <img :src="item.icon" alt="">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import shop from '@/components/shop.js'
    export default {
        name: 'SearchShop',
        props: {
            goods: Array,
            scrollY: Number
        },
        data(){
            return {
                kindTop: []
            }
        },
        watch: {
            goods(){
                this.$nextTick(()=>{
                    this.getKindTop()
                })
            }
        },
        methods: {
            getKindTop(){
                let top = 0
                let liArr = [0]
                const shopList =  this.$refs.shopWrapper.getElementsByClassName('shop-kind')
                Array.prototype.slice.call(shopList).forEach(kind=>{
                    top += kind.clientHeight
                    liArr.push(top)
                })
                this.kindTop = liArr
                shop.$emit('shoplist',this.kindTop)
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .search-shop
        flex 1
        background #fff
        .shop-title
            height 44px
            padding 0 10px
            display flex
            justify-content space-between
            align-items center
            color #999
            a
                color #999
        .shop-list
            display flex
            flex-direction row
            flex-wrap wrap
            .shop-item
                width 33.3%
                height 90px
                display flex
                flex-direction column
                justify-content center
                align-items center
                color #333
                font-size 14px
                font-weight lighter
                img 
                    width 60%
                    height 60%
                    margin-bottom 5px
        .shop-phone
            display flex
            flex-direction row
            flex-wrap wrap
            border-bottom-1px(#ccc)
            .phone-item
                width 33.3%
                display flex
                justify-content center
                align-items center
                margin 5px 0
                img 
                    width 70%
</style>