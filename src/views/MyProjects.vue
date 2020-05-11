<template lang="pug">
    section-container
        section-card
            section.projects
                h1.title My projects
                .project(v-for="project in projects")
                    .column-left
                        img.project-logo(:src="project.logo" v-if="project.logo")
                        h1.project-title(v-if="project.title") {{ project.title }}
                        p.paragraph {{ project.text }}
                        p.paragraph(v-if="project.url") Available at&nbsp;
                            a.project-url(:href="`https://${project.url}`" target="_blank") {{ project.url }}
                    .column-right
                        .project-techs
                            skill-badge(v-for="tech in project.tech" :text="tech" :key="tech")
                        dynamic-image-shadow(
                            :src="project.screenshot"
                            shift="16px"
                            blurAmount="16px"
                            borderRadius="25px"
                            :containerClasses="['container-photo']"
                            :key="project.id"
                        )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionCard from '@/components/SectionCard.vue'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'
import SkillBadge from '@/components/SkillBadge.vue'
import { mapGetters } from 'vuex'

@Component({
    name: 'MyProjects',
    components: {
        SectionContainer,
        SectionCard,
        DynamicImageShadow,
        SkillBadge
    },
    computed: mapGetters(['projects'])
})
export default class MyProjects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
    .title {
        display: inline-block;
        margin-top: 0;
        margin-bottom: 64px;
        font-size: 96px;
    }

    .project {
        display: flex;
        margin-bottom: 64px;
        width: 100%;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;

        .column-left, .column-right {
            flex-basis: 46%;
            flex-shrink: 0;
            flex-grow: 0;
        }

        .column-left {
            margin-right: 16px;
        }

        .column-right {
            display: flex;
            flex-direction: column;
            margin-left: 16px;
        }

        .project-logo {
            height: 72px;
            margin-bottom: 16px;
        }

        .project-title {
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

        .container-photo {
            margin-top: 32px;
            width: 100%;
        }
    }
}

@media screen and (max-width: 1199px) {
    .projects {
        .title {
            font-size: 72px;
        }
    }
}

@media screen and (max-width: 779px) {
    .projects {
        .title {
            font-size: 48px;
            text-align: center;
        }

        .project {
            .column-left, .column-right {
                margin: 0;
                flex-basis: 100%;
            }

            .column-right {
                flex-direction: column-reverse;
            }

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
                margin-bottom: 32px;
            }
        }
    }
}
</style>
