<template>
    <div class="shop-container">
        <ul class="shop-list">
            <li class="shop-list-item" v-for="(shop,index) in homeshoplist.goods_list" :key="index">
                <img class="list-item-img" :src="shop.image_url" alt="">
                <h4 class="list-item-title">{{shop.goods_name}}</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥{{shop.normal_price/100}}</span>
                    <span class="item-counter">{{shop.sales_tip}}</span>
                    <span class="item-user">
                        <img :src="user.avatar" v-for="(user,idx) in shop.bubble" :key="idx" alt="">
                    </span>
                    <div class="item-buy"><button>去拼单 ></button></div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeHotShop',
        computed: {
            ...mapState(['homeshoplist'])
        },
        mounted(){
            this.$store.dispatch('reqHomeShopList')
        }
    }
</script>

<style lang="stylus" scoped>
    .shop-container
        margin-bottom 60px
        .shop-list
            background #fff
            .shop-list-item
                display flex
                flex-direction column
                margin-bottom 10px
                .list-item-img
                    width 100%
                .list-item-title
                    width 94%
                    height 44px
                    margin 0 auto
                    line-height 22px
                    overflow hidden
                .list-item-bottom
                    margin 10px 0
                    display flex
                    flex-direction row
                    justify-content space-around
                    align-items center
                    .item-price
                        flex 1
                        margin-left 8px
                        color #e9232c
                        font-size 18px
                        font-weight bolder
                    .item-counter
                        flex 2
                        color #ccc
                        font-size 12px
                    .item-user
                        flex 1
                        display flex
                        justify-content center
                        align-items center
                        img
                            width 30px
                            border-radius 15px
                        img:nth-child(2)
                            margin-left -6px
                    .item-buy
                        flex 2
                        button
                            width 80%
                            height 34px
                            margin 0 auto
                            display flex
                            justify-content center
                            align-items center
                            border-radius 8px
                            background #E9232c
                            color #fff
                            font-size 15px

</style>