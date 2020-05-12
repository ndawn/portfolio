<template lang="pug">
    .image-container(:class="containerClasses" :style="{height: containerHeight}")
        img.image.shadow(:src="src" :style="{...style, ...shadowStyle}" :class="imageClasses")
        img.image(:src="src" :style="style" :class="imageClasses" :alt="alt" :ref="'img' + src" @load="computeContainerHeight")
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

    @Prop({
        default: '0px'
    })
    readonly borderRadius!: string;

    @Prop()
    readonly containerClasses!: string[];

    @Prop()
    readonly imageClasses!: string[];

    @Prop()
    readonly alt!: string;

    containerHeight: string = '0px';

    get style (): {borderRadius: string} {
        return {
            borderRadius: this.borderRadius
        }
    }

    get shadowStyle (): {marginTop: string, filter: string} {
        return {
            marginTop: this.shift,
            filter: `blur(${this.blurAmount})`
        }
    }

    computeContainerHeight () {
        const containerHeight = (this.$refs['img' + this.src] as HTMLImageElement)?.height || 0;

        if (containerHeight > 0) {
            this.containerHeight = `${containerHeight}px`;
        }

        setTimeout(this.computeContainerHeight, 100);
    }

    mounted () {
        setTimeout(this.computeContainerHeight, 200);

        window.addEventListener('resize', (event: Event) => {
            this.$forceUpdate();
        });
    }

    updated () {
        this.computeContainerHeight();
    }

    beforeDestroy () {
        window.removeEventListener('resize', (event: Event) => {
            this.$forceUpdate();
        });
    }
}
</script>

<style lang="scss" scoped>
.image-container {
    position: relative;

    .image {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }
}
</style>
