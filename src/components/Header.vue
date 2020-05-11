<template lang="pug">
    header.header
        section-container
            nav.nav
                a.nav-item(href="#skills") My skills
                a.nav-item(href="#projects") My projects
            .right-block
                .job-badge Looking for a job!
                a.contact-link(href="https://github.com/ndawn" target="_blank")
                    img.contact-icon(:src="require('@/assets/github.svg')")
                a.contact-link(href="https://spb.hh.ru/resume/966231efff035889d90039ed1f466b456e426a" target="_blank")
                    img.contact-icon(:src="require('@/assets/hh.svg')")
                a.contact-link(href="https://www.linkedin.com/in/maksim-burmistrov-984124164/" target="_blank")
                    img.contact-icon(:src="require('@/assets/linkedin.svg')")
                a.contact-link(href="https://vk.com/burmistrovm" target="_blank")
                    img.contact-icon(:src="require('@/assets/vk.svg')")
                a.contact-link(href="https://teleg.run/ndawn" target="_blank")
                    img.contact-icon(:src="require('@/assets/telegram.svg')")
                a.contact-link(href="mailto:burmistrovm@live.ru" target="_blank")
                    img.contact-icon(:src="require('@/assets/email.svg')")
        .mobile
            a.contact-link(href="https://github.com/ndawn" target="_blank")
                img.contact-icon(:src="require('@/assets/github.svg')")
            a.contact-link(href="https://spb.hh.ru/resume/966231efff035889d90039ed1f466b456e426a" target="_blank")
                img.contact-icon(:src="require('@/assets/hh.svg')")
            a.contact-link(href="https://www.linkedin.com/in/maksim-burmistrov-984124164/" target="_blank")
                img.contact-icon(:src="require('@/assets/linkedin.svg')")
            a.contact-link(href="https://vk.com/burmistrovm" target="_blank")
                img.contact-icon(:src="require('@/assets/vk.svg')")
            a.contact-link(href="https://teleg.run/ndawn" target="_blank")
                img.contact-icon(:src="require('@/assets/telegram.svg')")
            a.contact-link(href="mailto:burmistrovm@live.ru" target="_blank")
                img.contact-icon(:src="require('@/assets/email.svg')")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionContainer from '@/components/SectionContainer.vue'


@Component({
    name: 'Header',
    components: {
        SectionContainer
    }
})
export default class Header extends Vue {
    mobileMenuActive: boolean = false;

    toggleMenu () {
        this.mobileMenuActive = !this.mobileMenuActive;
    }
}
</script>

<style lang="scss" scoped>
.section-container {
    padding-top: 0;
    padding-bottom: 0;
}

.header {
    width: 100%;
    height: 96px;
    font-size: 20px;

    .nav {
        display: inline-block;
        height: 100%;

        .nav-item {
            padding: 0 16px;
            line-height: 96px;
            color: #c1ffec;
            text-decoration: none;

            &:first-of-type {
                padding-left: 0;
            }
        }
    }

    .right-block {
        display: inline-flex;
        float: right;
        height: 100%;
        align-items: center;
    }

    .job-badge {
        margin: 0 32px;
        padding: 0 16px;
        height: 32px;
        line-height: 32px;
        white-space: nowrap;
        border-radius: 24px;
        box-shadow: 0 8px 16px rgba(58, 138, 113, 0.6);
        background: white;
    }

    .contact-link {
        display: block;
        margin: 0 12px;
        height: 32px;

        &:last-of-type {
            margin-right: 0;
        }

        .contact-icon {
            width: 32px;
            line-height: 96px;
            opacity: 0.7;
            transition: opacity 0.2s ease, fill 0.2s ease;

            &:hover {
                opacity: 1;
            }
        }
    }

    .mobile {
        display: none;
        position: absolute;
        width: 100%;
        height: 64px;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);

        .contact-link {
            margin: 4px;
            width: 36px;
        }

        &:after {
            content: 'Looking for a job!';
            position: absolute;
            padding: 2px 6px;
            bottom: -50%;
            font-size: 12px;
            box-shadow: 0 8px 16px rgba(58, 138, 113, 0.6);
            border-radius: 64px;
            background: white;
        }
    }
}
</style>
