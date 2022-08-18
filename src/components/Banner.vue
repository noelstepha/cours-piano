<template>
  <div class="banner flex flex-col">
    <div
        class="flex-grow flex flex-col items-center justify-center text-3xl text-white text-center p-5"
    >
      <div class="banner-text text-6xl md:text-8xl">
        <span class="font-baskerville italic">Espace musical des Blanchers</span><br />

        <h1 class="text-2xl uppercase font-light text-center mt-20 mb-0">Cours de piano pour adultes et enfants à Toulouse</h1>

        <div class="flex flex-wrap justify-center mt-4">
          <Button class="banner-btn text-base m-2 p-2 uppercase">
            <router-link to="#lesson">Cours de piano</router-link>
          </Button>
          <Button class="banner-btn text-base m-2 p-2 uppercase" to="/contact">
            <router-link to="/contact">Contactez nous</router-link>
          </Button>
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-3">
      <router-link to="#school">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-white h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
  name: "Banner",
  components:{Button}
}
</script>

<style scoped>
.banner {
  background-image: url("/img/banner.jpeg");
  background-position: center;
  background-origin: center;
  background-size: cover;
  min-height: 90vh;
}

.logo {
  max-width: 80px;
}

.banner-btn {
  background-color: rgba(57, 116, 125);
}

.banner-text {
  color: aliceblue;
  max-width: 60vw;
}

</style>
