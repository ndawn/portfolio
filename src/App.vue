<template lang="pug">
    #app
        page-header
        index
        a(name="skills")
        my-skills
        a(name="projects")
        my-projects
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '@/components/Header.vue'
import Index from '@/views/Index.vue'
import MySkills from '@/views/MySkills.vue'
import MyProjects from '@/views/MyProjects.vue'

@Component({
    name: 'App',
    components: {
        PageHeader,
        Index,
        MyProjects,
        MySkills
    }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

html {
    background-color: #4a97ab;
}

body {
    margin: 0;
    width: 100vw;
    overflow-x: hidden;
}

#app {
    position: relative;
    width: 100%;
    font-family: 'Source Sans Pro', -apple-system, Arial, sans-serif;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #3a8a71;
    background: linear-gradient(to right, #4a97ab, #50af99, #4a97ab);

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nevis', sans-serif;
    }

    .paragraph {
        text-align: justify;
    }

    .header {
        position: absolute;
        z-index: 1;
    }

    @media screen and (max-width: 1199px) {
        font-size: 20px;
    }

    @media screen and (max-width: 959px) {
        font-size: 18px;
    }
}

@media screen and (max-width: 959px) {
    #app {
        .header {
            .section-container {
                display: none;
            }

            .mobile {
                display: flex;
            }
        }
    }
}
</style>
