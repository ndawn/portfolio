<template lang="pug">
    .indicator-container
        .indicator-list
            .indicator-dot(
                v-for="(route, index) in routeList"
                :class="{active: route.name === $route.name}"
                :title="route.name"
                @click="slideTo(route, index)"
            )
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'

@Component({
    name: 'DotIndicator'
})
export default class DotIndicator extends Vue {
    routeList: RouteConfig[] = [];

    slideTo (route: RouteConfig, index: number) {
        this.$store.dispatch('setScrollDirection', 'none');
        this.$router.push({name: route.name});
    }

    created () {
        // @ts-ignore
        this.routeList = this.$router.options.routes;
    }
}
</script>

<style lang="scss" scoped>
.indicator-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    align-items: center;
    z-index: 1;

    .indicator-list {
        padding: 16px;

        .indicator-dot {
            margin: 8px 0;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            background: #7ac8bd;
            transition: height 0.2s ease, background 0.2s ease;
            cursor: pointer;

            &:hover {
                background: #93e3d2;
            }

            &:active {
                background: #adffef;
            }

            &.active {
                height: 36px;
            }
        }
    }
}

@media screen and (max-width: 779px) {
    .indicator-container {
        .indicator-list {
            padding: 8px;

            .indicator-dot {
                width: 8px;
                height: 8px;

                &.active {
                    height: 24px;
                }
            }
        }
    }
}
</style>
