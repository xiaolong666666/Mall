<template>
    <div class="me-top">
        <router-link tag="div" class="user-info" to="/userdetail">
            <img src="@/assets/images/me/me_icon.png" alt="">
            <p v-if="userinfo.user_phone">{{userinfo.user_phone | phoneFormat}}</p>
            <p v-else>{{user_name}}</p>
            <i class="itlike-3"></i>
        </router-link>
        <div class="user-orders">
            <div class="my-orders">
                <h4>我的订单</h4>
                <button class="viewAll">查看全部 ></button>
            </div>
            <div class="my-orders-detail">
                <div class="bottom-item">
                    <i class="itlike-1"></i>
                    <span>待付款</span>
                </div>
                <div class="bottom-item">
                    <i class="itlike-2"></i>
                    <span>待分享</span>
                </div>
                <div class="bottom-item">
                    <i class="itlike-3"></i>
                    <span>待发货</span>
                </div>
                <div class="bottom-item">
                    <i class="itlike-4"></i>
                    <span>待收货</span>
                </div>
                <div class="bottom-item">
                    <i class="itlike-5"></i>
                    <span>待评价</span>
                </div>
            </div>
        </div>
        <div class="user-recommend">
            <div class="setting-item">
                <i class="itlike-1"></i>
                <span>新人红包</span>
            </div>
            <div class="setting-item">
                <i class="itlike-2"></i>
                <span>多多果园</span>
            </div>
            <div class="setting-item">
                <i class="itlike-3"></i>
                <span>砍价免费拿</span>
            </div>
            <div class="setting-item">
                <i class="itlike-4"></i>
                <span>边逛边赚</span>
            </div>
            <div class="setting-item">
                <i class="itlike-5"></i>
                <span>天天领红包</span>
            </div>
            <div class="setting-item">
                <i class="itlike-uniE902"></i>
                <span>收货地址</span>
            </div>
            <div class="setting-item">
                <i class="itlike-1"></i>
                <span>我的评价</span>
            </div>
            <div class="setting-item">
                <i class="itlike-3"></i>
                <span>官方客服</span>
            </div>
            <router-link tag="div" class="setting-item" to="/setting">
                <i class="itlike-4"></i>
                <span>设置</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'MeTop',
        computed: {
            ...mapState(['userinfo'])
        },
        filters: {
            phoneFormat(phone){
                const phoneStr = [...phone]
                let str = ''
                phoneStr.forEach((item,index)=>{
                    if(index===3 || index===4 || index===5 || index===6){
                        str += '*'
                    }else{
                        str += item
                    }
                })
                return str
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .me-top
        .user-info
            margin 0 auto
            padding 5% 5%
            display flex
            flex-direction row
            background #f80
            align-items center
            background #fff
            img 
                width 50px
                border-radius 50px
            p
                margin 0 10px
            i 
                font-size 20px
        .user-orders
            display flex
            flex-direction column
            margin 3% 0
            padding 3% 5%
            background #fff
            .my-orders
                display flex
                flex-direction row
                justify-content space-between
                .viewAll
                    background #fff
            .my-orders-detail
                margin-top 10px
                display flex
                flex-direction row
                .bottom-item
                    flex 1
                    height 60px
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    i 
                        margin-bottom 4px
                        color #E9232c
                        font-size 24px
        .user-recommend
            padding 3% 5%
            display flex
            flex-direction row
            flex-wrap wrap
            background #fff
            .setting-item
                width 84px
                height 70px
                display flex
                flex-direction column
                justify-content center
                align-items center
                i 
                    margin-bottom 6px
                    color #f80
                    font-size 24px


</style>