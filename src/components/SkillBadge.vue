<template lang="pug">
    span.badge {{ text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'


@Component({
    name: 'SkillBadge'
})
export default class SkillBadge extends Vue {
    @Prop({
        default: ''
    })
    readonly text!: string;
}
</script>

<style lang="scss" scoped>
.badge {
    display: inline-block;
    margin: 4px;
    padding: 4px 12px;
    box-shadow: 0 8px 16px rgba(58, 138, 113, 0.6);
    border-radius: 64px;
    white-space: nowrap;
    font-size: 16px;
    color: #c1ffec;
    background: #3a8a71;
}
</style>