<template lang="pug">
    page-slide
        section.projects
            h1.title My projects
            project-slider(:slides="slides")
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import PageSlide from '@/components/PageSlide'
import ProjectSlider from '@/components/ProjectSlider'
import { mapGetters } from 'vuex'

@Component({
    name: 'MyProjects',
    components: {
        PageSlide,
        ProjectSlider
    },
    computed: mapGetters(['slides'])
})
export default class MyProjects extends Vue {}
</script>

<style lang="scss" scoped>
.projects {
    height: 100%;

    .title {
        margin-top: 0;
        margin-bottom: 64px;
        font-size: 96px;
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
            margin-bottom: 16px;
            font-size: 48px;
        }
    }
}
</style>
