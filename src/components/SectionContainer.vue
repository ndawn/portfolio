<template lang="pug">
    .section-container
        slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'SectionContainer.vue'
})
export default class PageSlide extends Vue {}
</script>

<style lang="scss" scoped>
.section-container {
    margin: auto;
    padding: 64px;
    max-width: 1200px;
    height: 100%;
    box-sizing: border-box;
}

@media screen and (max-width: 779px) {
    .section-container {
        padding: 24px;
    }
}
</style>
