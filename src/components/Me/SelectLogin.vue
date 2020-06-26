<template>
    <div class="select-login">
        <div class="logo">
            <img src="@/assets/images/login/lk_logo_sm.png" alt="">
        </div>
        <h4>选择登录方式</h4>
        <router-link to='/login' tag="button" class="login-btn">
            手机登录
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'SelectLogin'
    }
</script>

<style lang="stylus" scoped>
    .select-login
        position fixed
        left 0
        top 0
        width 100%
        height 100%
        background #f5f5f5
        display flex
        flex-direction column
        justify-content center
        align-items center
        z-index 1000
        .logo
            position fixed
            top 20%
            width 60%
            img 
                width 100%
        .login-btn
            width 80%
            height 38px
            margin-top 30px
            border none 
            border-radius 5px
            background mediumpurple
            color #fff
            font-size 20px
</style>