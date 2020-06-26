<template>
    <div class="me">
        <div class="my-content" v-if="userinfo.id">
            <me-top />
        </div>
        <select-login v-else/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import SelectLogin from '@/components/Me/SelectLogin.vue'
    import MeTop from '@/components/Me/MeTop.vue'
    export default {
        name: 'Me',
        components: { SelectLogin, MeTop },
        computed: {
            ...mapState(['userinfo'])
        }
    }
</script>

<style lang="stylus" scoped>
    .me
        background #f5f5f5
        width 100%
        height 100%
</style>