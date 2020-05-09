<template lang="pug">
    page-slide
        section.hire
            h1.title Hire me
            ul.contact-list
                li.contact-list-item
                    a.contact-link(href="https://vk.com/burmistrovm" target="_blank")
                        img.contact-icon(src="../assets/vk.png")
                li.contact-list-item
                    a.contact-link(href="https://t.me/@ndawn" target="_blank")
                        img.contact-icon(src="../assets/telegram.png")
                li.contact-list-item
                    a.contact-link(href="https://www.linkedin.com/in/maksim-burmistrov-984124164/" target="_blank")
                        img.contact-icon(src="../assets/linkedin.png")
                li.contact-list-item
                    a.contact-link(href="https://spb.hh.ru/resume/966231efff035889d90039ed1f466b456e426a" target="_blank")
                        img.contact-icon(src="../assets/hh.png")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PageSlide from '@/components/PageSlide'

@Component({
    name: 'HireMe',
    components: {
        PageSlide
    }
})
export default class HireMe extends Vue {}
</script>

<style lang="scss" scoped>
.hire {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        margin-top: 0;
        margin-bottom: 32px;
        font-size: 128px;
    }

    .contact-list {
        padding-left: 0;
        list-style: none;

        .contact-list-item {
            display: inline-block;
            margin: 0 16px;
            opacity: 0.6;
            transition: opacity 0.2s ease;

            .contact-icon {
                width: 64px;
            }

            &:hover {
                opacity: 0.75;
            }

            &:active {
                opacity: 1;
            }
        }
    }
}

@media screen and (max-width: 779px) {
    .hire {
        .title {
            margin-bottom: 0;
            font-size: 48px;
        }

        .contact-list {
            .contact-list-item {
                margin: 0 8px;

                .contact-icon {
                    width: 32px;
                }
            }
        }
    }
}
</style>
