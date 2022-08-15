<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <header class="bg-white shadow" v-if="$route.meta.title">
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer class="bg-darkIrish">
      <Footer />
    </footer>
  </div>
</template>
