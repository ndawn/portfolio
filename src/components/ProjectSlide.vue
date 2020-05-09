<template lang="pug">
    .slide(:class="{hidden: shift !== 0}" :style="{transform: `translateX(${shift}%)`}")
        img.logo(:src="slide.logo" v-if="slide.logo")
        h1.title(v-if="slide.title") {{ slide.title }}
        dynamic-image-shadow(
            :src="slide.screenshot"
            shift="16px"
            blurAmount="16px"
            :containerClasses="['container-photo']"
            :key="slide.id"
        )
        p.paragraph {{ slide.text }}
        p.paragraph(v-if="slide.url") Available at&nbsp;
            a.project-url(:href="`https://${slide.url}`" target="_blank") {{ slide.url }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'
import { SlideType } from '@/types'

@Component({
    name: 'ProjectSlide',
    components: {
        DynamicImageShadow
    }
})
export default class ProjectSlide extends Vue {
    @Prop({
        required: true
    })
    readonly slide!: SlideType;

    @Prop({
        required: true
    })
    readonly index!: number;

    unitaryShift: number = 120;

    get shift (): number {
        return this.unitaryShift * (this.index - this.$store.getters.currentSlideIndex);
    }
}
</script>

<style lang="scss" scoped>
.slide {
    position: absolute;
    margin-bottom: 64px;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    &.hidden {
        opacity: 0;
    }

    .logo {
        height: 72px;
        margin-bottom: 16px;
    }

    .title {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 16px;
        font-size: 72px;
    }

    .paragraph {
        text-align: justify;

        .project-url {
            color: inherit;
            text-decoration: underline;
        }
    }

    .container-text {
        display: inline-block;
        text-align: unset;
    }

    .container-photo {
        float: right;
        margin-left: 64px;
        width: 50%;
        height: 100%;
    }
}

@media screen and (max-height: 779px) {
    .slide {
        .paragraph {
            font-size: 16px;
        }
    }
}

@media screen and (max-width: 779px) {
    .slide {
        .logo {
            width: 100%;
            height: 48px;
            object-fit: contain;
        }

        .title {
            font-size: 48px;
        }

        .paragraph {
            font-size: 14px;
        }

        .container-photo {
            display: none;
        }
    }
}
</style>
