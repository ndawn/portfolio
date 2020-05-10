<template lang="pug">
    section-container
        section-card
            section.skills
                h1.title My skills
                .skill-container
                    .skill(v-for="(skill, index) in skills")
                        dynamic-image-shadow(
                            :containerClasses="['skill-icon']"
                            :src="skill.logo"
                            :alt="skill.name"
                            :key="index"
                        )
                        h3.skill-name {{ skill.name }}
                        span.skill-experience {{ skill.experience }} years of experience
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SectionContainer from '@/components/SectionContainer.vue'
import SectionCard from '@/components/SectionCard.vue'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'
import { mapGetters } from 'vuex'

@Component({
    name: 'MySkills',
    computed: mapGetters(['skills']),
    components: {
        SectionContainer,
        SectionCard,
        DynamicImageShadow
    }
})
export default class MySkills extends Vue {

}
</script>

<style lang="scss" scoped>
.skills {
    .title {
        margin-top: 0;
        margin-bottom: 64px;
        font-size: 96px;
    }

    .skill-container {
        display: flex;
        width: 100%;
        flex-wrap: wrap;

        .skill {
            margin-bottom: 64px;
            flex-basis: 25%;
            text-align: center;

            .skill-icon {
                width: 120px;
                height: 120px;
            }

            .skill-name {
                margin-top: 42px;
                margin-bottom: 0;
            }

            .skill-experience {
                font-size: 18px;
            }
        }
    }
}

@media screen and (max-width: 1199px) {
    .skills {
        .title {
            font-size: 72px;
        }
    }
}

@media screen and (max-width: 779px) {
    .skills {
        .title {
            font-size: 48px;
        }
    }
}
</style>
