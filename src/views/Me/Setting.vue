<template>
    <div class="setting">
        <div>
            <me-common-cell left-icon="itlike-1" left-title="免密支付设置"/>
            <me-common-cell left-icon="itlike-2" left-title="免拼卡设置"/>
            <me-common-cell left-icon="itlike-3" left-title="消息接收设置" right-title="接收" right-title-color="red"/>
        </div>
        <div style="margin-top: 10px">
            <me-common-cell left-icon="itlike-4" left-title="Little设置" :clickCell="handleClick"/>
            <me-common-cell left-icon="itlike-5" left-title="Dragon设置" :clickCell="handleClick"/>
            <me-common-cell left-icon="itlike-5" left-title="Hello设置"/>
            <me-common-cell left-icon="itlike-4" left-title="Wrold设置"/>
        </div>
        <div class="logout" @click="handleLogout">
            退出登录
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { Toast, MessageBox } from 'mint-ui'
    import MeCommonCell from '@/components/Me/MeCommonCell'
    export default {
        name: 'MeSetting',
        components: { MeCommonCell },
        methods: {
            ...mapActions(['reqLogout']),
            handleClick(title){
                Toast('点击了'+title)
            },
            handleLogout(){
                MessageBox.confirm('你确定要退出登录吗？')
                .then(res=>{
                    if(res==='confirm'){
                        this.reqLogout()
                        this.$router.replace('/home')
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .setting
        width 100%
        height 100%
        background #f5f5f5
        .logout
            width 100%
            margin 20px 0
            text-align center
</style>