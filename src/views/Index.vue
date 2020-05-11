<template lang="pug">
    section-container
        section.index
            h1.title Hi, I'm Max
            dynamic-image-shadow(
                :src="require('@/assets/photo.png')"
                borderRadius="25px"
                :containerClasses="['photo-container']"
                :imageClasses="['photo']"
                key="photo"
            )
            p.paragraph
                | I'm a web developer from Saint Petersburg, Russia.
            p.paragraph
                | I'm interested in backend development predominantly, but frontend is an exciting part
                | of web to work with too. I have about 1 year of experience in backend and slightly less
                | in frontend. Although my experience is pretty brief, I'm still young and furthermore
                | I'm enthusiastic about the things I do and am full of ambitions to create something great.
                | I also have a few pet projects which you can take a look at below.
        .scroll-down-arrow-container
            .scroll-down-arrow
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionContainer from '@/components/SectionContainer.vue'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'

@Component({
    name: 'Index',
    components: {
        SectionContainer,
        DynamicImageShadow
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.section-container {
    display: flex;
    position: relative;
    height: 100vh;
    align-items: center;
}

.index {
    color: #c1ffec;

    .title {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 120px;
    }

    .photo-container {
        float: right;
        margin-left: 64px;
        width: 32%;
    }
}

.scroll-down-arrow-container {
    display: flex;
    position: absolute;
    bottom: 7vh;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    animation: float 6s infinite;

    .scroll-down-arrow {
        padding: 16px;
        width: 0;
        bottom: 7vh;
        border: solid #6dd5be;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
}

@keyframes float {
    0% {
        transform: translateY(-80%);
    }
    15% {
        transform: translateY(-8%);
    }
    50% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-80%);
    }
}

@media screen and (max-width: 1199px) {
    .index {
        .title {
            font-size: 90px;
        }
    }
}

@media screen and (max-width: 959px) {
    .index {
        .title {
            font-size: 72px;
        }
    }
}

@media screen and (max-width: 779px) {
    .section-container {
        padding: 64px 24px 32px;
        height: unset;
        align-items: unset;
    }

    .index {
        .title {
            display: block;
            margin-top: 64px;
            margin-bottom: 16px;
            text-align: center;
        }

        .photo-container {
            float: none;
            margin: 0 auto 48px;
            width: 60%;
        }
    }

    .scroll-down-arrow-container {
        display: none;
    }
}

@media screen and (max-width: 559px) {
    .index {
        .title {
            font-size: 48px;
        }

        .paragraph {
            font-size: 14px;
        }
    }
}
</style>
