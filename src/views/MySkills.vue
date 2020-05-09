<template lang="pug">
    page-slide
        section.skills
            h1.title My skills
            .skill-container
                dynamic-image-shadow(
                    v-for="(skill, index) in skills"
                    :containerClasses="['skill-icon']"
                    :src="skill.logo"
                    :alt="skill.name"
                    :key="index"
                )
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PageSlide from '@/components/PageSlide.vue'
import DynamicImageShadow from '@/components/DynamicImageShadow.vue'
import { mapGetters } from 'vuex'

@Component({
    name: 'MySkills',
    computed: mapGetters(['skills']),
    components: {
        DynamicImageShadow,
        PageSlide
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
        align-items: center;

        .skill-icon {
            display: inline-block;
            width: 120px;
            height: 180px;
            margin: 16px;
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
