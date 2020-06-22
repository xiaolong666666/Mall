<template>
    <div class="recommend-item" >
        <img :src="shop.thumb_url" alt="" width="100%" v-if="shop.thumb_url">
        <h4 class="item-title">{{shop.short_name}}</h4>
        <div class="item-detail">
            <span class="item-price">￥{{shop.price / 100}}</span>
            <span class="item-counter">{{shop.sales_tip}}</span>
            <button class="item-btn" v-if="true">找相似</button>
            <span class="item-user" v-else>
                <img src="@/assets/images/home/hot/shop_list/user1.jpg" alt="">
                <img src="@/assets/images/home/hot/shop_list/user2.jpg" alt="">
            </span>
        </div>
    </div> 
</template>

<script>
    export default {
        name: 'ShopList',
        props: {
            shop: Object
        }
    }
</script>

<style lang="stylus" scoped>
    .recommend-item:nth-child(2n-1)
        margin-right 1%
    .recommend-item
        width 49.5%
        margin 10px 0
        background #fff
        .item-title
            height 20px
            margin 5px 0
            padding 0 5px
            line-height 20px
            font-size 13px
            font-weight light
            overflow hidden
            white-space nowrap 
        .item-detail
            display flex
            height 26px
            flex-direction row
            align-items center
            padding 0 6px
            .item-price
                flex 1
                color #f00
                font-size 12px
            .item-counter
                flex 2
                color #666
                font-size 10px
            .item-btn
                flex 1
                height 24px
                border 1px solid #f80
                border-radius 5px
                background transparent
                color #f00
                font-size 10px
            .item-user
                img:nth-child(1)
                    margin-right -8px
                img
                    width 30px
                    border-radius 50% 
</style>