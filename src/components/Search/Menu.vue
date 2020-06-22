<template>
    <div class="search-menu">
        <ul class="menu-list">
            <li class="menu-item"
                v-for="(goods,index) in menu" 
                :key="index"
                :class="{current: index===currentIndex}"
                @click="handleMenuClick(index)"
                ref="menulists"
            >
                <span>{{goods.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import shop from '@/components/shop.js'
    export default {
        name: 'SearchMenu',
        props: {
            menu: Array,
            scrollY: Number,
            handleMenuClick: Function,
            menuModerate: Function
        },
        data(){
            return {
                kindTop: []
            }
        },
        created(){
            shop.$on('shoplist',(shoplist)=>{
                this.kindTop = shoplist
            })
        },
        computed: {
            currentIndex(){
                const { scrollY, kindTop } = this;
                return kindTop.findIndex((kind,index)=>{
                    this.menuModerate(index)
                    return scrollY >= kind && scrollY < kindTop[index+1]
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .search-menu
        display flex
        align-self stretch
        flex 0 0 80px
        .menu-list
            width 100%
            .menu-item
                width 100%
                height 60px
                background #fafafa
                display flex
                justify-content center
                align-items center
                color #666
            .current
                position relative
                color #e02e24
            .current::before
                position absolute
                left 0
                content ''
                width 4px
                height 30px
                background #e02e24
</style>