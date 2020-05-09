<template lang="pug">
    page-slide
        section.index
            .container-text
                h1.title Hi, I'm Max
                p.paragraph
                    | I'm a web developer from Saint Petersburg, Russia.
                    br
                    | And this is my personal page. Welcome.
            img.logo(src="../assets/avatar.svg")
        .scroll-down-pointer
            span.scroll-down-text Scroll down
            .scroll-down-arrow
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PageSlide from '@/components/PageSlide'

@Component({
    name: 'Index',
    components: {
        PageSlide
    }
})
export default class Index extends Vue {

}
</script>

<style lang="scss" scoped>
.index {
    display: flex;
    height: 100%;
    align-items: center;

    .container-text {
        display: inline-block;
        text-align: unset;
        flex-basis: 62%;

        .title {
            margin-top: 0;
            margin-bottom: 32px;
            font-size: 128px;
        }
    }

    .logo {
        flex-basis: 32%;
    }

    .container-text, .logo {
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
