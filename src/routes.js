import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import AdultLesson from "@/views/AdultLesson.vue";
import ChildrenLesson from "@/views/ChildrenLesson.vue";
import Pricing from "@/views/Pricing.vue";
import Contact from "@/views/Contact.vue";
import OnlineLesson from "@/views/OnlineLesson.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Ecole de piano Blanchers sur Toulouse' } },
  {
    path: '/adult',
    meta: { title: 'Cours de piano pour adultes' },
    component: AdultLesson,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: '/children',
    meta: { title: 'Cours de piano pour enfants' },
    component: ChildrenLesson,
  },
  {
    path: '/online',
    meta: { title: 'Cours de piano en ligne' },
    component: OnlineLesson,
  },
  {
    path: '/pricing',
    meta: { title: 'Tarif des cours de piano' },
    component: Pricing,
  },
  {
    path: '/contact',
    meta: { title: 'Contact école de piano' },
    component: Contact,
  },
  { path: '/:path(.*)', component: NotFound },
]
