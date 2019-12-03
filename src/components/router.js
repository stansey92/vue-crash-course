import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Home.vue'
import About from './About.vue'
import User from './User.vue'
import NotFound from './NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home},
    { path: '/about', component: About},
    { path: '/user/:id', component: User},
    { path: '*', component: NotFound}
  ]
})

export default router