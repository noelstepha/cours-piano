import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import AdultLesson from "@/views/AdultLesson.vue";
import ChildrenLesson from "@/views/ChildrenLesson.vue";
import Pricing from "@/views/Pricing.vue";
import Contact from "@/views/Contact.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/adult',
    meta: { title: 'Cours adulte et ados' },
    component: AdultLesson,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/children',
    meta: { title: 'Cours enfants' },
    component: ChildrenLesson,
  },
  {
    path: '/pricing',
    meta: { title: 'Tarif' },
    component: Pricing,
  },
  {
    path: '/contact',
    meta: { title: 'Contact' },
    component: Contact,
  },
  { path: '/:path(.*)', component: NotFound },
]
