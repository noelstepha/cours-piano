<template>
  <section
      class="flex items-center mb-12 bg-cover bg-center w-full text-5xl italic text-white font-baskerville bg-online">
    <h1 class="h-80 flex justify-center items-center text-center w-full goup">Cours de piano à distance</h1>
  </section>
  <section>
    <div class="container mx-auto mb-10">
      <div class="flex flex-wrap justify-stretch mx-5 md:mx-10 lg:mx-20">
        <FreeLesson class="mb-10" center color-rotation="150"/>
        <p class="p-10">
          En complément des cours traditionnels, ils ont lieu à distance via WhatsApp, FaceTime, Zoom,… avec votre smartphone ou tablette,… quelque soit votre niveau ou votre âge.
          Pas besoin d’équipement particulier.
          Ces cours sont accessibles de façon régulière ou ponctuelle, en cas d’incapacité de se déplacer pour un cours en présentiel.
          Des fichiers audios vous sont transmis pour compléter le travail personnel.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import FreeLesson from "@/components/FreeLesson.vue";
export default {
  name: "OnlineLesson",
  components: {FreeLesson}
}
</script>

<style scoped>
.bg-online {
  background-image: url('/img/online-banner.jpg');
}
</style>
