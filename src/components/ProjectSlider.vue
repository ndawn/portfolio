<template lang="pug">
    .slider(
        v-touch:swipe="handleSwipe"
    )
        .slides
            project-slide(
                v-for="(slide, index) in slides"
                :slide="{...slide}"
                :index="index"
                :key="slide.id"
            )
        .indicator-container
            .indicator-list
                .indicator-dot(
                    v-for="(slide, index) in slides"
                    :class="{active: index === currentSlideIndex}"
                    @click="moveSlide(index)"
                )
        .arrow-container.arrow-container-left(
            :class="{hidden: currentSlideIndex === 0}"
            @click="moveSlide(currentSlideIndex - 1)"
        )
            .arrow.arrow-left
        .arrow-container.arrow-container-right(
            :class="{hidden: currentSlideIndex === slides.length - 1}"
            @click="moveSlide(currentSlideIndex + 1)"
        )
            .arrow.arrow-right
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { SlideType } from '@/types'
import ProjectSlide from '@/components/ProjectSlide.vue'
import { mapGetters } from 'vuex'

@Component({
    name: 'ProjectSlider',
    computed: mapGetters(['currentSlideIndex']),
    components: {
        ProjectSlide
    }
})
export default class ProjectSlider extends Vue {
    @Prop({
        required: true
    })
    readonly slides!: SlideType[];

    handleSwipe (direction: string) {
        if (direction === 'right') {
            // @ts-ignore
            this.moveSlide(this.currentSlideIndex - 1);
        } else if (direction === 'left') {
            // @ts-ignore
            this.moveSlide(this.currentSlideIndex + 1);
        }
    }

    moveSlide (index: number) {
        if (0 <= index && index < this.slides.length) {
            this.$store.dispatch('setCurrentSlideIndex', index);
        }
    }

    mounted () {
        // @ts-ignore
        window.slider = this;
    }
}
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    height: calc(100% - 192px);

    .slides {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .indicator-container {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        flex-direction: column;
        align-items: center;

        .indicator-list {
            padding: 16px;

            .indicator-dot {
                display: inline-block;
                margin: 0 4px;
                width: 12px;
                height: 12px;
                border-radius: 6px;
                background: #7ac8bd;
                transition: width 0.2s ease, background 0.2s ease;
                cursor: pointer;

                &:hover {
                    background: #93e3d2;
                }

                &:active {
                    background: #adffef;
                }

                &.active {
                    width: 36px;
                }
            }
        }
    }

    .arrow-container {
        display: flex;
        position: absolute;
        top: 0;
        width: 64px;
        height: 100%;
        align-items: center;
        justify-content: center;

        &-left {
            left: 0;
            transform: translateX(-100%);
        }

        &-right {
            right: 0;
            transform: translateX(100%);
        }

        &.hidden {
            display: none;
        }

        .arrow {
            padding: 24px;
            width: 0;
            border: solid #6dd5be;
            border-width: 0 2px 2px 0;
            cursor: pointer;

            &-left {
                transform: rotate(135deg);
            }

            &-right {
                transform: rotate(-45deg);
            }
        }
    }
}

@media screen and (max-width: 779px) {
    .slider {
        .indicator-container {
            transform: translateY(200%);
        }
    }
}
</style>
