import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(process.env.NODE_ENV === "production" ? "/cours-piano/" : "/"),
  routes,
  scrollBehavior (to, from, savedPosition) {
    //https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return { el: to.hash }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, x: 0, y: 0 }
    }
  }
})

const DEFAULT_TITLE = 'Ecole de piano Blanchers sur Toulouse';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

app.use(router)
app.mount('#app')
