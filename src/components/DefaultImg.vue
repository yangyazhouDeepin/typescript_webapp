<template lang="pug">
    img(:src="imgSrc || defaultUrl || setDefaultImg()" @error.once="setDefaultImg()")
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class DefaultImg extends Vue {
    private imgSrc:string = ''
    @Prop(String) private readonly src!: string
    @Prop(String) private readonly defaultUrl!: string
    created(): void {
        this.imgSrc = this.src
        console.log(this.defaultUrl)
    }
    private setDefaultImg(): void {
        this.imgSrc = this.defaultUrl || require('@/assets/images/default.png')
    }
}
</script>