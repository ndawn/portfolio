import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        meta: {
            previousRoute: null,
            nextRoute: '/about'
        }
    },
    {
        path: '/about',
        name: 'About Me',
        component: () => import(/* webpackChunkName: "aboutme" */ '@/views/AboutMe.vue'),
        meta: {
            previousRoute: '/',
            nextRoute: '/skills'
        }
    },
    {
        path: '/skills',
        name: 'My Skills',
        component: () => import(/* webpackChunkName: "myskills" */ '@/views/MySkills.vue'),
        meta: {
            previousRoute: '/about',
            nextRoute: '/projects'
        }
    },
    {
        path: '/projects',
        name: 'My Projects',
        component: () => import(/* webpackChunkName: "myprojects" */ '@/views/MyProjects.vue'),
        meta: {
            previousRoute: '/skills',
            nextRoute: '/hire'
        }
    },
    {
        path: '/hire',
        name: 'Hire Me',
        component: () => import(/* webpackChunkName: "hireme" */ '@/views/HireMe.vue'),
        meta: {
            previousRoute: '/projects',
            nextRoute: null
        }
    }
]

const router = new VueRouter({
  routes
})

export default router
