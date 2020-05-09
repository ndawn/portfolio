<template lang="pug">
    .image-container(:class="containerClasses")
        img.image.shadow(:src="src" :style="style" :class="imageClasses")
        img.image(:src="src" :class="imageClasses" :alt="alt")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
    name: 'DynamicImageShadow'
})
export default class DynamicImageShadow extends Vue {
    @Prop({
        required: true
    })
    readonly src!: string;

    @Prop({
        default: '16px'
    })
    readonly shift!: string;

    @Prop({
        default: '16px'
    })
    readonly blurAmount!: string;

    @Prop()
    readonly containerClasses!: string[];

    @Prop()
    readonly imageClasses!: string[];

    @Prop()
    readonly alt!: string;

    get style (): {marginTop: string, filter: string} {
        return {
            marginTop: this.shift,
            filter: `blur(${this.blurAmount})`
        }
    }
}
</script>

<style lang="scss" scoped>
.image-container {
    position: relative;

    .image {
        position: absolute;
        width: 100%;
        border-radius: 25px;
    }
}
</style>
