<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(casual,index) in homecasual" :key="index"><img :src="casual.imgurl" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import Swiper from 'swiper'
    export default {
        name: 'HomeHotBanner',
        computed: {
            ...mapState(['homecasual'])
        },
        mounted(){
            this.$store.dispatch('reqHomeCasual',()=>{
                this.$nextTick(()=>{
                    new Swiper('.swiper-container',{
                        autoplay: true,
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                })
            })
        }
    }
</script>

<style lang="stylus" scoped>
    /deep/ .swiper-pagination-bullet-active
        background #E9232c
    .swiper-slide
            width 100%
            img
                width 100%
</style>