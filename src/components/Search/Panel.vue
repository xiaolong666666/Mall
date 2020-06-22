<template>
    <div class="search-panel">
        <div class="panel-nav">
            <div class="panel-input">
                <img src="@/assets/images/search/search.png" alt="" width="20">
                <input ref="search" type="text" placeholder="Little Dragon">
            </div>
            <button @click="handleIsPanel(false)">取消</button>
        </div>
        <div class="panel-hot">
            <div class="hot-title">
                <img src="@/assets/images/search/hot.png" alt="" width="22">
                <h4>热门搜索</h4>
            </div>
            <ul class="hot-list">
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
                <li class="hot-item">Little Dragon</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchPanel',
        props: {
            handleIsPanel: Function
        },
        mounted(){
            this.$refs.search.focus()
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .search-panel
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        background #fff
        z-index 1000
        .panel-nav
            padding 10px 20px
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            border-bottom-1px(#ddd)
            .panel-input
                width 85%
                height 38px
                padding 0 10px
                display flex
                flex-direction row
                align-items center
                border-radius 10px
                background #ededed
                input
                    width 90%
                    height 90%
                    padding-left 8px
                    background transparent
                    font-size 16px
                input::-webkit-input-placeholder
                    color #969696
            button 
                background transparent
                color #aaa
                font-size 16px
        .panel-hot
            .hot-title
                margin 40px 10px 10px
                padding 0 20px
                display flex
                flex-direction row
                align-items center
                color #aaa
            .hot-list
                padding 0 30px
                display flex
                flex-direction row
                flex-wrap wrap
                .hot-item
                    margin 5px 10px
                    color #aaa
</style>