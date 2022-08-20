<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <nav class="bg-darkIrish">
    <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="toggle"
          >
            <span class="sr-only">Open main menu</span>
            <!--
              Icon when menu is closed.

              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg :class="{hidden: !menuOpen, block: menuOpen}" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg :class="{hidden: menuOpen, block: !menuOpen}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
<!--            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow">-->
<!--            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500" alt="Workflow">-->
          </div>
          <div class="hidden md:block md:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <router-link
                  to="/"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/',
                      'bg-gray-900': $router.currentRoute.value.path === '/',
                      'text-white': $router.currentRoute.value.path === '/'
                   }"
                  aria-current="page"
              >Accueil</router-link>

              <router-link
                  to="/children"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/children',
                      'bg-gray-900': $router.currentRoute.value.path === '/children',
                      'text-white': $router.currentRoute.value.path === '/children'
                   }"
              >Cours enfants</router-link>

              <router-link
                  to="/adult"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/adult',
                      'bg-gray-900': $router.currentRoute.value.path === '/adult',
                      'text-white': $router.currentRoute.value.path === '/adult'
                   }"
              >Cours adultes et ados</router-link>

              <router-link
                  to="/online"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/online',
                      'bg-gray-900': $router.currentRoute.value.path === '/online',
                      'text-white': $router.currentRoute.value.path === '/online'
                   }"
              >Cours à distance</router-link>

              <router-link
                  to="/pricing"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/pricing',
                      'bg-gray-900': $router.currentRoute.value.path === '/pricing',
                      'text-white': $router.currentRoute.value.path === '/pricing'
                   }"
              >Tarifs / Horaires</router-link>

              <router-link
                  to="/contact"
                  class="px-3 py-2 hover:bg-gray-700 hover:text-white rounded-md text-sm font-medium"
                  :class="{
                      'text-gray-300': $router.currentRoute.value.path !== '/contact',
                      'bg-gray-900': $router.currentRoute.value.path === '/contact',
                      'text-white': $router.currentRoute.value.path === '/contact'
                   }"
              >Contact</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div :class="{hidden: menuOpen, block: !menuOpen}" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <router-link
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/',
            }"
            aria-current="page"
        >Accueil</router-link>

        <router-link
            to="/children"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/children',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/children',
            }"
        >Cours enfants</router-link>

        <router-link
            to="/adult"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/adult',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/adult',
            }"
        >Cours adultes et ados</router-link>

        <router-link
            to="/online"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/online',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/online',
            }"
        >Cours à distance</router-link>

        <router-link
            to="/pricing"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/pricing',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/pricing',
            }"
        >Tarifs et Horaires</router-link>

        <router-link
            to="/contact"
            class="block px-3 py-2 rounded-md text-base font-medium"
            :class="{
              'text-gray-300 hover:bg-gray-700 hover:text-white': $router.currentRoute.value.path !== '/contact',
              'bg-gray-900 text-white': $router.currentRoute.value.path === '/contact',
            }"
        >Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar.vue",
  data() {
    return {
      menuOpen: true
    }
  },
  created() {
    console.log(this.$router.currentRoute.value.path)
  },
  methods: {
    toggle() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
</style>
