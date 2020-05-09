<template lang="pug">
    page-slide
        section.about
            .container
                h1.title About Me
                dynamic-image-shadow(
                    :src="require('@/assets/photo.png')"
                    shift="16px"
                    blurAmount="16px"
                    :containerClasses="['container-photo']"
                    key="photo"
                )
                p.paragraph
                    | I'm {{ myAge }}. I currently live and study in Saint Petersburg, Russia.
                p.paragraph
                    | I first started to learn programming at the age of 16, when I was in high school.
                    | From that time I was learning (and am still learning) Python and was mastering the art
                    | of web development. As of now I have about 1 year of experience in web and predominantly
                    | in backend. Although my experience is pretty brief, I'm still young and furthermore
                    | I am enthusiastic about the things I do and am full of ambitions to create something great.
                    | I also have a few pet projects which you can take a look at below.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageSlide from '@/components/PageSlide.vue'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'

@Component({
    name: 'AboutMe',
    components: {
        PageSlide,
        DynamicImageShadow
    }
})
export default class AboutMe extends Vue {
    get myAge (): number {
        const birthDate = new Date(1998, 8, 3);
        const timeDelta = Date.now() - birthDate.getTime();

        return Math.floor(timeDelta / (1000 * 60 * 60 * 24 * 365.25));
    }
}
</script>

<style lang="scss" scoped>
.about {
    display: flex;
    height: 100%;
    align-items: center;

    .container {
        width: 100%;
        height: 512px;

        .title {
            display: inline-block;
            margin-top: 0;
            margin-bottom: 32px;
            font-size: 96px;
        }

        .paragraph {
            text-align: justify;
        }

        .container-photo {
            float: right;
            margin-left: 64px;
            width: 32%;
            height: 100%;
        }
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

@media screen and (max-width: 959px) {
    .about {
        flex-direction: column-reverse;
        justify-content: center;

        .container {
            .title {
                font-size: 72px;
            }
        }
    }
}

@media screen and (max-width: 779px) {
    .about {
        .container {
            .title {
                font-size: 48px;
            }

            .paragraph {
                margin-top: 0;
            }

            .container-photo {
                display: none;
            }
        }
    }
}
</style>
