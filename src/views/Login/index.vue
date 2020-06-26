<template>
    <div class="login-container">
        <div class="login-header">
            <div class="login-logo">
                <img src="@/assets/images/login/lk_logo_sm.png" alt="" width="250">
            </div>
            <div class="login-header-title">
                <a href="javascript:;" :class="{current: loginModel}" @click="handleLoginModel(true)">验证码登录</a>
                <a href="javascript:;" :class="{current: !loginModel}" @click="handleLoginModel(false)">密码登录</a>
            </div>
        </div>
        <div class="login-content">
            <form>
                <!-- 手机验证码登录部分 -->
                <div :class="{current: loginModel}">
                    <section class="login-message">
                        <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
                        <button 
                            class="get-verification" 
                            v-if="!countDown" 
                            :class="{count_down_number: phoneRight}"
                            @click.prevent="handleVerifyCode"
                        >
                            获取验证码
                        </button>
                        <button class="get-verification" v-else>已发送({{countDown}}s)</button>
                    </section>
                    <section class="login-verification">
                        <input type="text" maxlength="8" placeholder="验证码" v-model="code">
                    </section>
                    <section class="login-hint">
                        温馨提示：未注册Little Dragon的手机号，登录时将自动注册，并代表已同意<a href="javascript:;">服务协议与隐私政策</a>
                    </section>
                </div>
                <!-- 账号登录部分 -->
                <div :class="{current: !loginModel}">
                    <section class="login-message">
                        <input type="tel" maxlegth="11" placeholder="用户名/手机/邮箱" v-model="user_name">
                    </section>
                    <section class="login-verification">
                        <input type="password" placeholder="密码" v-if="pwdModel" v-model="user_pwd">
                        <input type="text" placeholder="密码" v-else v-model="user_pwd">
                        <div class="switch-show">
                            <img :class="{on: pwdModel}" src="@/assets/images/login/hide_pwd.png" alt="" width="20" @click.prevent="handlePwdModel(false)">
                            <img :class="{on: !pwdModel}" src="@/assets/images/login/show_pwd.png" alt="" width="20" @click.prevent="handlePwdModel(true)">
                        </div>
                    </section>
                    <section class="login-message">
                        <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                        <img ref="captcha" class="get-verification" src="http://localhost:3000/api/captcha" alt="captcha" @click.prevent="getCaptcha">
                    </section>
                </div>
                <button class="login-submit" @click.prevent="login">登录</button>
            </form>
            <button class="login-back" @click="$router.back()">返回</button>
        </div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import { mapActions } from 'vuex'
    import { getphoneCode, phoneCodeLogin, pwdLogin } from '@/api'
    export default {
        name: 'Login',
        data(){
            return {
                loginModel: true,    //true验证码登录    //false账号密码登录
                phone: '',          //手机号
                countDown: 0,       //倒计时
                pwdModel: true,     //true密文      //false明文
                code: '',           //验证码
                userInfo: {},        //用户信息
                user_name: '',         //用户名
                user_pwd: '',           //密码
                captcha: ''             //图形验证码
            }
        },
        computed: {
            phoneRight(){
                return /^[1][3,,4,5,8][0-9]{9}$/.test(this.phone)
            }
        },
        methods: {
            ...mapActions(['currentUser']),
            // 验证码登录、账号密码登录
            handleLoginModel(flag){
                this.loginModel = flag
            },
            // 获取验证码时间
            async handleVerifyCode(){
                this.countDown = 60
                const interval = setInterval(()=>{
                    this.countDown--
                    if(this.countDown===0){
                        clearInterval(interval)
                    }
                },1000) 
                const phoneCode = await getphoneCode(this.phone)
                console.log(phoneCode.data)
                if(phoneCode.err_code===0){
                    Toast({
                        message: phoneCode.message,
                        position: 'center',
                        duration: 2000
                    })
                }
            },
            // 密码显示方式
            handlePwdModel(flag){
                this.pwdModel = flag
            },
            // 获取图形验证码
            getCaptcha(){
                this.$refs.captcha.src="http://localhost:3000/api/captcha?time="+new Date().getTime()
            },
            // 登录验证
            async login(){
                if(this.loginModel){
                    if(!this.phone){
                        Toast('请输入手机号')
                        return
                    }else if(!this.phoneRight){
                        Toast('请输入正确手机号')
                        return
                    }
                    if(!this.code){
                        Toast('请输入验证码')
                        return
                    }else if(!(/^\d{6}$/gi.test(this.code))){
                        Toast('请输入正确验证码')
                        return
                    }
                    const result = await phoneCodeLogin(this.phone, this.code)
                    if(result.data.success_code===200){
                        this.userInfo = result.data.message
                    }else{
                        this.userInfo = {
                            message: result.data.message
                        }
                    }
                }else{
                    if(!this.user_name){
                        Toast('请输入用户名')
                        return
                    }else if(!this.user_pwd){
                        Toast('请输入密码')
                        return
                    }else if(!this.captcha){
                        Toast('请输入验证码')
                        return
                    }
                    const Presult = await pwdLogin(this.user_name, this.user_pwd, this.captcha)
                    if(Presult.data.success_code===200){
                        this.userInfo = Presult.data.message
                    }else{
                        this.userInfo = {
                            message: Presult.data.message
                        }
                    }
                }
                // 处理登录信息
                if(!this.userInfo.id){
                    Toast(this.userInfo.message)
                }else{
                    this.currentUser(this.userInfo)
                    this.$router.back()
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .login-container
        width 100%
        height 100%
        background #fff
        overflow hidden
        padding 60px 0
        .login-header
            margin 20px 0
            .login-logo
                width 250px
                margin 0 auto
            .login-header-title
                width 200px
                margin 40px auto 20px
                text-align center
                >a
                    padding-bottom 4px
                    color #333
                    font-size 14px
                    &:first-child
                        margin-right 40px
                >a.current
                    border-bottom 2px solid mediumpurple
                    color mediumpurple
                    font-weight 700
        .login-content
            width 80%
            margin 0 auto
            >form
                >div
                    display none
                    &.current
                        display block
                    input
                        width 100%
                        height 100%
                        padding-left 8px
                        box-sizing border-box
                        border 1px solid #ddd
                        border-radius 4px
                        outline 0
                        font 400 14px Arial
                        &:focus
                            border 1px solid mediumpurple
                    .login-message
                        position relative
                        margin-top 16px
                        height 48px
                        font-size 14px
                        background #fff
                        .get-verification
                            position absolute
                            top 50%
                            right 10px
                            transform translateY(-50%)
                            border 0
                            color #ccc
                            font-size 14px
                            background transparent
                            &.count_down_number
                                color purple
                    .login-verification
                        position relative
                        margin-top 16px
                        height 48px
                        font-size 14px
                        background #fff
                        .switch-show
                            position absolute
                            right 10px
                            top 12px
                            img
                                display none
                            img.on
                                display block
                    .login-hint
                        margin-top 12px
                        color #999
                        font-size 12px
                        line-height 20px
                        >a
                            color mediumpurple
                .login-submit
                        display block
                        width 100%
                        height 42px
                        margin-top 30px
                        border-radius 4px
                        background mediumpurple
                        color #fff
                        text-align center
                        font-size 16px
                        line-height 42px
                        border 0
            .login-back
                    display block
                    width 100%
                    height 42px
                    margin-top 15px
                    border-radius 4px
                    background transparent
                    border: 1px solid mediumpurple
                    color mediumpurple
                    text-align center
                    font-size 16px
                    line-height 42px
</style>