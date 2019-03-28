<template lang="pug">
div.football
    MatchList
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MatchList from './MatchList.vue'
@Component({
    components: {
        MatchList
    }
})
export default class Football extends Vue {}
</script>

<style lang="stylus" scoped>
p
    width 100px
    text-align right
    word-break break-all
</style>