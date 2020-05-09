<template lang="pug">
    .slide-container-absolute
        .slide-container-center
            slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'PageSlide'
})
export default class PageSlide extends Vue {}
</script>

<style lang="scss" scoped>
.slide-container-absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .slide-container-center {
        margin: auto;
        padding: 64px;
        width: 100%;
        max-width: 1200px;
        height: 100%;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 779px) {
    .slide-container-absolute {
        .slide-container-center {
            padding: 24px;
        }
    }
}
</style>