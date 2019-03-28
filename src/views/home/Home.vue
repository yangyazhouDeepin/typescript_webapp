<template lang="pug">
div.home
    div.header
        div.nav-list
            RouterLink.nav(to="/" exact-active-class="active") 足球
            RouterLink.nav(to="/basketball" exact-active-class="active") 篮球
            RouterLink.classification(to="/")
            RouterLink.schedule(to="/")
    div.main
        div.data-type
            span.type.active 今日比赛
            RouterLink.type(to="/") 战报
            RouterLink.type(to="/") 赛程
        RouterView
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Home extends Vue {}
</script>

<style lang="stylus">
.home
    flex 1
    display flex
    flex-direction column
    .header
        height 88px
        line-height 88px
        text-align center
        position relative
        .nav-list
            display inline-block
            line-height 88px
            .nav
                color $fc2
                font-size 34px
                display inline-block
                width 200px
                height 64px
                line-height 64px
                font-weight 500
                vertical-align middle
                &.active
                    background $blue
                    border-radius 32px
                    color #fff
            .classification, .schedule
                display inline-block
                width 44px
                height 44px
                position absolute
                top 22px
                &.classification
                    left 30px
                    background url('~@/assets/images/home/icon-classification.png') no-repeat
                    background-size 44px
                &.schedule
                    right 30px
                    background url('~@/assets/images/home/icon-schedule.png') no-repeat
                    background-size 44px
    .main
        padding 0 20px
        flex 1
        background $bgColor
        .data-type
            padding 10px 0
            height 60px
            line-height 60px
            .type
                font-size 26px
                color $fc2
                margin-right 70px
                display inline-block
                &.active
                    font-size 32px
                    position relative
                    color $fc1
                    &:after
                        content ""
                        position absolute
                        bottom 0
                        left 50%
                        transform translateX(-50%)
                        width 8px
                        height 5px
                        background-color $fc1
                        border-radius 4px

</style>
