<template>
    <div class="search-nav">
        <a href="" class="search-nav-icon" @click.prevent="handleIsPanel(true)">
            <img src="@/assets/images/search/search.png" alt="" width="25">
            <span>Little Dragon</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'SearchNav',
        props: {
            handleIsPanel: Function
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/mixins.styl";
    .search-nav
        position fixed
        left 0
        top 0
        width 100%
        height 60px
        background #fff
        border-bottom-1px(#ccc)
        display flex
        justify-content center
        align-items center
        .search-nav-icon
            width 90%
            height 66%
            border-radius 10px
            background #e8e8e8
            display flex
            justify-content center
            align-items center
            span
                margin-left 5px
                color #aaa
                font-size 18px
                font-weight lighter

</style>