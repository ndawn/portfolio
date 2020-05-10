<template lang="pug">
    .card
        slot
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'SectionCard'
})
export default class SectionCard extends Vue {}
</script>

<style lang="scss" scoped>
.card {
    padding: 64px;
    box-sizing: border-box;
    border-radius: 25px;
    box-shadow: 0 16px 16px rgba(58, 138, 113, 0.4);
    background-color: white;
}
</style>
