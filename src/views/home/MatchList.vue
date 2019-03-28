<template lang="pug">
div.match-list
    div.match-list-title
        p.title.processing 正在进行 
            span 586场
    div.match-list-item
        div.title
            div.league 英超联赛
            div.time 03:45
                span.red 76'
            div.hot 123人
        div.detail
            div.host
                div.name.tr
                    span.event-list
                    |山口雷诺
                div.logo
                    DefaultImg(:defaultUrl="util.defaultNoBgImg")
            div.score.tc
                span 1-2
            div.guest 
                div.logo
                    DefaultImg()
                div.name
                    |柏太阳神
                    span.event-list

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class MatchList extends Vue {
    private created(): void {
        console.log(this.util.defaultNoBgImg)
    }
}
</script>

<style lang="stylus" scoped>
.match-list
    &-title
        height 72px
        line-height 72px
        background rgba(58,140,242,0.12)
        color $fc3
        font-size 22px
        text-align center
        border-radius 6px 6px 0 0
        .title
            display inline-block
            padding-left 40px
            background-size 30px
            background-position left center
            background-repeat no-repeat
            &.processing
                background-image url('~@/assets/images/home/matchlist/icon-processing.png')
        span
            color $red
    &-item
        padding 20px 15px 20px 20px
        background-color #fff
        color $fc2
        display flex
        flex-direction column
        justify-content space-between
        .title
            display flex
            justify-content space-between
            line-height 40px
            .league
                padding-left 46px
                background url('~@/assets/images/home/matchlist/icon-not-concerned.png') no-repeat
                background-size 40px
                background-position left center
            .time
                line-height 34px
                height 34px
                padding 0 14px
                background #F4F4F4
                margin-top 3px
                border-radius 5px
                span
                    margin-left 16px
            .hot
                padding-left 46px
                background url('~@/assets/images/home/matchlist/icon-people.png') no-repeat
                background-size 40px
                background-position left center
        .detail
            display flex
            height 78px
            .host, .guest
                color $fc1
                font-size 26px
                width 300px
                display flex
                align-items center
                .name
                    flex 1
                .logo
                    width 50px
                    text-align right
                    position relative
                    img
                        width 32px
                        position absolute
                        top 50%
                        transform translateY(-50%)
                &.host .logo img
                    right 0
                &.guest .logo img
                    left 0
            .score
                flex 1
                line-height 78px






    
</style>