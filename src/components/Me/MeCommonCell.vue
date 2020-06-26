<template>
    <div class="cell" @click="clickCell(leftTitle)">
        <div class="cell-left">
            <i :class="leftIcon"></i>
            <div v-show="leftTitle">{{leftTitle}}</div>
        </div>
        <div class="cell-right" :style="{color: rightTitleColor}">
            <div style="font-size: 12px; color:rightTitleColor" v-show="rightTitle">{{rightTitle}}</div>
            <i class="itlike-uniE909" v-show="isShowRightArrow" style="color: #666"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MeCommonCell',
        props: {
            leftIcon: { type: String, default: '' },
            leftTitle: { type: String, default: '' },
            rightTitle: { type: String, default: '' },
            leftTitleColor: { type: String, default: '#333' },
            rightTitleColor: { type: String, default: '#666' },
            isShowRightArrow: { type: Boolean, default: true },
            clickCell: { type: Function }
        }
    }
</script>

<style lang="stylus" scoped>
    .cell
        height 44px
        padding 0 10px
        display flex
        flex-direction row
        justify-content space-between
        align-items center
        border-bottom 1px solid #ececec
        background #fff
        .cell-left,.cell-right
            display flex
            align-items center
            i
                margin-right 6px
</style>