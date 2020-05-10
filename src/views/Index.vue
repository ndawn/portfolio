<template lang="pug">
    section-container
        section.index
            h1.title Hi, I'm Max
            dynamic-image-shadow(
                :src="require('@/assets/photo.png')"
                borderRadius="25px"
                :containerClasses="['photo']"
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
        .scroll-down-pointer
            span.scroll-down-text Scroll down
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
    height: calc(100vh - 96px);
    align-items: center;
}

.index {
    height: 500px;
    align-items: center;
    color: #c1ffec;

    .title {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 120px;
    }

    .photo {
        float: right;
        margin-left: 64px;
        width: 32%;
        height: 100%;
    }

    .container-text, .photo {
        flex-shrink: 1;
        flex-grow: 1;
    }
}

.scroll-down-pointer {
    display: flex;
    position: absolute;
    bottom: 7vh;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
    animation: float 6s infinite;

    .scroll-down-text {
        font-size: 18px;
        color: #6dd5be;
    }

    .scroll-down-arrow {
        padding: 24px;
        width: 0;
        border: solid #6dd5be;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
}

@keyframes float {
    0% {
        bottom: 7vh;
    }
    15% {
        bottom: 5.2vh;
    }
    50% {
        bottom: 5vh;
    }
    100% {
        bottom: 7vh;
    }
}

@media screen and (max-width: 1199px) {
    .index {
        .container-text {
            .title {
                font-size: 96px;
            }
        }
    }
}

@media screen and (max-width: 959px) {
    .index {
        .container-text {
            .title {
                font-size: 72px;
            }
        }
    }
}

@media screen and (max-width: 779px) {
    .index {
        flex-direction: column-reverse;
        justify-content: center;

        .container-text {
            flex-basis: unset;
        }

        .logo {
            margin-bottom: 5rem;
        }

        .container-text, .logo {
            flex-shrink: unset;
            flex-grow: unset;
        }
    }
}

@media screen and (max-width: 559px) {
    .index {
        .container-text {
            .title {
                font-size: 48px;
            }

            .paragraph {
                font-size: 14px;
            }
        }
    }

    .scroll-down-pointer {
        transform: scale(0.68) translateY(30%);
    }
}
</style>
