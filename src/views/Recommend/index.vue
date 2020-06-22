<template>
    <div class="recommend">
        <recommend-main />
    </div>
</template>

<script>
    import RecommendMain from '@/components/Recommend/Main.vue'
    export default {
        name: 'Recommend',
        components: { RecommendMain },
    }
</script>

<style lang="stylus" scoped>
    .recommend
        width 100%
        height 100%
        overflow hidden
</style>