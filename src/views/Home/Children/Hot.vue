<template>
    <div class="hot">
        <!-- 轮播图 -->
        <home-hot-banner />
        <!-- 中间导航 -->
        <home-hot-nav />
        <!-- 广告位 -->
        <div class="hot-ad">
            <img src="@/assets/images/home/hot/hot_ad/home_ad.gif" alt="">
        </div>
        <!-- 商品列表 -->
        <home-hot-shop />
    </div>
</template>

<script>
    import HomeHotBanner from '@/components/Home/Hot/Banner.vue'
    import HomeHotNav from '@/components/Home/Hot/Nav.vue'
    import HomeHotShop from '@/components/Home/Hot/Shop.vue'
    export default {
        name: 'Hot',
        components: { HomeHotBanner, HomeHotNav, HomeHotShop }
    }
</script>

<style lang="stylus" scoped>
    .hot
        width 100%
        height 100%
        padding-top 42px
        background #f5f5f5
        .hot-ad
            width 100%
            background #fff
            img
                width 100%
                margin 12px 0px
</style>