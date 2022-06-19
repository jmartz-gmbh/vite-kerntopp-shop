import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Cart from '../pages/cart.vue';
import Impressum from '../pages/impressum.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/impressum', component: Impressum },
  { path: '/cart', component: Cart },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})