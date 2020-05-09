<template lang="pug">
    #app(v-touch:swipe="handleSwipe")
        dot-indicator
        transition(
            name="slide"
            :duration="{leave: 500, enter: 500}"
            @before-leave="handleTransitionLeave"
            @before-enter="handleTransitionEnter"
            @after-enter="handleTransitionDone"
        )
            router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DotIndicator from '@/components/DotIndicator.vue'

@Component({
    name: 'App',
    components: {
        DotIndicator
    }
})
export default class App extends Vue {
    canScroll: boolean = true;

    handleTransitionLeave (leavingElement: HTMLElement) {
        if (this.$store.getters.scrollDirection === 'top') {
            leavingElement.classList.add('next');
        } else if (this.$store.getters.scrollDirection === 'bottom') {
            leavingElement.classList.add('prev');
        } else if (this.$store.getters.scrollDirection === 'none') {
            leavingElement.classList.add('none');
        }
    }

    handleTransitionEnter (enteringElement: HTMLElement) {
        if (this.$store.getters.scrollDirection === 'top') {
            enteringElement.classList.add('next');
        } else if (this.$store.getters.scrollDirection === 'bottom') {
            enteringElement.classList.add('prev');
        } else if (this.$store.getters.scrollDirection === 'none') {
            enteringElement.classList.add('none');
        }
    }

    handleTransitionDone (enteringElement: HTMLElement) {
        this.$store.dispatch('resetTransitionParams');
        enteringElement.classList.remove('next', 'prev', 'none');
    }

    handleWheel (event: WheelEvent) {
        if (this.canScroll) {
            this.canScroll = false;
            setTimeout(() => {this.canScroll = true}, 1000);

            if (event.deltaY > 0) {
                this.$store.dispatch('setScrollDirection', 'top');
                this.$route.meta.nextRoute && this.$router.push(this.$route.meta.nextRoute);
            } else {
                this.$store.dispatch('setScrollDirection', 'bottom');
                this.$route.meta.previousRoute && this.$router.push(this.$route.meta.previousRoute);
            }
        }
    }

    handleSwipe (direction: string) {
        if (direction === 'top') {
            this.$store.dispatch('setScrollDirection', 'top');
            this.$route.meta.nextRoute && this.$router.push(this.$route.meta.nextRoute);
        } else if (direction === 'bottom') {
            this.$store.dispatch('setScrollDirection', 'bottom');
            this.$route.meta.previousRoute && this.$router.push(this.$route.meta.previousRoute);
        }
    }

    mounted () {
        window.addEventListener('wheel', this.handleWheel);
    }

    beforeUnmount () {
        window.removeEventListener('wheel', this.handleWheel);
    }
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
    height: 100vh;
    overflow: hidden;
}

#app {
    position: relative;
    width: 100%;
    height: 100%;
    font-family: 'Source Sans Pro', -apple-system, Arial, sans-serif;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #c1ffec;
    background: radial-gradient(#50af99, #4a97ab);

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Nevis', sans-serif;
    }

    @media screen and (max-width: 1199px) {
        font-size: 20px;
    }

    @media screen and (max-width: 959px) {
        font-size: 18px;
    }

    .slide-enter-active, .slide-leave-active {
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    }

    .slide-enter.next, .slide-leave-to.prev {
        transform: translateY(100vh);
    }

    .slide-enter.none, .slide-leave-to.none {
        opacity: 0;
    }

    .slide-enter-to, .slide-leave {
        transform: translateY(0);
        opacity: 1;
    }

    .slide-leave-to.next, .slide-enter.prev {
        transform: translateY(-100vh);
    }
}
</style>
